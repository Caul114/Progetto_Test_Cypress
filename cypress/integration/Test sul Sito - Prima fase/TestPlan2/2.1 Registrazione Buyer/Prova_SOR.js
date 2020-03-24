describe("Accesso al SOR per l'accettazione dell'ordine", function() {
  it("Accedo al SOR", function() {
    cy.visit("https://staging.shop-o-rama.it/admin/dashboard/");
  });

  it("Accedi come Admin", function() {
    cy.get("#email")
      .type("melissa@shop-o-rama.it")
      .should("have.value", "melissa@shop-o-rama.it");

    cy.wait(1000);

    cy.get("#password")
      .type("melissa123")
      .should("have.value", "melissa123");

    cy.get(".btn.btn-primary.btn-block").click();
  });
});
