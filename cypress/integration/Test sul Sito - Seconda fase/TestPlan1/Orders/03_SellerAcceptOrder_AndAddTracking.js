// Accedere come Seller

describe("Login as Buyer", function () {

    const email = 'seller@shop-o-rama.it'
    const password = 'Password1@'

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

    it("Login as Seller", function () {      // Login come Seller
        cy.get('[data-test="LoginForm"]').find('[data-test="email"]')
            .type(email)
            .should("have.value", "seller@shop-o-rama.it");

        cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
            .type(password)
            .should("have.value", "Password1@");
    });
});

// Logout Seller

describe("Seller Logout", function () {
    it("Go to the Dashboard Seller", function () {     // Vado nella Dashboard del Buyer
        cy.get('[data-test="User"]')
            .click({ force: true });
        cy.url().should("include", "dashboard");
    });

    it("Buyer Logout", function () {     // Faccio il Logout
        cy.get(".sorDashboardContainer")
            .find('[data-test="signout_buyer"]')
            .click({ force: true });
    });
});