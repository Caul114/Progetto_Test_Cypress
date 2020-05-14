describe('Logging In - CSRF Tokens', function () {
    const email = 'luca@shop-o-rama.it'
    const password = 'Banana'

    Cypress.Commands.add('loginByCSRF', (csrfToken) => {
        Cypress.log({
            name: 'login by JSON',
            message: `${email} | ${password}`,
        })

        return cy.request({
            method: 'POST',
            url: '/admin/login',
            body: {
                email,
                password,
                csrf: csrfToken, // insert this as part of form body
            },
        })
    })

    // context('Reusable "login" custom command with XHR', function () {
    //     const email = 'luca@shop-o-rama.it'
    //     const password = 'Banana'

    beforeEach(function () {
        // login before each test
        cy.loginByCSRF(email, password)
    })

    it('can visit admin/dashboard', function () {
        cy.visit('/admin')
        //   cy.get('h1').should('contain', 'jane.lane')
    })

    it('redirects to admin/dashboard', () => {
        cy.visit('/admin/dashboard')
        cy.location('href').should('match', /dashboard$/)
    })


    // it('can visit /users', function () {
    //     cy.visit('/users')
    //     //   cy.get('h1').should('contain', 'Users')
    // })

    // it('can simply request other authenticated pages', function () {
    //     // instead of visiting each page and waiting for all
    //     // the associated resources to load, we can instead
    //     // just issue a simple HTTP request and make an
    //     // assertion about the response body
    //     cy.request('/admin/dashboard')
    //         .its('body')
    //         .should('include', '<h1>Dashboard</h1>')
    // })

    // it('can visit other authenticated pages', function () {
    //     cy.visit('/admin/dashboard')
    //     cy.contains('h1', 'Admin')
    // })
})