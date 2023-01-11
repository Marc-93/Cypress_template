/// <reference types="Cypress"  />



const web_url = 'https://rahulshettyacademy.com/AutomationPractice/#/'
const checkbox_1 = '#checkBoxOption1'
const radio_1 = "[value='radio1']"
const radio_2 = "[value='radio2']"
const radio_3 = "[value='radio3']"


  describe('Test suite 3', ()=>
  {
      it('test 1: Checkbox', ()=>
    {
       // Opens the url
      cy.visit(web_url)
      cy.get(checkbox_1).check().should('be.checked').and('have.value', 'option1')
      cy.get(checkbox_1).uncheck().should('not.be.checked')
      cy.get("input[type='checkbox']").check(['option2', 'option3'])
    })

      it('test 2: Radiobuttons', ()=>
    {
        // Opens the url
        cy.visit(web_url)
        cy.get(radio_1).check().should('be.checked')
    })
  })
