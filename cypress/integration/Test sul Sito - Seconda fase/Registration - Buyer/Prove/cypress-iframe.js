import 'cypress-iframe'

cy.get('.open_mail').frameLoaded('[id="idIframe"]');
cy.iframe().find(".inner-td").contains('CONFERMA').click({ force: true });