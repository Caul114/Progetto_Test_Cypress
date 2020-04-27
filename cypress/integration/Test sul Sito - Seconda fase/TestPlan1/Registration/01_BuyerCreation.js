describe("Prova Mobile", function () {

    // Creazione del Nome
    it("Buyer Name Creation", function () {

        function userID_Alpha() {
            var text = "";
            var possible = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }

        const firstname = userID_Alpha();
        cy.log("Firstname: " + firstname);

        // Creazione del Cognome

        const lastname = userID_Alpha();
        cy.log("Lastname: " + lastname);

        // Creazione della Somma Nome+Cognome

        const firstlast = "" + firstname + lastname;
        cy.log("Firstlast: " + firstlast);

        // Creazione della Email @getnada

        var email = firstname + lastname + "@shop-o-rama.it";
        cy.log("Email: " + email);

        // Creazione della Password

        function userID_Password() {
            var text = "";
            var possiblechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 7; i++)
                text += possiblechar.charAt(
                    Math.floor(Math.random() * possiblechar.length)
                );
            var possiblenum = "0123456789";
            text += possiblenum.charAt(Math.floor(Math.random() * possiblenum.length));
            return text;
        }

        var password = userID_Password();
        cy.log("Password: " + password);


        // Salvo il nuovo utente in un file esterno
        cy.writeFile('cypress/integration/Test sul Sito - Seconda fase/TestPlan1/Registration/NewBuyer.json', { username: email, passwd: password + "{enter}" })
        // Accesso al sito e registrazione del Buyer

        cy.visit("http://localhost:3005/");                                 // url da visitare
        cy.url().should("include", "localhost:3005");

        cy.get('[data-test="close_cookie"]').click({ force: true });        // Chiusura del Banner policy

        cy.contains('Accedi').click({ force: true });                      // Andare nella pagina di Login

        cy.get('[data-test="Registrati"]').click({ force: true });             // Accedo al modulo di registrazione

        cy.get('[data-test="first_name"]')
            .type(firstname);

        cy.get('[data-test="last_name"]')
            .type(lastname);

        cy.get('[data-test="RegistrationFormBuyer"]')
            .find('[data-test="email"]')
            .type(email);

        cy.get('[data-test="RegistrationFormBuyer"]')
            .find('[data-test="password"]')
            .type(password);

        cy.get('[data-test="password_confirmation"]')
            .type(password);

        cy.get('[data-test="gdpr_pp"]')
            .click({ force: true });

        cy.get('[data-test="gdpr_tc"]')
            .click({ force: true });

        cy.get('[data-test="RegistrationFormBuyer"]')
            .find('[data-test="registration_button"]')
            .click({ force: true });

        // cy.wait(2000);
        // });
    });
});