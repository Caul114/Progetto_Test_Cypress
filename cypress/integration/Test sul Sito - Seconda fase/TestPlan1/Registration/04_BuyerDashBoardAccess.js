it("Access to Dashboard Buyer", function () {

    cy.readFile('cypress/integration/Test sul Sito - Seconda fase/TestPlan1/Registration/NewBuyer.json').then((user) => {

        cy.visit("http://localhost:3005/");                                 // url da visitare
        cy.url().should("include", "localhost:3005");

        cy.get('[data-test="close_cookie"]').click({ force: true });        // Chiusura del Banner policy

        cy.contains('Accedi').click({ force: true });                       // Andare nella pagina di Login

        cy.get('[data-test="LoginForm"]').find('[data-test="email"]')       // Aggiungere email e password
            .type(user.username)

        cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
            .type(user.passwd)
        cy.wait(20000);

        cy.get('[data-test="User"]').click({ force: true });                // Accesso alla Dashboard dell'User


    });
});