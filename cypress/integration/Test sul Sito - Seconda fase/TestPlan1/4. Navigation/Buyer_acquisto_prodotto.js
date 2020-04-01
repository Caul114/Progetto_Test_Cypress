describe("Verifica iniziale", function() {
  it("Accedi nell'utente", function() {
    cy.visit("https://sor-fe-staging.herokuapp.com");
    // cy.get("#header-list-accedi");
    // if (find('[class="MenuButton_MenuButton__Link__1r7uY"]')) {
    //   it("Accedere alla Dashboard", function() {
    //     cy.get("#header-list-accedi")
    //       .find('[href="/account/dashboard"]')
    //       .click({ force: true });
    //   });

    //   it("Sloggarsi dalla Dashboard", function() {
    //     cy.get(".DashboardBuyerSidebar_DashboardBuyerSidebarList__3-pN4")
    //       .contains("Esci")
    //       .click({ force: true });
    //   });
    // } else {
    //   cy.get("#header-list-accedi")
    //     .find('[href="/accedi"]')
    //     .click({ force: true });
    //   cy.url().should("include", "accedi");
    // }
    cy.get("#header-list-accedi")
      .find('[href="/accedi"]')
      .click({ force: true });
    cy.url().should("include", "accedi");
  });
});

describe("Accesso del Buyer già registrato - acquisto del prodotto", function() {
  it("Porre il prodotto nel carrello", function() {
    cy.get("#login_email")
      .type("kenshiro@getnada.com")
      .should("have.value", "kenshiro@getnada.com");

    cy.get("#login_password")
      .type("Password1")
      .should("have.value", "Password1");

    cy.get("button")
      .contains("Invia")
      .click({ force: true });

    cy.wait(4000);

    // Scelta del prodotto - maglia rossa

    cy.get(".Search_Search__Input__6sVvM").type(`${"maglia rossa"}{enter}`);

    cy.wait(4000);

    cy.get(".ProductCard__ProdTitle")
      .contains("Maglietta rossa")
      .click({ force: true });
    cy.url().should("include", "maglietta-rossa");

    cy.pause();

    cy.get(".Select-placeholder")
      .contains("Seleziona")
      .click({ force: true });

    cy.wait(4000);

    cy.contains("adamantio").click({ force: true });

    cy.get(".jsx-1939692813.addToCart.sorPrimary--color ")
      .contains("Aggiungi Al Carrello")
      .click();
  });
});

describe("Accesso del Buyer già registrato - acquisto del prodotto", function() {
  it("Acquisto del prodotto", function() {
    // cy.visit("http://localhost:3005/");

    // cy.get("#header-list-accedi")
    //   .find('[href="/accedi"]')
    //   .click({ force: true });
    // cy.url().should("include", "accedi");

    // cy.get("#login_email")
    //   .type("kenshiro@getnada.com")
    //   .should("have.value", "kenshiro@getnada.com");

    // cy.get("#login_password")
    //   .type("Password1")
    //   .should("have.value", "Password1");

    // cy.get("button")
    //   .contains("Invia")
    //   .click({ force: true });

    cy.wait(2000);

    cy.get("#header-list-carrello")
      .find('[href="/carrello"]')
      .click();

    cy.wait(8000);

    cy.get(".checkbox.CartRecap_checkbox__3CmoC [type='checkbox']").check();

    cy.get(".CartRecap_proceedButton___zg7k")
      .contains("Acquista ora!")
      .click({ force: true });

    if (find('[class="ReactModalPortal"]')) {
      //cy.get(".ReactModal__Content.ReactModal__Content--after-open.ConfirmModal_ModalBox__o7tDZ.null")
      cy.get(".ConfirmModal_ModalBoxAccept__1hYwL")
        .contains("OK")
        .click({ force: true });

      cy.get("#code")
        //.find('[input="password"]')
        .type("secret3")
        .should("have.value", "secret3");
      cy.get('input[type="submit"]').click({ force: true });

      cy.wait(10000);

      cy.get("MenuButton_MenuButton__3a3oH")
        .find('[href="/account/dashboard"]')
        .click({ force: true });

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
    } else {
      cy.wait(10000);
      cy.get("#header-list-accedi")
        .find('[href="/account/dashboard"]')
        .click({ force: true });
    }
    cy.wait(10000);
  });
});

// describe("Sloggarsi", function() {
//   it("Accedere alla Dashboard", function() {
//     cy.get("#header-list-accedi")
//       .find('[href="/account/dashboard"]')
//       .click({ force: true });
//   });

//   it("Sloggarsi dalla Dashboard", function() {
//     cy.get(".DashboardBuyerSidebar_DashboardBuyerSidebarList__3-pN4")
//       .contains("Esci")
//       .click({ force: true });
//   });
// });
