describe("HomePage", function () {
    it("Visit HomePage", function () {
      // cy.visit("localhost:3005/"); // url da visitare
      // cy.url().should("include", "localhost:3005");
      // cy.visit("https://www.shop-o-rama.it/"); // url da visitare
      // cy.url().should("include", "www.shop-o-rama.it");
      cy.visit("https://sor-fe-staging.herokuapp.com/"); // url da visitare
      cy.url().should("include", "sor-fe-staging.herokuapp.com/");
    });
  
    // Chiusura del Banner policy
  
    it("Chiusura Banner Privacy", function () {
      cy.get('[data-test="close_cookie"]').click({ force: true });
    });
  });
  
describe("Root Categories", function () {
    it("Abbigliamento e Accessori", function () {
      cy.contains("Abbigliamento e accessori").click({ force: true });
      cy.wait(2000);
      cy.url().should("include", "/categorie/abbigliamento-e-accessori");
    });
});  