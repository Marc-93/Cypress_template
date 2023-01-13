/// <reference types="Cypress"  />

const web_url = 'https://rahulshettyacademy.com/AutomationPractice/#/'
const new_tab = '#opentab'

describe('Test suite 5', ()=>
{
  it('test 7: Navigation functions', ()=>
{
    // Opens the url
    cy.visit(web_url)
    cy.get(new_tab).invoke('removeAttr', 'target').click()
    cy.url().should('include', 'academy')
    cy.go('back')
})
})
