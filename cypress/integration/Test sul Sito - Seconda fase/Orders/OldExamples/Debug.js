// if you want to debug when any test fails you likely want to put this in a support file, or at the top of an individual spec file
// se si desidera eseguire il debug in caso di esito negativo di un test, è probabile che si desideri inserirlo in un file di supporto o nella parte superiore di un singolo file di specifiche
Cypress.on('fail', (error, runnable) => {
    debugger

    // we now have access to the err instance and the mocha runnable this failed on
    // ora abbiamo accesso all'istanza err e alla moka eseguibile se questa non è riuscita

    throw error // throw error to have test still fail - genera errore per avere ancora esito negativo del test
})

it('calls the "fail" callback when this test fails', () => {
    // when this cy.get() fails the callback is invoked with the error
    cy.get('element-that-does-not-exist')

})