/// <reference types="Cypress"  />

const web_url = 'https://rahulshettyacademy.com/AutomationPractice/#/'
const new_tab = '#opentab'

describe('Test suite 7', ()=>
{
  it('test 1: Navigation functions', ()=>
{
    // Opens the url
    cy.visit(web_url)
    cy.get(new_tab).invoke('removeAttr', 'target').click()
    cy.url().should('include', 'academy')
    cy.go('back')
})

  it('test 2: check url', ()=>
{
    // Opens the url
    cy.visit(web_url)
    cy.get(new_tab).then((element)=>{
      const url = element.prop('href')
      expect(url).to.include('rahulshettyacademy')
    })
  })
})
