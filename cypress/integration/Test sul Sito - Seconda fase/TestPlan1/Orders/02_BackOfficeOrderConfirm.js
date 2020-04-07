// Accedere come Utente nel BackOffice e confermare l'ordine

describe('SOR accept the Order', function () {
    const email = 'luca@shop-o-rama.it'
    const password = 'Banana'

    const inDashboard = () => {
        it('control dashboard', () => {
            cy.location('href').should('match', /dashboard$/)
            cy.contains('h1', 'Dashboard')
        })
    }

    it('Slow login via UI and order acceptance', () => {
        // Faccio Login nella Dashboard 
        cy.visit('https://staging.shop-o-rama.it//admin/login')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        cy.get('input[type=submit]').click({ force: true });
        inDashboard()

        // Vado negli pagina Ordini
        cy.contains('Orders').click({ force: true });

        // Trovo l'ultimo ordine fatto e ci entro
        cy.get('table').find('td').as('order');
        cy.get('@order').first().click({ force: true });

        // Accetto l'Ordine
        cy.contains('SoR accept').click({ force: true });
    })
})