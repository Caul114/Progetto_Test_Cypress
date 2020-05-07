describe('Logging In - CSRF Tokens', function () {
    const email = 'luca@shop-o-rama.it'
    const password = 'Banana{enter}'

    it('strategy #4: slow login via UI', () => {
        cy.request('/login')
        cy.visit('/')
        // cy.get('input[name=email]').type(email)
        // cy.get('input[name=password]').type(password)
    })
})