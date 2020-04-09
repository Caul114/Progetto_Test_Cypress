import './../../../../support/index' // aggiunta fatta nel caso di eccezioni generiche

describe("Login as Seller", function () {

    // Valori di Login per il Seller
    const emails = 'wonderwoman@shop-o-rama.it'
    const passwords = 'Password1@'

    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
    });

    it("Closure of the Privacy Banner", function () {       // Chiusura del Banner policy
        cy.get('[data-test="close_cookie"]').click({ force: true });
        // cy.wait(5000);
    });

    it("Language", function () {        // lingua inglese e italiana
        cy.get('[data-test="italiano"]').click({ force: true });
        // cy.url().should("include", "shop-o-rama.it");
    });

    it("Login Page", function () {      // Login con 'Accedi'
        cy.contains('Accedi').click({ force: true });
    });

    it("Login as Seller", function (done) {      // Login come Seller

        cy.on('uncaught:exception', (err, runnable) => { // aggiunta nel caso di eccezioni specifiche
            expect(err.message).to.include('of undefined')
            done()
            return false
        })

        cy.get('[data-test="LoginForm"]').find('[data-test="email"]')
            .type(emails)
            .should("have.value", 'wonderwoman@shop-o-rama.it');

        cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
            .type(passwords)
            .should("have.value", "Password1@");

        cy.get("button")
            .contains("Invia")
            .click({ force: true });

        // cy.wait(4000);
    });
});

// Logout Seller

// describe("Seller Logout", function () {
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

