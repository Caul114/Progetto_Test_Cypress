describe('Secondo test Shop-o-Rama', function()   {
    it('Test sul link', function()  {
        cy.visit('https://sor-fe-staging.herokuapp.com/accedi')

        cy.url().should('include','accedi')
        
        let login_email =    cy.get('#login_email')
        login_email
        .type('kenshiro@getnada.com')
        .should('have.value', 'kenshiro@getnada.com')

        
        cy.get('#login_password')
        .type('Password1')
        .should('have.value', 'Password1')


        login_email.parent().parent().parent().submit()
       })
})  