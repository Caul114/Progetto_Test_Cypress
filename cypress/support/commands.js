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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('loginOnBO', (email, password) => {
    Cypress.log({
        name: 'login on BO',
        message: `${email} | ${password}`,
    })

    return cy.request({
        method: 'POST',
        url: 'https://staging.shop-o-rama.it/admin/login',
        body: {
            email,
            password,
        }
    })
        .then((response) => {
            expect(response).to.have.property('headers') // true,
            expect(response).to.have.property('duration')
            expect(response.status).to.eq(200)
            expect(response.headers).to.have.property('server', 'Cowboy')
        })
})

Cypress.Commands.add('loginToSiteAsBuyer', (emailb, passwordb) => {
    Cypress.log({
        name: 'login to Site',
        message: `${emailb} | ${passwordb}`,
    })

    return cy.request({
        method: 'POST',
        url: 'http://localhost:3005/',
        body: {
            emailb,
            passwordb,
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('loginToSiteAsSeller', (emails, passwords) => {
    Cypress.log({
        name: 'login to Site',
        message: `${emails} | ${passwords}`,
    })

    return cy.request({
        method: 'POST',
        url: 'http://localhost:3005/',
        body: {
            emails,
            passwords,
        },
        failOnStatusCode: false
    })
})