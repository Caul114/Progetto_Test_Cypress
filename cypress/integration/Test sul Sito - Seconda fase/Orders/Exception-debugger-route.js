import '../../../../support/index'

describe('Logging In - XHR Web Form', function () {
    // normally sensitive information like username and password
    // should be passed via environment variables
    // https://on.cypress.io/env
    const emailb = 'seller1@getnada.com'
    const passwordb = 'Password1'

    context('XHR form submission', function () {
        // if you want to debug when any test fails You likely want to put this in a support file, or at the top of an individual spec file
        // se si desidera eseguire il debug in caso di esito negativo di un test È probabile che si desideri inserirlo in un file di supporto o nella parte superiore di un singolo file di specifiche

        Cypress.on('fail', (error, runnable) => {
            debugger

            // we now have access to the err instance and the mocha runnable this failed on
            // ora abbiamo accesso all'istanza errata e alla moka eseguibile su cui non è riuscita

            throw error // throw error to have test still fail
        })

        it('successfully logs in', () => {
            // Wait for the route aliased as 'getAccount' to respond without changing or stubbing its response
            // Attendi che la route resa con un alias come 'getAccount' risponda senza modificarne o cancellarne la risposta
            cy.server()
            cy.route('/api/cart/*').as('getAccount')
            cy.route('/api/user/verify/').as('getAccount2')
            cy.route('/api/common/*').as('getAccount3')
            cy.route('/api/*').as('getAccount4')

            cy.visit('http://localhost:3005/')
            cy.wait(['@getAccount', '@getAccount3', '@getAccount4']).then((xhrs) => {
                // we can now access the low level xhr that contains the request body,  response body, status, etc
                // ora possiamo accedere a xhr di basso livello che contiene il corpo della richiesta, il corpo della risposta, lo stato, ecc
            })

            cy.contains('Accedi').click({ force: true });
            cy.get('[data-test="LoginForm"]').find('[data-test="email"]').type(emailb)
            cy.get('[data-test="LoginForm"]').find('[data-test="password"]').type(passwordb)

            // this event will automatically be unbound when this test ends because it's attached to 'cy'
            // questo evento non verrà associato automaticamente al termine del test perché è associato a "cy"
            cy.on('uncaught:exception', (err, runnable) => {
                try {
                    expect(err.message).to.include('of undefined')
                    expect(err.message).to.include('<')
                    expect(err.message).to.include('completed_gdpr_compliance')
                    expect(err.message).to.include('removeChild')

                    // using mocha's async done callback to finish this test so we prove that an uncaught exception was thrown
                    // usiamo il callback asincrono di moka per terminare questo test così dimostriamo che è stata lanciata un'eccezione non rilevata
                    // done()

                    // return false to prevent the error fromfailing this test
                    // restituisce false per evitare che l'errore fallisca questo test                
                    return false
                }
                catch {
                    return true
                }
            })
            cy.get('[data-test="LoginForm"]').find('[data-test="invia_login"]').click({ timeout: 40000 })

            // we should be in
            cy.url().should('include', '/localhost:3005')

            cy.wait('@getAccount2').then((xhr) => {
            })
        })


    })
})
