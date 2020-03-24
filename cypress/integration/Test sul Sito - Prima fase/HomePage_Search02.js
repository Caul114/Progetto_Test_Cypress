describe('My FirstTest', function() {
    it('Visit Shop-o-rama', function() {
        cy.visit('http://localhost:3005/');

        cy.get('.Search_Search__Input__6sVvM')
        .type(`${'maglia'}{enter}`)

        cy.contains('Maglietta rossa')
    });
})