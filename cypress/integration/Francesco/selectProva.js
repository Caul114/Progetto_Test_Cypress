describe("HomePage", function () {

  // Prova Select

  context("Actions", () => {
    beforeEach(() => {
      cy.visit("https://example.cypress.io/commands/actions");
    });
    it(".select() - select an option in a <select> element", () => {
      // https://on.cypress.io/select

      // Select option(s) with matching text content
      cy.get(".action-select").select("apples");

      cy.get(".action-select-multiple").select(["apples", "oranges", "bananas"]);

      // Select option(s) with matching value
      cy.get(".action-select").select("fr-bananas");

      cy.get(".action-select-multiple").select([
        "fr-apples",
        "fr-oranges",
        "fr-bananas"
      ]);
    });
  });
  context("Actions", () => {
    beforeEach(() => {
      cy.visit("https://example.cypress.io/commands/actions");
    });
    it(".select() - select an option in action <select> element", () => {
      cy.get(".action-select").select("short");

      cy.get(".action-select-multiple").select(["short", "blue jeans", "heat"])

      cy.get(".action-select").select("fr-short");

      cy.get(".action-select-multiple").select([
        "fr-short",
        "fr-blue-jeans",
        "fr-heat"
      ]);
    });
  });

});