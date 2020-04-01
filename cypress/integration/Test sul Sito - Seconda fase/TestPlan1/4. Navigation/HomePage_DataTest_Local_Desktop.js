describe("HomePage", function () {
    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
    });

    // Chiusura del Banner policy
    it("Chiusura Banner Privacy", function () {
        cy.get('[data-test="close_cookie"]').click({ force: true });
        cy.wait(5000);
    });
});

describe("Primary Header", function () {
    beforeEach(() => {
        cy.visit("/");
        cy.url().should("include", "localhost:3005");
        cy.wait(2000);
    });

    it("Logo Shop-o-rama", function () {
        cy.get('[data-test="LogoLink_Header"]').click({ force: true }); // Logo di Shop-o-rama
        cy.url().should("include", "localhost:3005");
    });

    it("Search for all products", function () {     // search, tutti i prodotti
        cy.get('[data-test="search_button"]').click({ force: true });
        cy.url().should("include", "cerca");
    });

    it("Search for 'prodotto' products", function () {      // search, prodotto specifico
        cy.get('[data-test="main-search"]')
            .type('prodotto').should('have.value', 'prodotto');
        cy.get('[data-test="search_button"]').click({ force: true });
        cy.url().should("include", "q=prodotto");
    });

    it("Login Page", function () {      // Login con 'Accedi'
        cy.contains('Accedi').click({ force: true });
        cy.wait(1000);
        cy.get('[data-test="login_close"]').click({ force: true });
    });

    it("Language", function () {    // lingua italiana
        cy.contains("Italiano").click({ force: true });
    });
});

// Verifica del funzionamento delle Categorie

describe("Root of categories", function () {
    it("Abbigliamento e Accessori", function () {
        cy.get('[data-test="category-0"]').click({ force: true });
        cy.url().should("include", "/categorie/abbigliamento-e-accessori");
    });

    it("Gioielli", function () {
        cy.get('[data-test="category-1"]').click({ force: true });
        cy.url().should("include", "/categorie/gioielli");
    });

    it("Benessere", function () {
        cy.get('[data-test="category-2"]').click({ force: true });
        cy.url().should("include", "/categorie/benessere");
    });

    it("Arredamento", function () {
        cy.get('[data-test="category-3"]').click({ force: true });
        cy.url().should("include", "/categorie/arredamento");
    });

    it("Arte", function () {
        cy.get('[data-test="category-4"]').click({ force: true });
        cy.url().should("include", "/categorie/arte");
    });

    it("Tempo libero", function () {
        cy.get('[data-test="category-5"]').click({ force: true });
        cy.url().should("include", "/categorie/tempo-libero");
    });

    it("Infanzia", function () {
        cy.get('[data-test="category-6"]').click({ force: true });
        cy.url().should("include", "/categorie/infanzia");
    });

    it("Alimentari", function () {
        cy.get('[data-test="category-7"]').click({ force: true });
        cy.url().should("include", "categorie/alimentari");
    });

    it("Magazine", function () {
        cy.get('[data-test="magazine"]').click({ force: true });
        cy.url().should("include", "magazine");
    });

    it("Idee regalo", function () {
        cy.get('[data-test="gift"]').click({ force: true });
        cy.url().should("include", "idee-regalo");
    });
});

// Verifica del funzionamento del Top Banner

describe("Top Banner", function () {
    beforeEach(() => {
        cy.visit("/");
        cy.wait(5000);
    });

    it("Left Picture", function () {
        cy.get('[data-test="head_header_button_search"]').click({ force: true });
        cy.url().should("include", "prodotti");
    });

    it("Center Picture", function () {
        cy.get('[data-test="button_center_picture"]').click({ force: true });
        cy.url().should("include", "negozio");
    });
});