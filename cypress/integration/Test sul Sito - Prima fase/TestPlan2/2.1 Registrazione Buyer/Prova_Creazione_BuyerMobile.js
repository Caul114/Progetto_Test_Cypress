describe("Prova Mobile", function() {
  describe("Accesso loggato", function() {
    it("Accedi al sito", function() {
      // cy.visit("https://sor-fe-staging.herokuapp.com");
      cy.visit("localhost:3005/");
    });

    // Creazione del Nome

    function userID_Alpha() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }

    var firstname = userID_Alpha();

    // Creazione del Cognome

    function userID_Beta() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }

    var lastname = userID_Beta();

    // Creazione della Somma Nome+Cognome

    function userID_Gamma() {
      var sum = firstname + lastname;
      return sum;
    }

    var firstlast = userID_Gamma();

    // Creazione della Email @getnada

    function userID_Email() {
      var sum = firstname + lastname + "@getnada.com";
      return sum;
    }

    var email = userID_Email();

    // Creazione della Password

    function userID_Password() {
      var text = "";
      var possiblechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 7; i++)
        text += possiblechar.charAt(
          Math.floor(Math.random() * possiblechar.length)
        );
      var possiblenum = "0123456789";
      text += possiblenum.charAt(
        Math.floor(Math.random() * possiblenum.length)
      );
      return text;
    }

    var password = userID_Password();

    it("Creazione del buyer", function() {
      cy.get('[data-test="header-list-accedi-mobile"]')
        .find('[data-test="user"]')
        .click({ force: true });
      cy.url().should("include", "accedi");

      cy.wait(1000);

      cy.get('[data-test="VOGLIO ACQUISTARE"]').click({ force: true });

      cy.get('[data-test="VOGLIO ACQUISTARE Accordion__Content"]')
        .find('[name="first_name"]')
        .type(firstname);

      cy.get('[data-test="VOGLIO ACQUISTARE Accordion__Content"]')
        .find('[name="last_name"]')
        .type(lastname);

      cy.get('[data-test="VOGLIO ACQUISTARE Accordion__Content"]')
        .find('[name="email"]')
        .type(email);

      cy.get('[data-test="VOGLIO ACQUISTARE Accordion__Content"]')
        .find('[name="password"]')
        .type(password);

      cy.get('[data-test="VOGLIO ACQUISTARE Accordion__Content"]')
        .find('[name="password_confirmation"]')
        .type(password);

      cy.get('[data-test="RegistrationForm_accept_privacy"]')
        .find('[data-test="gdpr_pp"]')
        .click({ force: true });

      cy.get('[data-test="RegistrationForm_accept_legal"]')
        .find('[data-test="gdpr_tc"]')
        .click({ force: true });

      cy.get('[data-test="VOGLIO ACQUISTARE Accordion__Content"]')
        .find('[type="submit"]')
        .click({ force: true });
    });

    it("Accedi al sito della mail", function() {
      cy.visit("https://getnada.com/");

      cy.get(".Menu")
        .contains("Add Inbox")
        .click({ force: true });

      cy.get(".add_inbox")
        .find('[class="user_name"]')
        .clear()
        .type(firstlast);
    });
  });
});
