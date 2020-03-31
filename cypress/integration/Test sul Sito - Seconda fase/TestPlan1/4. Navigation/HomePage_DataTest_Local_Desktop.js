describe("HomePage", function () {
    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
        cy.contains("Italiano").click({ force: true }); // lingua italiana
    });

    // Chiusura del Banner policy
    it("Chiusura Banner Privacy", function () {
        cy.get('[data-test="close_cookie"]').click({ force: true });
        cy.wait(5000);
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