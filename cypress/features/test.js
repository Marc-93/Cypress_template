/// <reference types="Cypress"  />  
  
const web_url = 'https://rahulshettyacademy.com/seleniumPractise/#/'
const search_bar = '.search-keyword'
const product_list = '.product'


  describe('Test suite', ()=> 
  {
    it('test case', ()=>
    {
        cy.visit(web_url)
        cy.get(search_bar).type("cucumber")
        cy.wait(1000)
        cy.get(product_list).should('have.lengt',1)
    })

    it('test case', ()=>
    {
        expect(true).to.equal(true)
    })
  })