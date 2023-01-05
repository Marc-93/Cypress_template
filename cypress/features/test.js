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
        // Opens the url
        cy.visit(web_url)
        
        // Gets the id of search bar and types cu in search bar
        cy.get(search_bar).type("cu")

        // Gets the product list and filters by just product list, then checks if there is 1 product
        cy.get(product_list).find(product).should('have.length.at.least',1)
        
        // Gets the product list, selects the first item and clicks into add cart action
        cy.get(product).eq(0).find(add_to_cart).click()

        // same but using text to have an example
        // using contains cy.get(product).eq(1).contains('ADD TO CART').click()

        // gets the product list, finds all products in each function, selects if name is the expected one
        cy.get(product_list).find(product).each((element, index, listOfelements) => {

          // Inside the product list for each product, finds the text
          const product_text = element.find('h4.product-name').text().toLocaleLowerCase()
          
          // Checks if product name is capsicum in order to add it to the cart
          if(product_text.includes("capsicum")){
            // wrap the element is needed due promise is not resolved here
            cy.wrap(element).find(add_to_cart).click()
          }
        })
    })
  })