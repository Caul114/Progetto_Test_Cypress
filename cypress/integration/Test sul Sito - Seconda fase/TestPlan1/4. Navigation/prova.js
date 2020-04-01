// Verifica del funzionamento della Sezione Prodotti - I nostri Prodotti

describe("Products section - Our bestsellers", function () {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("include", "localhost:3005");
    cy.wait(2000);
  });


  it("Abbigliamento e Accessori", function () {
    cy.get('[data-test="Article__0"]').click({ force: true });
  });
});