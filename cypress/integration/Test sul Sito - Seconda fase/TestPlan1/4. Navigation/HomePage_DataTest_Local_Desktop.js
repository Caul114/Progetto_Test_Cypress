describe("HomePage", function () {
    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
        cy.contains("Italiano").click({ force: true }); // lingua italiana
    });

    // Chiusura del Banner policy

    it("Chiusura Banner Privacy", function () {
        cy.get('[data-test="close_cookie"]').click({ force: true });
    });
});

// Verifica del funzionamento delle Categorie

describe("Root of categories", function () { // tour delle categorie del menu principale
    it("Abbigliamento e Accessori", function () {
        cy.get('[data-test="category-0"]').click({ force: true });
        cy.url().should("include", "/categorie/abbigliamento-e-accessori");
    });

    it("Gioielli", function () {
        cy.get('[data-test="category-1"]').click({ force: true });
        cy.url().should("include", "/categorie/gioielli");
    });

    it("Arredamento", function () {
        cy.get('[data-test="category-2"]').click({ force: true });
        cy.url().should("include", "/categorie/arredamento");
    });

    it("Arte", function () {
        cy.get('[data-test="category-3"]').click({ force: true });
        cy.url().should("include", "/categorie/arte");
    });

    it("Tempo libero", function () {
        cy.get('[data-test="category-4"]').click({ force: true });
        cy.url().should("include", "/categorie/tempo-libero");
    });

    it("Alimentari", function () {
        cy.get('[data-test="category-5"]').click({ force: true });
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
    it("Left Picture", function () {
        cy.get('[data-test="LogoLink_Header"]').click({ force: true });
        cy.get('[data-test="head_header_button_search"]').click({ force: true });
    });

    it("Center Picture", function () {
        cy.get('[data-test="LogoLink_Header"]').click({ force: true });
        cy.get('[data-test="button_center_picture"]').click({ force: true });
    });

    it("Right Picture", function () {
        cy.get('[data-test="LogoLink_Header"]').click({ force: true });
        cy.get('[data-test="right_picture"]').click({ force: true });
    });
});