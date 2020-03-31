describe("Root of categories", function () {
    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
        cy.contains("Italiano").click({ force: true });
    });


    it("Abbigliamento e Accessori", function () {
        cy.get('[data-test="category-0"]').click({
            force: true
        });
        cy.url().should("include", "/categorie/abbigliamento-e-accessori");
    });
});

// Verifica del funzionamento del Top Banner

describe("Top Banner", function () {
    beforeEach(() => {
        cy.visit("/");
        cy.wait(2000);
    });

    it("Left Picture", function () {
        cy.get('[data-test="head_header_button_search"]').click({ force: true });
        cy.url().should("include", "prodotto");
    });

    it("Center Picture", function () {
        cy.get('[data-test="button_center_picture"]').click({ force: true });
        cy.url().should("include", "negozio");
    });
});
