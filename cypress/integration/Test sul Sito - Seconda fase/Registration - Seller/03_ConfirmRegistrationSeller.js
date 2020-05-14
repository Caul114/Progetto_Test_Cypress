describe("Conferma della registrazione del Seller", function () {

    beforeEach(() => {
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
    });

    // Scelta del GDPR

    it("Confirm Seller GDPR", function () {

        cy.get('[data-test="info_materials_sor"]').click({ force: true });

        cy.get('[data-test="info_material_partners"]').click({ force: true });

        cy.get('[data-test="polls"]').click({ force: true });

        cy.get('[data-test="data_analysis"]').click({ force: true });

        cy.contains("Salva").click({ force: true });

        cy.clearCookies();

    });

    // Inserisci le Informazioni Base del Seller

    it("Confirm Seller Registration", function () {

        cy.readFile('cypress/integration/Test sul Sito - Seconda fase/DatiJson/SellerShopDetails.json').then((user) => {
            const seller = user.seller01.sellerAddress;
            cy.log(seller);

            cy.get('[data-test="StoreNameFormGroup"]')
                .type(seller.shopName + "{enter}", { force: true });                            // Inserimento del nome dello Shop con verifica

            cy.get('[data-test="select_category"]').find('select[name=category]')
                .select(seller.category, { force: true }).should('have.value', "1");            // Selezionare una categoria per lo Shop

            cy.get('[data-test="storeCreationBackButton_save"]').contains('SALVA').click({ force: true });        // Salva le Informazioni base

            cy.clearCookies();
        });

    });

    // Inserisci i Dati personali del Seller

    it("Insertion of the Seller's personal data", function () {

        cy.readFile('cypress/integration/Test sul Sito - Seconda fase/DatiJson/SellerShopDetails.json').then((user) => {
            const seller = user.seller01.sellerAddress;
            cy.log(seller);

            cy.get('[data-test="first_name"]').find('input')
                .type(seller.first_name, { force: true });           // Inserimento del nome del Seller

            cy.get('[data-test="last_name"]').find('input')
                .type(seller.last_name, { force: true });            // Inserimento del cognome del Seller

            cy.get('[data-test="fiscal_code"]').find('input')
                .type(seller.fiscal_code, { force: true });          // Inserimento del Codice Fiscale del Seller

            cy.get('select[name=day]')
                .select(seller.birthday, { force: true })
                .should('have.value', seller.birthday);
            cy.get('select[name=month]')
                .select(seller.birthmonth, { force: true })
                .should('have.value', seller.birthmonth);
            cy.get('select[name=year]')
                .select(seller.birthyear, { force: true })
                .should('have.value', seller.birthyear);            // Inserimento della data di nascita

            cy.get('[data-test="nationality"]').find('select')
                .select(seller.nationality, { force: true })
                .should('have.value', 'IT');            	           // Inserimento della nazionalità

            cy.get('[data-test="business_name"]').find('input')
                .type(seller.business_name, { force: true });       // Inserimento della Ragione Sociale

            cy.get('[data-test="vat_number"]').find('input')
                .type(seller.vat_number, { force: true });          // Inserimento del Codice Fiscale del Seller

            cy.get('[data-test="address"]').find('input')
                .type(seller.address, { force: true });             // Inserimento dell'Indirizzo del Seller

            cy.get('[data-test="house_number"]').find('input')
                .type(seller.house_number, { force: true });        // Inserimento del numero di casa del Seller

            cy.get('[data-test="city"]').find('input')
                .type(seller.city, { force: true });                // Inserimento della città del Seller

            cy.get('[data-test="post_code"]').find('input')
                .type(seller.post_code, { force: true });           // Inserimento del CAP del Seller

            cy.get('[data-test="province"]').find('input')
                .type(seller.province, { force: true });            // Inserimento della Provincia del Seller

            cy.get('[data-test="storeCreationBackButton_save"]')
                .click({ force: true });                                // Salva i Dati personali

            cy.clearCookies();
        });

    });

    // Inserisci i Dati di pagamento del Seller

    it("Insertion of the Seller's payment data", function () {

        cy.readFile('cypress/integration/Test sul Sito - Seconda fase/DatiJson/SellerShopDetails.json').then((user) => {
            const seller = user.seller01.sellerIBAN;
            cy.log(seller);

            cy.get('[data-test="first_name"]').find('input')
                .type(seller.first_name, { force: true });           // Inserimento del nome del Seller

            cy.get('[data-test="last_name"]').find('input')
                .type(seller.last_name, { force: true });            // Inserimento del cognome del Seller

            cy.get('[data-test="IBAN"]').find('input')
                .type(seller.IBAN, { force: true });                 // Inserimento del Codice Fiscale del Seller

            cy.get('[data-test="address"]').find('input')
                .type(seller.address, { force: true });              // Inserimento dell'Indirizzo del Seller

            cy.get('[data-test="city"]').find('input')
                .type(seller.city, { force: true });                 // Inserimento della città del Seller

            cy.get('[data-test="postcode"]').find('input')
                .type(seller.postcode, { force: true });             // Inserimento del CAP del Seller

            cy.get('[data-test="region"]').find('input')
                .type(seller.region, { force: true });               // Inserimento della Provincia del Seller

            cy.get('[data-test="country"]').find('select')
                .select(seller.country, { force: true })
                .should('have.value', 'IT');            	         // Inserimento della nazione del Seller

            cy.get('[data-test="storeCreationBackButton_save"]')
                .click({ force: true });                             // Salva i Dati di pagamento del Seller
        });

    });
});