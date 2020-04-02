// Cercare un prodotto di seller1@getnada.com

describe("Purchase of a product", function () {
    it("Localhost:3005", function () {
        cy.visit("/");
        cy.url().should("include", "localhost:3005");
        cy.wait(2000);
    });

    it("Search for 'seller 1' product", function () {      // search, prodotto specifico
        cy.get('[data-test="main-search"]')
            .type('seller 1').should('have.value', 'seller 1');
        cy.get('[data-test="search_button"]').click({ force: true });
        cy.url().should("include", "q=seller%201&page=1");
    });

    it("Choose 'Prodotto 1", function () {
        cy.get('[data-test="ProductCard__ProdTitle-3751"]')
            .click({ force: true });
        cy.url().should("include", "prova-1");
    });
});