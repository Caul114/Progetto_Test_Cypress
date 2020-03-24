context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });

  it(".submit() - submit a form", () => {
    // https://on.cypress.io/submit
    cy.get(".action-form")
      .find('[type="text"]')
      .type("HALFOFF");
    cy.get(".action-form")
      .submit()
      .next()
      .should("contain", "Your form has been submitted!");
  });
});
