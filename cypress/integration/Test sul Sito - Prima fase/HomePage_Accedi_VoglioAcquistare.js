describe('My FirstTest', function() {
    it('Visit Shop-o-rama', function() {
        cy.visit('http://localhost:3005/');

        cy.contains('Voglio Acquistare').click({force:true})

        cy.url().should('include', 'accedi')
    });
})