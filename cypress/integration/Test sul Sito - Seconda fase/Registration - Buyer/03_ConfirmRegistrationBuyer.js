describe("Conferma della registrazione del Buyer", function () {

    it("Confirm GDPR Buyer", function () {

        cy.readFile('cypress/integration/Test sul Sito - Seconda fase/DatiJson/NewBuyer.json').then((user) => {
            cy.visit("http://localhost:3005/");                                 // url da visitare
            cy.url().should("include", "localhost:3005");

            cy.get('[data-test="close_cookie"]').click({ force: true });        // Chiusura del Banner policy

            cy.contains('Accedi').click({ force: true });                       // Andare nella pagina di Login

            cy.get('[data-test="LoginForm"]').find('[data-test="email"]')       // Aggiungere email e password
                .type(user.username)

            cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
                .type(user.passwd + "{enter}")
            cy.wait(20000);
        })


        cy.get('[data-test="info_materials_sor"]').click({ force: true });

        cy.get('[data-test="info_material_partners"]').click({ force: true });

        cy.get('[data-test="polls"]').click({ force: true });

        cy.get('[data-test="data_analysis"]').click({ force: true });

        cy.contains("Salva").click({ force: true });
    });
});