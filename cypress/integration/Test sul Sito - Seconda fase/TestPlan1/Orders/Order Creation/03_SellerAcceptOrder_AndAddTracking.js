// Accedere su Shop-o-rama come Seller

import "./../../../../../support/index"

describe("The Seller accepts the Order and adds the Tracking ", function () {
    const emails = 'seller2@shop-o-rama.it'
    const passwords = 'Password1@{enter}'

    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
    });

    it("Closure of the Privacy Banner", function () {       // Chiusura del Banner policy
        cy.get('[data-test="close_cookie"]').click({ force: true });
        // cy.wait(5000);
    });

    it("Login as Seller", function () {

        // Login come seller2@getnada.com
        cy.contains('Accedi').click({ force: true });

        cy.loginToSiteAsSeller(emails, passwords)

        cy.get('[data-test="LoginForm"]').find('[data-test="email"]')
            .type(emails)
        cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
            .type(passwords)

        cy.wait(40000);

        // Entrare negli Ordini
        cy.get('[data-test="Order"]').click({ force: true });
        cy.wait(10000);

        // Richiamare l'ultimo Ordine fatto
        cy.get('[data-test="ordersResultElement"]').first().click({ force: true });
        cy.wait(5000);

        // Accettare l'ultimo Ordine fatto
        cy.get('[data-test="accept-Order"]')
            .children('img')
            .click({ force: true });
        cy.wait(5000);

        // Aprire il Modale per l'inserimento del Tracking
        cy.get('[data-test="order-tracking-result-box"]')
            .children('i')
            .click({ force: true });
        cy.wait(5000);

        // Inserire il Tracking
        cy.get('[data-test="tracking_number"]').type('BA0100404555');
        // Salvare il Tracking
        cy.get('[data-test="sorModal_New__bottom"]')
            .find('[data-test="sorModalSaveButton_New"]')
            .click({ force: true });

        // Andare nella Dashboard del Seller
        cy.get('[data-test="User"]')
            .click({ force: true });
        cy.url().should("include", "modifica");

        // Fare il Logout    
        cy.get('[data-test="dashboard_seller"]')
            .find('[data-test="signout_seller"]')
            .children('a')
            .click({ force: true });
    });

});

