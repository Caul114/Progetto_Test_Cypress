// Accedere come Buyer ed effettuare l'acquisto, poi fare Logout

import "./../../../../support/index"

describe("Login as Buyer", function () {
    const emailb = 'buyer1@getnada.com'
    const passwordb = 'Password1{enter}'


    it("Login as Buyer and place a order", function () {

        cy.visit("https://sor-fe-staging.herokuapp.com/");                                 // url da visitare
        cy.url().should("include", "sor-fe-staging");

        cy.get('[data-test="close_cookie"]').click({ force: true });        // Chiusura del Banner policy

        cy.contains('Accedi').click({ force: true });                       // Andare nella pagina di Login

        cy.loginToSiteAsBuyer(emailb, passwordb)                                     // Verificare che il percorso sia corretto

        cy.get('[data-test="LoginForm"]').find('[data-test="email"]')       // Aggiungere email e password
            .type(emailb)
            .should("have.value", "buyer1@getnada.com");

        cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
            .type(passwordb)
            .should("have.value", "Password1");
        cy.wait(10000);

        cy.get('[data-test="main-search"]')                                 // Cercare Prova 1
            .type('prova').should('have.value', 'prova');
        cy.get('[data-test="search_button"]').click({ force: true });
        cy.url().should("include", "q=prova&page=1");
        cy.wait(10000);

        cy.get('[data-test="ProductCard__ProdTitle-3751"]')                   // Aprire il Prova 1
            .click({ force: true });
        cy.url().should("include", "prova-1");

        cy.get('[data-test="add-to-cart"]')                                 // Aggiungerlo al Cart
            .click({ force: true });

        cy.get('[data-test="Shopping-cart"]')                               // Andare nel Carrello
            .click({ force: true });
        cy.url().should("include", "carrello");
        // cy.wait(5000);

        cy.get('[data-test="order"]')                                       // Procedere con l'acquisto
            .click({ force: true });
    });

    // it("!!! In case of error !!!", function () {     //  Chiudo il modale di errore
    //     cy.get('.ConfirmModal_ModalBoxAccept__1hYwL')
    //         .click({ force: true });
    // });
});

// Logout Buyer

describe("Buyer Logout", function () {
    it("Go to the Dashboard Buyer", function () {     // Vado nella Dashboard del Buyer
        cy.get('[data-test="User"]')
            .click({ force: true });
        cy.url().should("include", "dashboard");
    });

    it("Buyer Logout", function () {     // Faccio il Logout
        cy.get(".sorDashboardContainer")
            .find('[data-test="signout_buyer"]')
            .click({ force: true });
    });
});


// Verificare sul BO di staging che l'acquisto sia presente

// Verificare su Mango Pay di Staging che l'acquisto sia stato fatto