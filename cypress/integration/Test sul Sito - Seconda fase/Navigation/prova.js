// Verifica del funzionamento della Sezione Prodotti - I nostri Prodotti

describe("Products section - Our bestsellers", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3005/");
  });


  it("Logo Shop-o-rama", function () {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true }); // Logo di Shop-o-rama
    cy.url().should("include", "localhost:3005");
  });
});