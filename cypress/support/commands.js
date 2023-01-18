// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- This is a parent command --
Cypress.Commands.add('test', (text) => { 
    cy.log(text)
 })

 Cypress.Commands.add('selectProduct', (productName)=>{
    //const search_bar = '.search-keyword'
    const product_list =  '.products'
    const product = '.product:visible'
    const add_to_cart = '.product-action button'

    //cy.get(search_bar).type(productName)
    cy.get(product_list).find(product).each(($element, index, $listOfElements) => {
        if($element.text().includes(productName)){
            cy.get(product_list).find(product).eq(index).find(add_to_cart).click()
        }
        })
    })