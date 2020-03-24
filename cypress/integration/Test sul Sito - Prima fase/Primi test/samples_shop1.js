describe('Primo test Shop-o-Rama', function()   {
    it('Test sul link', function()  {
        cy.visit('https://www.shop-o-rama.it/')

        cy.contains('Gioielli').click()

        cy.contains('Per Lui').click()

        cy.url().should('include','gioielli')
    })
})  