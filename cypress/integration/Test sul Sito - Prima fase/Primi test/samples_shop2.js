describe("My second Test on Shop-o-rama staging", function()    {
    it("Test di Login", function()  {
        cy.visit("https://sor-fe-staging.herokuapp.com/");

        cy.contains("Accedi").click({force:true})

        cy.get('#login_email')
        .type('kenshiro@getnada.com')
        .should('have.value', 'kenshiro@getnada.com')


    })
})