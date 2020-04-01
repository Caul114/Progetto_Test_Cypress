describe("Primary Header", function () {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("include", "localhost:3005");
    cy.wait(2000);
  });

  it("Language", function () {    // lingua italiana e inglese
    cy.get('[data-test="italiano"]').click({ force: true });
    // cy.url().should("include", "shop-o-rama.it");
    cy.get('[data-test="english"]').click({ force: true });
    // cy.url().should("include", "shop-o-rama.com");
  });

});

// Verifica del funzionamento del Top Banner

// describe("Top Banner", function () {
//   beforeEach(() => {
//     cy.visit("/");
//     cy.wait(2000);
//   });

//   it("Left Picture", function () {
//     cy.get('[data-test="head_header_button_search"]').click({ force: true });
//     cy.url().should("include", "prodotto");
//   });

//   it("Center Picture", function () {
//     cy.get('[data-test="button_center_picture"]').click({ force: true });
//     cy.url().should("include", "negozio");
//   });
// });