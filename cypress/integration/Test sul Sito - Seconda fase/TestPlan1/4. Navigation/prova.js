// Verifica del funzionamento della Sezione Prodotti - I nostri Prodotti

describe("Products section - Our bestsellers", function () {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("include", "localhost:3005");
    cy.wait(2000);
  });


  it("Show other products", function () {
    cy.get('[data-test="featured-product"]')
      .find('[data-test="other-products"]')
      .click({ force: true });
    cy.get('[data-test="featured-product"]')
      .find('[data-test="ProductsList_Products"]')
      .find('[data-test="ProductsList__0"]')
      .click({ force: true });
  });
});