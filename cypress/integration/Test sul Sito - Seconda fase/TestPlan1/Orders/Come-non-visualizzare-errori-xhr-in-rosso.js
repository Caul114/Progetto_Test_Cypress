it('Does not catch script error', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        throw err
    })

    cy.visit('http://www.sickchirpse.com/10-of-the-worst-websites-ever/')
})