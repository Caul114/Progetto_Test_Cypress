describe("Login in Mangopay", function () {
    // it("Visit Mangopay", function () {
    //     cy.visit("https://api.sandbox.mangopay.com/authorize?response_type=code&client_id=mangodashboardapp&redirect_uri=https://dashboard.sandbox.mangopay.com/Authorize/SignIn"); // url da visitare
    //     cy.url().should("include", "mangopay");
    // });

    // // it("Accedi", function () {
    // //     cy.contains("Accedi").click({ force: true });
    // // })

    // it("Partner", function () {
    //     cy.get('[id="PartnerId"]').type("shoporama");
    //     // cy.url().should("include", "shoporama");
    // })

    // it("Username", function () {
    //     cy.get('[id="Email"]').type("stefano_ritella@yahoo.com");
    //     // cy.url().should("include", "ritella");
    // })

    // it("Password", function () {
    //     cy.get('[id="Password"]').type("Onafets1!");
    //     // cy.url().should("include", "Onafets1!");
    // })

    // it("Sign In", function () {
    //     cy.get('[method="post"]')
    //         .find('[type="submit"]').click({ force: true });
    // })

    it("Visit Mangopay 2", function () {
        cy.visit("https://api.sandbox.mangopay.com/authorize?response_type=code&client_id=mangodashboardapp&redirect_uri=https://dashboard.sandbox.mangopay.com/Authorize/SignIn"); // url da visitare
        cy.url().should("include", "mangopay");
        cy.get('[id="PartnerId"]').type("shoporama");
        cy.get('[id="Email"]').type("stefano_ritella@yahoo.com");
        cy.get('[id="Password"]').type("Onafets1!");
        cy.get('[method="post"]')
            .find('[type="submit"]').click({ force: true });
    });
});