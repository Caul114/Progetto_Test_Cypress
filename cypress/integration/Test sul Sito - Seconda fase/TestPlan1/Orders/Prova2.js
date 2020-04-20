import '../../../../support/index'

describe('Logging In - XHR Web Form', function () {
    const emailb = 'seller1@getnada.com'
    const passwordb = 'Password1'

    context('XHR form submission', function () {

        it('successfully logs in', () => {

            cy.visit('http://localhost:3005/')

            cy.contains('Accedi').click({ force: true });
            cy.get('[data-test="LoginForm"]').find('[data-test="email"]').type(emailb)
            cy.get('[data-test="LoginForm"]').find('[data-test="password"]').type(passwordb)
        })

        it('successfully logs in 2', (done) => {

            cy.contains('Accedi').click({ force: true });
            // cy.pause();

            cy.on('uncaught:exception', (err, runnable) => {
                try {
                    // expect(err.message).to.include('of undefined')
                    // expect(err.message).to.include('<')
                    expect(err.message).to.include('completed_gdpr_compliance')
                    // expect(err.message).to.include('removeChild')

                    // using mocha's async done callback to finish this test so we prove that an uncaught exception was thrown
                    // usiamo il callback asincrono di moka per terminare questo test così dimostriamo che è stata lanciata un'eccezione non rilevata
                    done()

                    // return false to prevent the error fromfailing this test
                    // restituisce false per evitare che l'errore fallisca questo test                
                    return false
                }
                catch {
                    return true
                }
            })

            Cypress.on('uncaught:exception', (err, runnable) => {
                throw err
            })


            cy.get('[data-test="LoginForm"]').find('[data-test="invia_login"]').click({ timeout: 50000 })

            // // we should be in
            // cy.url().should('include', '/localhost:3005')

        })
    })
})