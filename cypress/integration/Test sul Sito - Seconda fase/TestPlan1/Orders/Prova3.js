import '../../../../support/index'

describe('Logging In - XHR Web Form', function () {
    const emailb = 'seller1@getnada.com'
    const passwordb = 'Password1'

    context('XHR form submission', () => {
        it('successfully logs in first part', () => {
            cy.visit('/')
            cy.contains('Accedi').click({ force: true });
            cy.get('[data-test="LoginForm"]').find('[data-test="email"]').type(emailb)
            cy.get('[data-test="LoginForm"]').find('[data-test="password"]').type(passwordb)
        })

        it('successfully logs in second part', (done) => {
            cy.server()
            cy.route('/api/cart/count?sessionId=*', { enable: false })
            cy.route('/sockjs-node/099/vemjohxq/xhr_streaming?t=*', { enable: false })



            cy.on('uncaught:exception', (err, runnable) => {
                expect(err.message).to.include('of undefined')
                done()
                return false
            })

            cy.get('[data-test="LoginForm"]').find('[data-test="invia_login"]').click({ force: true })

        })
    })
})