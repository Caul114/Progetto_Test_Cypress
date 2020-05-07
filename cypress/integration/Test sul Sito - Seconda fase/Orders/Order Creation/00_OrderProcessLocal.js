// Accedere come Buyer ed effettuare l'acquisto, poi fare Logout

import "./../../../../../support/index"

describe("Login as Buyer", function () {
    const emailb = 'buyer@shop-o-rama.it'
    const passwordb = 'Password1@{enter}'


    it("Login as Buyer and place a order", function () {

        cy.visit("http://localhost:3005/");                                 // url da visitare
        cy.url().should("include", "localhost:3005");

        cy.get('[data-test="close_cookie"]').click({ force: true });        // Chiusura del Banner policy

        cy.contains('Accedi').click({ force: true });                       // Andare nella pagina di Login

        cy.loginToSiteAsBuyer(emailb, passwordb)                                     // Verificare che il percorso sia corretto

        cy.get('[data-test="LoginForm"]').find('[data-test="email"]')       // Aggiungere email e password
            .type(emailb)
            .should("have.value", "buyer@shop-o-rama.it");

        cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
            .type(passwordb)
            .should("have.value", "Password1@");
        cy.wait(40000);

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
        cy.clearCookies()       // Cancello tutti i cookies
    });
});

// Accedere come Utente nel BackOffice e confermare l'ordine

describe('SOR accept the Order', function () {
    // const email = 'luca@shop-o-rama.it'
    // const password = 'Banana{enter}'

    const email = 'tech@shop-o-rama.it'
    const password = '5h0p0r4m4{enter}'

    const inDashboard = () => {
        it('control dashboard', () => {
            cy.location('href').should('match', /dashboard$/)
            cy.contains('h1', 'Dashboard')
        })
    }

    it('Slow login via UI and order acceptance', () => {
        // Faccio Login nella Dashboard 
        // cy.visit('https://staging.shop-o-rama.it//admin/login')
        cy.visit('http://localhost:3000/admin/login')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        inDashboard()

        // Vado negli pagina Ordini
        cy.contains('Orders').click({ force: true });
        // cy.pause();

        // --- Procedura da fare nel caso in cui si debba spostare l'oridne da New Orders a Active Orders ---

        // Andare nei New Orders
        cy.contains('New Order').click({ force: true });
        cy.wait(5000);
        // cy.pause();

        // Trovo l'ultimo ordine fatto e ci entro
        cy.get('table').find('td').as('order');
        cy.get('@order').first().click({ force: true });
        cy.wait(5000);
        // cy.pause();

        // Andare nelle Transactions dell'Ordine
        cy.contains('Transactions').click({ force: true });
        // cy.pause();

        // Salvare il valore della Transazione ed effettuare la richiesta di esecuzione dell'ordine
        cy.get('#tab-transactions').children().then(($btn) => {

            // Memorizza il valore della Transazione
            const txt = $btn.text()
            const number = txt.slice(231, 239);
            // cy.log(txt);
            cy.log(number);

            // Faccio un'HTTP GET della transazione Mangopay per poter rendere attivo l'Ordine
            const theUrl = "localhost:3000/api/hooks?Date=1571301454&EventType=PAYIN_NORMAL_SUCCEEDED&RessourceId=" + number;
            cy.log(theUrl);
            cy.request(theUrl);
            cy.wait(2000);
        })

        // Vado negli pagina Ordini
        cy.contains('Orders').click({ force: true });
        cy.wait(5000);

        // Trovo l'ultimo ordine fatto e ci entro
        cy.get('table').find('td').as('order');
        cy.get('@order').first().click({ force: true });
        cy.wait(5000);

        // Accetto l'Ordine
        cy.contains('SoR accept').click({ force: true });

        // Logout dal backoffice
        cy.get('.caret').click({ force: true });
        cy.contains('Log out').click({ force: true });
        cy.clearCookies()       // Cancello tutti i cookies
    });
});

// Accedere su Shop-o-rama come Seller

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

// Accedere come Utente nel BackOffice e effettuare le utlime operazioni sull'ordine

describe('SOR completes the Order', function () {
    // const email = 'luca@shop-o-rama.it'
    // const password = 'Banana{enter}'

    const email = 'tech@shop-o-rama.it'
    const password = '5h0p0r4m4{enter}'

    const inDashboard = () => {
        it('control dashboard', () => {
            cy.location('href').should('match', /dashboard$/)
            cy.contains('h1', 'Dashboard')
        })
    }

    it('Final operations on the order', () => {
        // Fare Login nella Dashboard 
        // cy.visit('https://staging.shop-o-rama.it//admin/login')
        cy.visit('http://localhost:3000/admin/login')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        inDashboard()

        // Andare negli pagina Ordini
        cy.contains('Orders').click({ force: true });
        cy.wait(5000);

        // Trovare l'ultimo ordine fatto ed entrarci
        cy.get('table').find('td').as('order');
        cy.get('@order').first().click({ force: true });
        cy.wait(5000);

        // Spuntare che l'Ordine è stato consegnato
        cy.contains('Mark Delivered').click({ force: true });
        cy.wait(5000);

        // Spuntare che l'Ordine è stato completato
        cy.contains('Mark Completed').click({ force: true });
        cy.wait(5000);

        // Spuntare che il Pagamento è stato effettuato
        cy.contains('Process Payment').click({ force: true });
        cy.wait(5000);

        // Verifica che il Payout è stato effettuato
        cy.contains('Check Payout').click({ force: true });
        cy.wait(5000);

        // Creare la fattura
        cy.contains('Create invoice').click({ force: true });
        cy.wait(5000);

        // Andare negli pagina Ordini
        cy.contains('Orders').click({ force: true });
        cy.wait(5000);

    })
})

