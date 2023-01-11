/// <reference types="Cypress"  />

const web_url = 'https://rahulshettyacademy.com/AutomationPractice/#/'
const hide_element = '#hide-textbox'
const show_element = '#show-textbox'
const visibility_element = "#displayed-text"

describe('Test suite 5', ()=>
{
  it('test 1: Invisible', ()=>
{
    // Opens the url
    cy.visit(web_url)
    cy.get(show_element).click()
    cy.get(visibility_element).should('be.visible')

    cy.get(hide_element).click()
    cy.get(visibility_element).should('not.be.visible')

})
})
