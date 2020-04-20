describe('Logging In - CSRF Tokens', function () {
    const email = 'luca@shop-o-rama.it'
    const password = 'Banana{enter}'

    it('strategy #4: slow login via UI', () => {
        // Not recommended: log into the application like a user
        // by typing into the form and clicking Submit
        // While this works, it is slow and exercises the login form
        // and NOT the feature you are trying to test.
        cy.visit('/login')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        // cy.get('input[type=submit]').click({ force: true });
        // inDashboard()
    })
})