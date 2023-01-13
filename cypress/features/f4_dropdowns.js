/// <reference types="Cypress"  />


const web_url = 'https://rahulshettyacademy.com/AutomationPractice/#/'
const dropdown_static = '#dropdown-class-example'
const dropdown_values = ['option1', 'option2', 'option3']
const dropdown_dynamic = '#autocomplete'


  describe('Test suite 4', ()=>
  {
      it('test 1: Static dropdown', ()=>
    {
        // Opens the url
        cy.visit(web_url)
        cy.get(dropdown_static).select(dropdown_values[0]).should('have.value', dropdown_values[0]).log(dropdown_values[0])
    })
      it('test 2: Dynamic dropdown', ()=>
      {
          // Opens the url
          cy.visit(web_url)
          cy.get(dropdown_dynamic).type('ind')
          cy.get('.ui-menu-item div').each(($element, index, $el_list) =>
          {
              if($element.text().toLowerCase() === 'india')
                  {
                      $element.click()
                  }
          })
          cy.get('#autocomplete').should('have.value', 'India')
      })
  })
