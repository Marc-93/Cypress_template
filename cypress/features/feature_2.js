/// <reference types="Cypress"  />  


  
const web_url = 'https://rahulshettyacademy.com/seleniumPractise/#/'
const search_bar = '.search-keyword'
const product_list =  '.products'
const product = '.product:visible'
const add_to_cart = '.product-action button'



  describe('Test suite 2', ()=> 
  {
    it('test 1: Proceed to buy an element', ()=>
    {
       // Opens the url
      cy.visit(web_url)
        
       // Gets the id of search bar and types cu in search bar
      cy.get(search_bar).type("Brocolli")

      cy.get(product_list).find(product).each(($element, index, $listOfElements) => {
        const product_text = $element.find('h4.product-name').text().toLocaleLowerCase()
        if(product_text.includes("brocolli")){
          // wrap the element is needed due promise is not resolved here
          cy.wrap($element).find(add_to_cart).click()
        }
        cy.get('.cart-icon > img').click()
        cy.get('.cart-preview > .action-block > button').click()
        cy.contains('place order', {matchCase: false}).click()

      })

    })
  })
