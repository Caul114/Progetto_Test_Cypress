// Accedere su Shop-o-rama come Buyer


// Cypress.Commands.add('loginToSite', (email, password) => {
//     Cypress.log({
//         name: 'login to Site',
//         message: `${email} | ${password}`,
//     })

//     return cy.request({
//         method: 'POST',
//         url: 'http://localhost:3005/',
//         body: {
//             email,
//             password,
//         },
//         failOnStatusCode: false
//     })
// })

import "./../../../../support/index"

describe("Login as Buyer", function () {
    const email = 'buyer@shop-o-rama.it'
    const password = 'Password1@{enter}'

    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
    });

    it("Closure of the Privacy Banner", function () {       // Chiusura del Banner policy
        cy.get('[data-test="close_cookie"]').click({ force: true });
    });

    it("Login as Buyer", function () {      // Login come buyer1@getnada.com

        cy.contains('Accedi').click({ force: true });

        cy.loginToSite(email, password)

        cy.get('[data-test="LoginForm"]').find('[data-test="email"]')
            .type(email)

        cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
            .type(password)

        cy.wait(40000);

        cy.get('[data-test="main-search"]')
            .type('prodotto').should('have.value', 'prodotto');
        cy.get('[data-test="search_button"]').click({ force: true });
        cy.url().should("include", "q=prodotto&page=1");
    });
});