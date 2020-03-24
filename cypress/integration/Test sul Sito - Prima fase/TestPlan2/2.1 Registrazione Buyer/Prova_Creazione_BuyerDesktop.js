describe("Prova Mobile", function() {
  beforeEach(function() {
    // alias the users fixtures
    cy.fixture("example.json").as("users");
  });

  it("utilize users in some way", function() {
    // access the users property
    const user = this.users[0];

    // make sure the header contains the first
    // user's name
    cy.get("header").should("contain", user.email);
  });

  // Creazione del Nome

  // function userID_Alpha() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  // return text;
  // }

  const firstname = text;

  // Creazione del Cognome

  const lastname = text;

  // Creazione della Somma Nome+Cognome

  const firstlast = "" + firstname + lastname;

  // Creazione della Email @getnada

  var email = firstname + lastname + "@getnada.com";

  // Creazione della Password

  function userID_Password() {
    var text = "";
    var possiblechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 7; i++)
      text += possiblechar.charAt(
        Math.floor(Math.random() * possiblechar.length)
      );
    var possiblenum = "0123456789";
    text += possiblenum.charAt(Math.floor(Math.random() * possiblenum.length));
    return text;
  }

  var password = userID_Password();

  beforeEach(function() {
    cy.wrap(firstname).as("fl");
  });

  describe("Accesso loggato", function() {
    it("Accedi al sito", function() {
      // cy.visit("https://sor-fe-staging.herokuapp.com");
      cy.visit("localhost:3005/");

      // });

      // it("Creazione del buyer", function() {
      cy.get('[data-test="header-list-accedi-mobile"]')
        .find('[data-test="user"]')
        .click({ force: true });
      cy.url().should("include", "accedi");
      cy.log(this.fl);
      cy.log(email);
      cy.wait(1000);

      cy.get('[data-test="voglio acquistare"]').click({ force: true });

      cy.get('[data-test="tabcontent_buyer"]')
        .find('[name="first_name"]')
        .type(firstname);

      cy.get('[data-test="tabcontent_buyer"]')
        .find('[name="last_name"]')
        .type(lastname);

      cy.get('[data-test="tabcontent_buyer"]')
        .find('[name="email"]')
        .type(email);

      cy.get('[data-test="tabcontent_buyer"]')
        .find('[name="password"]')
        .type(password);

      cy.get('[data-test="tabcontent_buyer"]')
        .find('[name="password_confirmation"]')
        .type(password);

      cy.get('[data-test="tabcontent_buyer"]')
        .find('[data-test="gdpr_pp"]')
        .click({ force: true });

      cy.get('[data-test="tabcontent_buyer"]')
        .find('[data-test="gdpr_tc"]')
        .click({ force: true });

      cy.get('[data-test="tabcontent_buyer"]')
        .find('[type="submit"]')
        .click({ force: true });

      cy.wait(2000);
    });

    it("Accedi al sito della mail", function() {
      cy.visit("https://getnada.com/");
      cy.log(this.fl);
      cy.log(email);

      cy.get(".panel-body")
        .contains("Add Inbox")
        .click({ force: true });

      cy.get(".add_inbox")
        .find('[class="user_name"]')
        .clear()
        .type(firstlast);

      cy.get('[class="modal-content open"]')
        .find('[class="button success"]')
        .click({ force: true });
    });
  });
});
