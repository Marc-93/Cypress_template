/// <reference types="Cypress"  />  


  
const web_url = 'https://rahulshettyacademy.com/seleniumPractise/#/'
const search_bar = '.search-keyword'
const product_list =  '.products'
const product = '.product:visible'
const add_to_cart = '.product-action button'



  describe('Test suite', ()=> 
  {
    it('test case', ()=>
    {
        cy.visit(web_url)
        cy.get(search_bar).type("cu")
        cy.get(product_list).find(product).should('have.length.at.least',1)
        cy.get(product).eq(0).find(add_to_cart).click()
        // using contains cy.get(product).eq(1).contains('ADD TO CART').click()
        cy.get(product_list).find(product).each(($el, index, $list) => {
          const product_text = $el.find('h4.product-name').text().toLocaleLowerCase()
          if(product_text.includes("capsicum")){
            cy.wrap($el).find(add_to_cart).click()
          }
        })
    })
  })