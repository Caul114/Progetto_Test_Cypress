// Accedere come Utente nel BackOffice e effettuare le utlime operazioni sull'ordine

describe('SOR accept the Order', function () {
    // const email = 'luca@shop-o-rama.it'
    // const password = 'Banana{enter}'

    const email = 'tech@shop-o-rama.it'
    const password = '5h0p0r4m4{enter}'

    const inDashboard = () => {
        it('control dashboard', () => {
            cy.location('href').should('match', /dashboard$/)
            cy.contains('h1', 'Dashboard')
        })
    }

    it('Slow login via UI and order acceptance', () => {
        // Fare Login nella Dashboard 
        // cy.visit('https://staging.shop-o-rama.it//admin/login')
        cy.visit('http://localhost:3000/admin/login')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        inDashboard()

        // Andare negli pagina Ordini
        cy.contains('Orders').click({ force: true });
        cy.wait(2000);

        // Trovare l'ultimo ordine fatto ed entrarci
        cy.get('table').find('td').as('order');
        cy.get('@order').first().click({ force: true });
        cy.wait(5000);

        // Spuntare che l'Ordine è stato consegnato
        cy.contains('Mark Delivered').click({ force: true });
        cy.wait(5000);

        // Spuntare che l'Ordine è stato completato
        cy.contains('Mark Completed').click({ force: true });
        cy.wait(5000);

        // Spuntare che il Pagamento è stato effettuato
        cy.contains('Process Payment').click({ force: true });
        cy.wait(5000);

        // Verifica che il Payout è stato effettuato
        cy.contains('Check Payout').click({ force: true });
        cy.wait(5000);

        // Creare la fattura
        cy.contains('Create invoice').click({ force: true });
        cy.wait(5000);

        // // Logout dal backoffice
        // cy.get('.caret').click({ force: true });
        // cy.contains('Log out').click({ force: true });
        // cy.clearCookies()       // Cancello tutti i cookies
    })
})