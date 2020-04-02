// Accedere come Buyer buyer1@getnada.com

describe("Login as Buyer", function () {
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

    it("Login as Buyer", function () {      // Login come buyer1@getnada.com
        cy.get('[data-test="LoginForm"]').find('[data-test="email"]')
            .type("buyer1@getnada.com")
            .should("have.value", "buyer1@getnada.com");

        cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
            .type("Password1")
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
});

// Caricarlo sul carrello

// Usando un indirizzo di spedizione già presente e una CC già presente, fare l'acquisto

// Verificare sul BO di staging che l'acquisto sia presente

// Verificare su Mango Pay di Staging che l'acquisto sia stato fatto