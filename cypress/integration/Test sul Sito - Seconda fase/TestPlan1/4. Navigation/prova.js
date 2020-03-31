describe("Primary Header", function () {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("include", "localhost:3005");
    cy.wait(2000);
  });

  it("Logo Shop-o-rama", function () {
    cy.get('[data-test="LogoLink_Header"]').click({ force: true });
    cy.url().should("include", "localhost:3005");
  });

  it("Language", function () {
    cy.contains("Italiano").click({ force: true });
  });
});

// Verifica del funzionamento del Top Banner

describe("Top Banner", function () {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(2000);
  });

  it("Left Picture", function () {
    cy.get('[data-test="head_header_button_search"]').click({ force: true });
    cy.url().should("include", "prodotto");
  });

  it("Center Picture", function () {
    cy.get('[data-test="button_center_picture"]').click({ force: true });
    cy.url().should("include", "negozio");
  });
});