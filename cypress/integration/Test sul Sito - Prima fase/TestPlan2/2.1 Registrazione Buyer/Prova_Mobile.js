describe("Prova Mobile", function() {
  describe("Accesso loggato", function() {
    it("Accedi al sito", function() {
      // cy.visit("https://sor-fe-staging.herokuapp.com");
      cy.visit("localhost:3005/");
    });

    // if (
    //   cy
    //     .get('[data-test="header-list-accedi-mobile"]')
    //     .find('[data-test="/accedi"]')
    // ) {

    // it("Accedi come buyer", function() {
    //   cy.get('[data-test="header-list-accedi-mobile"]')
    //     .find('[data-test="/accedi"]')
    //     .click({ force: true });
    //   cy.url().should("include", "accedi");

    //   cy.wait(1000);

    //   cy.get('[data-test="accordion_content"]')
    //     .find('[data-test="email"]')
    //     .type("kenshiro@getnada.com")
    //     .should("have.value", "kenshiro@getnada.com");

    //   cy.wait(1000);

    //   cy.get('[data-test="accordion_content"]')
    //     .find('[data-test="password"]')
    //     .type("Password1")
    //     .should("have.value", "Password1");

    //   cy.wait(1000);

    //   cy.get('[data-test="accordion_content"]')
    //     .find('[data-test="invia_login"]')
    //     .click({ force: true });
    // });

    // } else {
    //   return;
    // }

    // describe("Accesso del Buyer già registrato - acquisto del prodotto", function() {
    it("Porre il prodotto nel carrello", function() {
      cy.wait(4000);
      cy.get('[data-test="search"]')
        .find('[data-test="search_input"]')
        .type(`${"maglietta rossa"}{enter}`);
      cy.url().should("include", "cerca?q=maglietta%20rossa");

      cy.get('[data-test="ProductCard__ProdTitle"]')
        .contains("Maglietta rossa")
        .click({ force: true });

      cy.wait(4000);

      cy.url().should("include", "maglietta-rossa");

      cy.wait(4000);

      cy.get(".Select-placeholder")
        .contains("Seleziona")
        .click({ force: true });

      cy.contains("seta").click({ force: true });

      cy.contains("Aggiungi Al Carrello").click({ force: true });
      cy.wait(4000);
    });

    it("Accedo al carrello", function() {
      cy.get('[data-test="cart"]').click({ force: true });
      cy.url().should("include", "carrello");

      cy.get('[data-test="scopri le novità"]').click({ force: true });

      //   cy.wait(16000);
    });
  });
});
