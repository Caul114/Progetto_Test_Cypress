// import './../../../../support/index' // aggiunta fatta nel caso di eccezioni generiche

import { paleturquoise } from "color-name";

describe("Login as Seller", function () {

    // Valori di Login per il Seller
    const emails = 'negoziocypress@shop-o-rama.it'
    const passwords = 'Password1@'

    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
    });

    it("Closure of the Privacy Banner", function () {       // Chiusura del Banner policy
        cy.get('[data-test="close_cookie"]').click({ force: true });
        // cy.wait(5000);
        // cy.pause();
    });

    // it("Language", function () {        // lingua inglese e italiana
    //     cy.get('[data-test="italiano"]').click({ force: true });
    //     // cy.url().should("include", "shop-o-rama.it");
    // });

    it("Login Page", function () {      // Login con 'Accedi'
        cy.contains('Accedi').click({ force: true });
        // cy.wait(10000)
    });

    it("Login as Seller 1", () => {      // Login come Seller

        cy.get('[data-test="LoginForm"]').find('[data-test="email"]')
            .type(emails)
            .should("have.value", 'negoziocypress@shop-o-rama.it');

        cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
            .type(`${passwords}`)
            .should("have.value", "Password1@");
    });

    it("Login as Seller 2", (done) => {      // Login come Seller
        cy.on('uncaught:exception', (err, runnable) => { // aggiunta nel caso di eccezioni specifiche
            expect(err.message).to.include('of undefined')
            // expect(err.message).to.include('first_name')
            // expect(err.message).to.include('completed_gdpr_compliance')
            done()
            return true
        })

        cy.get('[data-test="invia_login"]')
            .click()
        // .debug();

        // cy.pause()

        // cy.wait(4000);
    });
});

// Logout Seller

// describe("Seller Logout", function () {
//     it("Visit HomePage", function () {
//         cy.visit("http://localhost:3005/"); // url da visitare
//         cy.url().should("include", "localhost:3005");
//     });

//     it("Go to the Dashboard Seller", function () {     // Vado nella Dashboard del Buyer
//         cy.get('[data-test="User"]')
//             .click({ force: true });
//         cy.url().should("include", "dashboard");
//     });

//     it("Buyer Logout", function () {     // Faccio il Logout
//         cy.get(".sorDashboardContainer")
//             .find('[data-test="signout_buyer"]')
//             .click({ force: true });
//     });
// });

