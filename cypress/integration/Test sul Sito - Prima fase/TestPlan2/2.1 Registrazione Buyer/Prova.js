describe("Prova Mobile", function() {
  beforeEach(function() {
    // alias the users fixtures
    cy.fixture("users.json").as("users");
  });

  it("utilize users in some way", function() {
    // access the users property
    const user = this.users[element];
    cy.log(user.firstlast);

    // make sure the header contains the first
    // user's name
    cy.get("users").should("contain", user.firstname);
  });

  it("utilize users in some way", function() {
    // access the users property
    const user = this.users[element];
    cy.log(user.email);

    // make sure the header contains the first
    // user's name
    cy.get("users").should("contain", user.firstname);
  });
});
