// Accedere come Buyer ed effettuare l'acquisto, poi fare Logout

import "./../../../../../support/index"

describe("Login as Buyer", function () {
    // const emailb = 'buyer@shop-o-rama.it'
    // const passwordb = 'Password1@{enter}'


    it("Login as Buyer and place a order", function () {

        cy.readFile('cypress/integration/Test sul Sito - Seconda fase/TestPlan1/DatiJson/NewBuyer.json').then((user) => {

            cy.visit("http://localhost:3005/");                                 // url da visitare
            cy.url().should("include", "localhost:3005");

            cy.get('[data-test="close_cookie"]').click({ force: true });        // Chiusura del Banner policy

            cy.contains('Accedi').click({ force: true });                       // Andare nella pagina di Login

            cy.loginToSiteAsBuyer(user.username, user.passwd)                                     // Verificare che il percorso sia corretto

            cy.get('[data-test="LoginForm"]').find('[data-test="email"]')       // Aggiungere email e password
                .type(user.username);

            cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
                .type(user.passwd + "{enter}");

            cy.wait(40000);
        });

        cy.get('[data-test="main-search"]')                                 // Cercare Prodotto 1
            .type('prodotto').should('have.value', 'prodotto');
        cy.get('[data-test="search_button"]').click({ force: true });
        cy.url().should("include", "q=prodotto&page=1");
        cy.wait(10000);

        cy.get('[data-test="ProductCard__ProdTitle-44"]')                   // Aprire il Prodotto 1
            .click({ force: true });
        cy.url().should("include", "prodotto-uno");

        cy.get('[data-test="add-to-cart"]')                                 // Aggiungerlo al Cart
            .click({ force: true });

        cy.get('[data-test="Shopping-cart"]')                               // Andare nel Carrello
            .click({ force: true });
        cy.url().should("include", "carrello");
        // cy.wait(5000);

        // Aggiunta della Carta di Credito dal Checkout

        cy.get('[data-test="add_CC_checkout"]').click({ force: true });       // apertura del modale di inserimento della CC

        // Inserimento dei dati della CC usando un file .json salvato nella cartella

        cy.readFile('cypress/integration/Test sul Sito - Seconda fase/TestPlan1/DatiJson/BuyerAddressCC.json').then((user) => {
            const buyer = user.buyer01.buyerCC;
            cy.log(buyer);

            cy.get('[data-test="form_CC"]').find('[data-test="name"]').type(buyer.fullname);
            cy.get('[data-test="card_number"]').type(buyer.number);
            cy.get('select[data-test=month_CC]')
                .select(buyer.month).should('have.value', buyer.month)
            cy.get('select[data-test=year_CC]')
                .select(buyer.year).should('have.value', buyer.year)
            cy.get('[data-test="security_code"]').type(buyer.CVV);
            cy.get('select[data-test=day-birthday]')
                .select(buyer.birthday).should('have.value', buyer.birthday)
            cy.get('select[data-test=month-birthday]')
                .select(buyer.birthmonth).should('have.value', buyer.birthmonth)
            cy.get('select[data-test=year-birthday]')
                .select(buyer.birthyear).should('have.value', buyer.birthyear)
            cy.get('[data-test="sorModal_New__bottom_Save"]').click({ force: true });
        });

        cy.pause()

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