/// <reference types="Cypress"  />

const web_url = 'https://rahulshettyacademy.com/AutomationPractice/#/'
const table = "table[class='table-display']"
const second_column = "tr td:nth-child(2)"

describe('Test suite 8', ()=>
{
  it('test 1: tables', ()=>
{
    // Opens the url
    cy.visit(web_url)
    cy.get(table).should('be.visible')
    cy.get(`${table} ${second_column}`).each(($element, index, $list) => {
        const current_text = $element.text().toLowerCase()
        if(current_text.includes('python')){
            // here we need to check the price of this cours, but to use next sibling, we need to use it directly on get
            // what we can do is use same command but recovering the index from each function
            cy.get(`${table} ${second_column}`).eq(index).next().should('have.text', '25')
            cy.get(`${table} ${second_column}`).eq(index).next().then((price)=>{
                expect(price.text()).to.equal('25')
            })
        }

    })

})
})
