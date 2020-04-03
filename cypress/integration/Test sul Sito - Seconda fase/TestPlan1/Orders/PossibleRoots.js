it("Visit HomePage - it successfully loads", function () {

    cy.visit("http://localhost:3005/"); // url da visitare
    cy.url().should("include", "localhost:3005");

    cy.visit("https://www.shop-o-rama.it/"); // url da visitare
    cy.url().should("include", "www.shop-o-rama.it");

    cy.visit("https://sor-fe-staging.herokuapp.com/"); // url da visitare
    cy.url().should("include", "sor-fe-staging.herokuapp.com/");

});