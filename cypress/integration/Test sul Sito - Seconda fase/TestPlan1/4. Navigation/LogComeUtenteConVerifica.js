describe("Prova", function() {
  it("Uscire dall'Utente loggato", function() {
    cy.visit("http://localhost:3005/");
    cy.get("#header-list-accedi");

    cy.wait(4000);

    if (find('[href="/account/dashboard"]')) {
      it("Accedere alla Dashboard", function() {
        cy.get("#header-list-accedi")
          .find('[href="/account/dashboard"]')
          .click({ force: true });
      });

      it("Sloggarsi dalla Dashboard", function() {
        cy.get(".DashboardBuyerSidebar_DashboardBuyerSidebarList__3-pN4")
          .contains("Esci")
          .click({ force: true });
      });
    } else {
      cy.get("#header-list-accedi")
        .find('[href="/accedi"]')
        .click({ force: true });
      cy.url().should("include", "accedi");

      cy.get("#login_email")
        .type("kenshiro@getnada.com")
        .should("have.value", "kenshiro@getnada.com");

      cy.get("#login_password")
        .type("Password1")
        .should("have.value", "Password1");

      cy.get("button")
        .contains("Invia")
        .click({ force: true });

      cy.wait(2000);

      cy.get("#header-list-accedi")
        .find('[href="/account/dashboard"]')
        .click({ force: true });

      cy.wait(8000);
    }
  });
});
