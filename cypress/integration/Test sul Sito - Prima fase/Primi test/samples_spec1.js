describe('My First Test', function() {
  it('Click the link Type', function() {
    cy.visit('https://example.cypress.io')

    cy.pause()

    cy.contains('type').click()

    // Should be a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')
  })
})