// Accedere come Buyer buyer1@getnada.com

describe("Login as Buyer", function () {
    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
    });

    it("Closure of the Privacy Banner", function () {       // Chiusura del Banner policy
        cy.get('[data-test="close_cookie"]').click({ force: true });
        // cy.wait(5000);
    });

    it("Login Page", function () {      // Login con 'Accedi'
        cy.contains('Accedi').click({ force: true });
    });

    it("Login as Buyer", function () {      // Login come buyer1@getnada.com
        cy.get('[data-test="LoginForm"]').find('[data-test="email"]')
            .type("buyer1@getnada.com")
            .should("have.value", "buyer1@getnada.com");

        cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
            .type("Password1")
            .should("have.value", "Password1");

        cy.get("button")
            .contains("Invia")
            .click({ force: true });

        // cy.wait(4000);
    });
});

// Logout Buyer

describe("Buyer Logout", function () {
    it("Go to the Dashboard Buyer", function () {     // Vado nella Dashboard del Buyer
        cy.get('[data-test="User"]')
            .click({ force: true });
        cy.url().should("include", "dashboard");
    });

    it("Buyer Logout", function () {     // Faccio il Logout
        cy.get('[data-test="signout_buyer"]')
            .click({ force: true });
    });
});