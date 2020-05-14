describe("Conferma della registrazione del Seller", function () {

    it("Confirm Seller GDPR", function () {
        cy.readFile('cypress/integration/Test sul Sito - Seconda fase/DatiJson/NewSeller.json').then((user) => {
            cy.visit("http://localhost:3005/");                                 // url da visitare
            cy.url().should("include", "localhost:3005");

            cy.get('[data-test="close_cookie"]').click({ force: true });        // Chiusura del Banner policy

            cy.contains('Accedi').click({ force: true });                       // Andare nella pagina di Login

            cy.get('[data-test="LoginForm"]').find('[data-test="email"]')       // Aggiungere email e password
                .type(user.username, { force: true })

            cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
                .type(user.passwd + "{enter}", { force: true })
            cy.wait(20000);
        })

        // Scelta del GDPR

        cy.get('[data-test="info_materials_sor"]').click({ force: true });

        cy.get('[data-test="info_material_partners"]').click({ force: true });

        cy.get('[data-test="polls"]').click({ force: true });

        cy.get('[data-test="data_analysis"]').click({ force: true });

        cy.contains("Salva").click({ force: true });

        cy.clearCookies();

    });

    it("Confirm Seller Registration", function () {

        cy.readFile('cypress/integration/Test sul Sito - Seconda fase/DatiJson/NewSeller.json').then((user) => {
            cy.visit("http://localhost:3005/");                                 // url da visitare
            cy.url().should("include", "localhost:3005");

            cy.get('[data-test="close_cookie"]').click({ force: true });        // Chiusura del Banner policy

            cy.contains('Accedi').click({ force: true });                       // Andare nella pagina di Login

            cy.get('[data-test="LoginForm"]').find('[data-test="email"]')       // Aggiungere email e password
                .type(user.username, { force: true })

            cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
                .type(user.passwd + "{enter}", { force: true })
            cy.wait(20000);
        })

        cy.readFile('cypress/integration/Test sul Sito - Seconda fase/DatiJson/SellerShopDetails.json').then((user) => {
            const seller = user.seller01.sellerAddress;
            cy.log(seller);

            cy.get('[data-test="StoreNameFormGroup"]')
                .type(seller.shopName + "{enter}", { force: true });                            // Inserimento del nome dello Shop con verifica

            cy.get('[data-test="select_category"]').find('select[name=category]')
                .select(seller.category, { force: true }).should('have.value', "1");            // Selezionare una categoria per lo Shop

            cy.get('[data-test="storeCreationBackButton_save"]').contains('SALVA').click({ force: true });        // Salva le Informazioni base


        });
    });
});