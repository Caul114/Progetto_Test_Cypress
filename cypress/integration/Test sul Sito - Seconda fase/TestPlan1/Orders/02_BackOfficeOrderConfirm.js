// Accedere come Utente nel BackOffice e confermare l'ordine

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
        // Faccio Login nella Dashboard 
        // cy.visit('https://staging.shop-o-rama.it//admin/login')
        cy.visit('http://localhost:3000/admin/login')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        inDashboard()

        // Vado negli pagina Ordini
        cy.contains('Orders').click({ force: true });

        // Andare nei New Orders
        cy.contains('New Order').click({ force: true });

        // Trovo l'ultimo ordine fatto e ci entro
        cy.get('table').find('td').as('order');
        cy.get('@order').first().click({ force: true });
        cy.wait(5000);

        // Andare nelle Transactions dell'Ordine
        cy.contains('Transactions').click({ force: true });

        // Salvare il valore della Transazione
        cy.get('#tab-transactions').children().then(($btn) => {

            // Memorizza il valore della Transazione
            const txt = $btn.text()
            const number = txt.slice(46, 54);
            cy.log(txt);
            cy.log(number);
        })

    })

    // // Accetto l'Ordine
    // cy.contains('SoR accept').click({ force: true });

    // // Logout dal backoffice
    // cy.get('.caret').click({ force: true });
    // cy.contains('Log out').click({ force: true });
    // cy.clearCookies()       // Cancello tutti i cookies
})
})