// Cypress.Commands.add('loginOnBO', (email, password) => {
//     Cypress.log({
//         name: 'login on BO',
//         message: `${email} | ${password}`,
//     })

//     return cy.request({
//         method: 'POST',
//         url: '/login',
//         body: {
//             email,
//             password,
//         }
//     })
//         .then((response) => {
//             expect(response).to.have.property('headers') // true,
//             expect(response).to.have.property('duration')
//             expect(response.status).to.eq(200)
//             expect(response.headers).to.have.property('server', 'Cowboy')
//         })
// })

import "../../../../../support/commands"

describe('Reusable "login" custom command', function () {
    const email = 'luca@shop-o-rama.it'
    const password = 'Banana{enter}'

    beforeEach(function () {
        // login before each test
        cy.loginOnBO(email, password)
        // to prove we have a session
        cy.getCookie('cypress-session-cookie').should('null')
    })

    it('can visit /dashboard', function () {
        cy.visit('/login')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        cy.get('h1').should('contain', 'Dashboard')
    })
})