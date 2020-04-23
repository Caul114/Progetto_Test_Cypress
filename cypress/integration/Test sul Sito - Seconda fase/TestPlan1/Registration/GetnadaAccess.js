describe("Accesso a Getnada.com per confermare la registrazione del Buyer", function () {


    it("Accedi al sito della mail", function () {
        cy.visit("https://getnada.com/");

        cy.get(".panel-body")
            .contains("Add Inbox")
            .click({ force: true });

        cy.get(".add_inbox")
            .find('[class="user_name"]')
            .clear()
            .type('inutile');

        cy.get('[class="modal-content open"]')
            .find('[class="button success"]')
            .click({ force: true });

        cy.get('.msg_list').find('.msg_item').last().click({ force: true });
        // cy.pause();


        // cy.get('.open_mail')
        //     .children('iframe')
        //     .document()
        //     .children('html')
        //     .children('.sg-campaigns')

        cy.get('#idIframe')
            .document()

        // cy.get('.center_on_small')
        //     .children()
        //     .children('.flex-grid')
        //     .children('.two-thirds')
        //     .children()

        // .children()
        // .children()
        // .children()
        // .children()
        // .children()
        // .children()
        // .children()
        // .children()
        // .children()
        // .children()
        // .children()
        // .children()
        // .children()
        // .children()
        // .contains('CONFERMA')
        // .click({ force: true });
    });


});
