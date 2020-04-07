describe('Logging In - CSRF Tokens', function () {
    const email = 'luca@shop-o-rama.it'
    const password = 'Banana'

    Cypress.Commands.add('loginByCSRF', (csrfToken) => {
        Cypress.log({
            name: 'login by CSRF',
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

    const inDashboard = () => {
        it('control dashboard', () => {
            cy.location('href').should('match', /dashboard$/)
            // cy.contains('h2', 'dashboard.html')
        })
    }

    const visitDashboard = () => {
        it('visit dashboard', () => {
            cy.visit('/admin/dashboard')
            inDashboard()
        })
    }

    // it('strategy #1: parse token from HTML', function () {
    //     // if we cannot change our server code to make it easier
    //     // to parse out the CSRF token, we can simply use cy.request
    //     // to fetch the login page, and then parse the HTML contents
    //     // to find the CSRF token embedded in the page
    //     cy.request('/admin/login')
    //         .its('body')
    //         .then((body) => {
    //             // we can use Cypress.$ to parse the string body
    //             // thus enabling us to query into it easily
    //             const $html = Cypress.$(body)
    //             const csrf = $html.find('meta[name=csrf-token]').val()

    //             cy.loginByCSRF(csrf)
    //                 .then((resp) => {
    //                     expect(resp.status).to.eq(200)
    //                     expect(resp.body).to.include('<div class="form-group">')
    //                 })
    //         })

    //     // successful "cy.request" sets all returned cookies, thus we should
    //     // be able to visit the protected page - we are logged in!
    //     visitDashboard()
    // })

    it('strategy #2: parse token from response headers', function () {
        // if we embed our csrf-token in response headers
        // it makes it much easier for us to pluck it out
        // without having to dig into the resulting HTML
        cy.request('/admin/login')
            .its('headers')
            .then((headers) => {
                const csrf = headers['csrf-token']

                cy.loginByCSRF(csrf)
                    .then((resp) => {
                        expect(resp.status).to.eq(200)
                        expect(resp.body).to.include('<div class="form-group">')
                    })
            })

        visitDashboard()
    })

    it('strategy #4: slow login via UI', () => {
        // Not recommended: log into the application like a user
        // by typing into the form and clicking Submit
        // While this works, it is slow and exercises the login form
        // and NOT the feature you are trying to test.
        cy.visit('/admin/login')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        cy.get('input[type=submit]').click({ force: true });
        // inDashboard()
    })



})