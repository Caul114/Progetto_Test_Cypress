// Verifica del funzionamento delle Categorie

describe("Root Categories", function () {
  context("Actions", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    // cy.wait(2000);
    // cy.contains("Italiano").click({ force: true });


    it("Abbigliamento e Accessori", function () {
      cy.contains("Abbigliamento e accessori").click({ force: true });
      // cy.wait(10000);
      cy.url().should("include", "/categorie/abbigliamento-e-accessori");
    });

    it("Gioielli", function () {
      cy.contains("Gioielli").click({ force: true });
      cy.wait(2000);
      cy.url().should("include", "/categorie/gioielli");
    });

    it("Benessere", function () {
      cy.contains("Benessere").click({ force: true });
      cy.wait(2000);
      cy.url().should("include", "/categorie/benessere");
    });

    it("Arredamento", function () {
      cy.contains("Arredamento").click({ force: true });
      // cy.wait(2000);
      cy.url().should("include", "/categorie/arredamento");
    });

    it("Arte", function () {
      cy.contains("Arte").click({ force: true });
      // cy.wait(2000);
      cy.url().should("include", "categorie/arte");
    });

    it("Tempo libero", function () {
      cy.contains("Tempo libero").click({ force: true });
      // cy.wait(2000);
      cy.url().should("include", "/categorie/tempo-libero");
    });

    it("Infanzia", function () {
      cy.contains("Infanzia").click({ force: true });
      // cy.wait(2000);
      cy.url().should("include", "/categorie/infanzia");
    });

    it("Alimentari", function () {
      cy.contains("Alimentari").click({ force: true });
      // cy.wait(2000);
      cy.url().should("include", "/categorie/alimentari");
    });

    it("Magazine", function () {
      cy.contains("Magazine").click({ force: true });
      // cy.wait(2000);
      cy.url().should("include", "/magazine");
    });

    it("Idee Regalo", function () {
      cy.contains("Festa della donna").click({ force: true });
      // cy.wait(2000);
      cy.url().should("include", "/idee-regalo");
    });
  });
});
