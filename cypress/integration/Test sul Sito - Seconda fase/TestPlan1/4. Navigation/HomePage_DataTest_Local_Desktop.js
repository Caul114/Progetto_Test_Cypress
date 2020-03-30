describe("HomePage", function () {
    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
        cy.contains("Italiano").click({ force: true }); // lingua italiana
    });
});

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
