// Accedere come Buyer buyer1@getnada.com

describe("Login as Buyer", function () {
    it("Visit HomePage", function () {
        cy.visit("https://staging.shop-o-rama.it/admin"); // url da visitare
        cy.url().should("include", "admin/login");
    });


    it("Login as Buyer", function () {      // Login come buyer1@getnada.com
        cy.server()
        cy.route({
            method: 'POST',      // Route all GET requests
            url: '/login/',    // that have a URL that matches '/users/*'
            response: []        // and force the response to be: []
        })
        cy.get('input[id=email]')
            .type("luca@shop-o-rama.it")
            .should("have.value", "luca@shop-o-rama.it");

        cy.get('input[id=password]')
            .type("Banana{enter}")
            .should("have.value", "Banana");

        // cy.get('input[type=submit]')
        //     .click({ force: true });

        // cy.get('.action-form')
        //     .find('[type="text"]').type('HALFOFF')
        // cy.get('.action-form').submit()
        //     .next().should('contain', 'Your form has been submitted!')

        // cy.wait(4000);
    });
});

