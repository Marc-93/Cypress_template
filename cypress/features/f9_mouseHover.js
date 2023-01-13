/// <reference types="Cypress"  />

const web_url = 'https://rahulshettyacademy.com/AutomationPractice/#/'
const mouseHover = '.mouse-hover-content'

describe('Test suite 9', ()=>
{
  it('test 1: mouse hover', ()=>
{
    // Opens the url
    cy.visit(web_url)
    cy.get(mouseHover).invoke('show')
    cy.contains('Top').click()
    cy.url().should('include', 'top')
    cy.contains('Top').click({force:true})
})
})
