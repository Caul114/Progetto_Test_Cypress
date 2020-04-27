describe("HomePage", function () {
    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
    });

    it("Accesso alla registrazione del negozio per il Seller", function () {
        cy.get('[data-test="RibbonCTA__Content"]').click({ force: true });
        cy.url().should("include", "/accedi#registrazione_venditore");
    });
});