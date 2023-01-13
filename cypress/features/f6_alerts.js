/// <reference types="Cypress"  />

const web_url = 'https://rahulshettyacademy.com/AutomationPractice/#/'
const alert_button = '#alertbtn'
const alert_confirm = "[value='Confirm']"

describe('Test suite 5', ()=>
{
  it('test 1: Alerts and confirm windows', ()=>
{
    // Opens the url
    cy.visit(web_url)
    cy.get(alert_button).click()
    cy.get(alert_confirm).click()

    // get the text from alert, firing the alert directly to browser:
    cy.on('window:alert', (str)=>{
        //assert the text obtained from alert matches with the expected using mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    // get the text from alert, firing the alert directly to browser:
    cy.on('window:confirm', (str)=>{
        //assert the text obtained from alert matches with the expected using mocha
        expect(str).to.equal('Hello , are you sure you want to confirm?')
    })
})
})
