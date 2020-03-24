describe('My FirstTest', function() {
    it('Visit Shop-o-rama', function() {
        cy.visit('http://localhost:3005/accedi');

        cy.contains('Accedi').click({force:true})

        cy.url().should('include', 'accedi')
    });
})