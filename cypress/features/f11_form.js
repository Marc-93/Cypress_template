/// <reference types="Cypress"  />

const web_url = 'https://rahulshettyacademy.com/angularpractice/'
const form_name = ".form-group input[name='name']"
const binding_name = "input[name='name']:nth-child(2)"


describe('Test suite 11', ()=>
{
  beforeEach(()=>{
    // Opens the url
    cy.fixture('formData').then((user) => {
        // "this" is still the test context object
        globalThis.user = user
      })
    cy.visit(web_url)

  })

  it('test 1: form test data', ()=>
{
    cy.get(form_name).type(globalThis.user.name)
    cy.get(binding_name).should('have.value', globalThis.user.name)
    cy.test(globalThis.user.name)
})
})
