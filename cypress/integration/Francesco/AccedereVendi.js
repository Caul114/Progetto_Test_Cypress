describe('My FirstTest', function () {
    it('Visit Shop-o-rama', function () {
        cy.visit("https://sor-fe-staging.herokuapp.com/"); // url da visitare

        cy.contains('Vendi').click({ force: true });

        cy.url().should('include', 'vendi-su-shoporama');
    });
})