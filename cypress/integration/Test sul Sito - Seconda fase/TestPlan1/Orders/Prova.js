// Accedere come Buyer buyer1@getnada.com

describe("Login as Buyer", function () {
    it("Visit HomePage", function () {
        cy.visit("http://localhost:3000/admin/dashboard"); // url da visitare
        cy.url().should("include", "admin/login");
    });


    it("Login as Buyer", function () {      // Login come buyer1@getnada.com
        cy.get('#email')
            .type("tech@shop-o-rama.it")
            .should("have.value", "tech@shop-o-rama.it");

        cy.get('#password')
            .type("5h0p0r4m4")
            .should("have.value", "5h0p0r4m4");

        cy.get('input[type=submit]')
            .click({ force: true });

        //     // cy.wait(4000);
    });
});

