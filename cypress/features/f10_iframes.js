/// <reference types="Cypress"  />
/// <reference types="Cypress-iframe"  />
import 'cypress-iframe'

const web_url = 'https://rahulshettyacademy.com/AutomationPractice/#/'
const iframe_object = '#hide-textbox'


describe('Test suite 10', ()=>
{
  it('test 1: iframes', ()=>
{
    // Opens the url
    cy.visit(web_url)
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find("a[href='mentorship']").eq(0).click()
})
})
