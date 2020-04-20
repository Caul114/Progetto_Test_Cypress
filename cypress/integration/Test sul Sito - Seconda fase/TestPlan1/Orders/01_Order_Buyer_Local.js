// Accedere come Buyer

describe("Login as Buyer", function () {
    const emailb = 'buyer1@getnada.com'
    const passwordb = 'Password1'

    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
    });

    it("Closure of the Privacy Banner", function () {       // Chiusura del Banner policy
        cy.get('[data-test="close_cookie"]').click({ force: true });
        // cy.wait(5000);
    });

    it("Login Page", function () {      // Login con 'Accedi'
        cy.contains('Accedi').click({ force: true });
    });

    it("Login as Buyer", function () {      // Login come Buyer
        cy.get('[data-test="LoginForm"]').find('[data-test="email"]')
            .type(emailb)
            .should("have.value", "buyer1@getnada.com");

        cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
            .type(passwordb)
            .should("have.value", "Password1");

        cy.get("button")
            .contains("Invia")
            .click({ force: true });

        // cy.wait(4000);
    });
});

// Cercare un prodotto di seller1@getnada.com

describe("Purchase of a product", function () {
    it("Search for 'seller 1' product", function () {      // search, prodotti di seller 1
        cy.get('[data-test="main-search"]')
            .type('seller 1').should('have.value', 'seller 1');
        cy.get('[data-test="search_button"]').click({ force: true });
        cy.url().should("include", "q=seller%201&page=1");
    });

    it("Choose 'Prova 1", function () {     //  scelgo il prodotto Prova 1
        cy.get('[data-test="ProductCard__ProdTitle-3751"]')
            .click({ force: true });
        cy.url().should("include", "prova-1");
    });

    it("Load the product on the cart", function () {     //  Carico il prodotto sul carrello
        cy.get('[data-test="add-to-cart"]')
            .click({ force: true });
    });
});

// Usando un indirizzo di spedizione già presente e una CC già presente, fare l'acquisto

describe("Buy a product", function () {
    it("The cart", function () {     // Vado nel carrello
        cy.get('[data-test="Shopping-cart"]')
            .click({ force: true });
        cy.url().should("include", "carrello");
    });

    it("Buy the product", function () {     //  Effetttuo l'acquisto
        cy.get('[data-test="order"]')
            .click({ force: true });
    });

    it("!!! In case of error !!!", function () {     //  Chiudo il modale di errore
        cy.get('.ConfirmModal_ModalBoxAccept__1hYwL')
            .click({ force: true });
    });
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