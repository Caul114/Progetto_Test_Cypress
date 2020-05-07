
// Con questi metodi aggiro il problema del iframe che Cypress non riesce a visitare direttamente
// Creando queste funzioni, quando si tratterà di caricare l'iframe della mail salvata su getnada.com si riuscirà ad accedere al suo DOM 

const getIframeDocument = () => {
    return cy
        .get('.open_mail').find('iframe[id="idIframe"]')
        .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
    // get the document
    return getIframeDocument()
        // automatically retries until body is loaded
        .its('body').should('not.be.undefined')
        // wraps "body" DOM element to allow chaining more Cypress commands, like ".find(...)"
        // avvolge l'elemento DOM "body" per consentire il concatenamento di più comandi Cypress, come ".find (...)"
        .then(cy.wrap)
}


describe("Accesso a Getnada.com per confermare la registrazione del Seller", function () {

    var fs = require('fs');

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

        cy.get('.msg_list').find('.msg_item').first().click({ force: true });
        // cy.pause();
        cy.wait(2000);

        // Accedo all'iframe del messaggio e clicco sul pulsante di conferma della registrazione
        getIframeBody().find(".inner-td").contains('CONFERMA').click({ force: true });
    });


});
