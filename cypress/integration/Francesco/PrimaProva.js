describe("HomePage", function () {
  it("Visit HomePage - it successfully loads", function () {
      cy.visit("/")
      cy.wait(2000);

      describe("Sezione Prodotti - I nostri BestSeller", function () {
        it("Prodotto 1", function () {
            cy.get('[data-test="LogoLink_Header"]').click({ force: true });
            cy.get('[data-test="featured-product"]')
                .find('[data-test="ProductsList__0"]')
                .click({ force: true });
        });
      });
  });
});
