import "./../../../support/index"

describe("Accesso alla Dashboard del Buyer per inserire l'indirizzo di fatturazione e la CC", function () {

    it("Access to Dashboard Buyer", function () {

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
        });

        // Accesso alla Dashboard dell'User

        cy.get('[data-test="User"]').click({ force: true });
        cy.wait(4000);

        // Accesso al modale di aggiunta di un indirizzo di fatturazione

        cy.get('[data-test="controlpanel_DashboardBuyer"]').find('[data-test="/account/indirizzi"]').click({ force: true });        // Accedi alla pagina 'Le tue impostazioni' dal Pannello di Controllo

        cy.get('[data-test="addLink"]').click({ force: true });   // Apertura del modale per l'aggiunta di un indirizzo

        // Inserimento dell'Indirizzo di fatturazione usando un file .json salvato nella cartella

        cy.readFile('cypress/integration/Test sul Sito - Seconda fase/DatiJson/BuyerAddressCC.json').then((user) => {
            const buyer = user.buyer01.buyerAddress;
            cy.log(buyer);

            cy.get('[class=" "]').find('[data-test="name"]').type(buyer.fullname);
            cy.get('[class=" "]').find('[data-test="line_1"]').type(buyer.address);
            cy.get('[class=" "]').find('select[name=country]')
                .select(buyer.state).should('have.value', "IT");
            cy.get('[class=" "]').find('[data-test="city"]').type(buyer.city);
            cy.get('[class=" "]').find('[data-test="province"]').type(buyer.province);
            cy.get('[class=" "]').find('[data-test="post_code"]').type(buyer.post_code);
            cy.get('[class=" "]').find('[data-test="phone"]').type(buyer.phone);
            cy.get('[class=" "]').find('[name="note"]').type(buyer.shipping_notes);
            cy.get('[class=" "]').find('[data-test="sorModalSaveButton_New "]').click({ force: true });
        });

        // Accesso alla Dashboard dell'User

        cy.get('[data-test="User"]').click({ force: true });
        cy.wait(4000);

        // Accesso al modale di modifica dei dati personali

        cy.get('[data-test="controlpanel_DashboardBuyer"]').find('[data-test="/account/indirizzi"]').click({ force: true });        // Accedi alla pagina 'Le tue impostazioni' dal Pannello di Controllo
        cy.wait(2000);
        cy.get('[data-test="buttonContainer"]').click({ force: true }); // Accesso al modale dei Dati personali

        cy.readFile('cypress/integration/Test sul Sito - Seconda fase/DatiJson/BuyerAddressCC.json').then((user) => {
            const buyer = user.buyer01.buyerCC;
            cy.log(buyer);

            cy.get('[data-test="sorChildrenRelative"]').find('select').select('male');
            cy.get('select[data-test=day-birthday]')
                .select(buyer.birthday).should('have.value', buyer.birthday);
            cy.get('select[data-test=month-birthday]')
                .select(buyer.birthmonth).should('have.value', buyer.birthmonth);
            cy.get('select[data-test=year-birthday]')
                .select(buyer.birthyear).should('have.value', buyer.birthyear);
            // cy.get('[data-test="user_role_attributes.fiscal_code"]')
            //     .type(buyer.CF);
            cy.get('[data-test="sorModal_New_BuyerDetails"]')
                .find('[data-test="sorModal_Personal__bottom_Save"]').click({ force: true });
        });

        // Accesso alla Dashboard dell'User

        cy.get('[data-test="User"]').click({ force: true });
        cy.wait(4000);

        // Accesso al modale di modifica dei dati personali

        cy.get('[data-test="controlpanel_DashboardBuyer"]').find('[data-test="/account/indirizzi"]').click({ force: true });        // Accedi alla pagina 'Le tue impostazioni' dal Pannello di Controllo
        cy.wait(2000);

        // // Accesso alla Dashboard dell'User

        // cy.get('[data-test="User"]').click({ force: true });
        // cy.wait(2000);

        // // Accesso al modale di aggiunta di una Carta di Credito

        // cy.get('[data-test="missing-info"]').click({ force: true });        // Accedi alla pagina CC dal Pannello di Controllo

        // cy.get('[data-test="add-new-card-button"]').click({ force: true });   // Apertura del modale per l'aggiunta della CC


        // // Inserimento dei dati della CC usando un file .json salvato nella cartella

        // cy.readFile('cypress/integration/Test sul Sito - Seconda fase/TestPlan1/DatiJson/BuyerAddressCC.json').then((user) => {
        //     const buyer = user.buyer01.buyerCC;
        //     cy.log(buyer);

        //     cy.get('[data-test="name"]').type(buyer.fullname);
        //     cy.get('[data-test="card_number"]').type(buyer.number);
        //     cy.get('select[data-test=month_CC]')
        //         .select(buyer.month).should('have.value', buyer.month)
        //     cy.get('select[data-test=year_CC]')
        //         .select(buyer.year).should('have.value', buyer.year)
        //     cy.get('[data-test="security_code"]').type(buyer.CVV);
        //     cy.get('select[data-test=day-birthday]')
        //         .select(buyer.birthday).should('have.value', buyer.birthday)
        //     cy.get('select[data-test=month-birthday]')
        //         .select(buyer.birthmonth).should('have.value', buyer.birthmonth)
        //     cy.get('select[data-test=year-birthday]')
        //         .select(buyer.birthyear).should('have.value', buyer.birthyear)
        //     cy.get('[data-test="sorModal_New__bottom_Save"]').click({ force: true });
        // });
    });
});