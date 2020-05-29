describe("HomePage", function () {
    it("Visit HomePage", function () {
        //cy.visit("localhost:3005/"); // url da visitare
        //cy.url().should("include", "localhost:3005");
        // cy.visit("https://www.shop-o-rama.it/"); // url da visitare
        // cy.url().should("include", "www.shop-o-rama.it");
        // cy.visit("https://sor-fe-staging.herokuapp.com/"); // url da visitare
        // cy.url().should("include", "sor-fe-staging.herokuapp.com/");

        // da molti più errori se si utilizza il codice localhost
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
    });

    it("Pagamenti", function () {
        cy.get('[data-test="Pagamenti"]').click({ force: true });
        cy.url().should("include", "/pagamenti");
        cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    });

});
