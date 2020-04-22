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
        // cy.pause();

        // --- Procedura da fare nel caso in cui si debba spostare l'oridne da New Orders a Active Orders ---

        // Andare nei New Orders
        cy.contains('New Order').click({ force: true });
        cy.wait(5000);
        // cy.pause();

        // Trovo l'ultimo ordine fatto e ci entro
        cy.get('table').find('td').as('order');
        cy.get('@order').first().click({ force: true });
        cy.wait(5000);
        // cy.pause();

        // Andare nelle Transactions dell'Ordine
        cy.contains('Transactions').click({ force: true });
        // cy.pause();

        // Salvare il valore della Transazione ed effettuare la richiesta di esecuzione dell'ordine
        cy.get('#tab-transactions').children().then(($btn) => {

            // Memorizza il valore della Transazione
            const txt = $btn.text()
            const number = txt.slice(231, 239);
            // cy.log(txt);
            cy.log(number);

            // Faccio un'HTTP GET della transazione Mangopay per poter rendere attivo l'Ordine
            const theUrl = "localhost:3000/api/hooks?Date=1571301454&EventType=PAYIN_NORMAL_SUCCEEDED&RessourceId=" + number;
            cy.log(theUrl);
            cy.request(theUrl);
            cy.wait(2000);
        })

        // Vado negli pagina Ordini
        cy.contains('Orders').click({ force: true });
        cy.wait(2000);

        // Trovo l'ultimo ordine fatto e ci entro
        cy.get('table').find('td').as('order');
        cy.get('@order').first().click({ force: true });
        cy.wait(5000);

        // Accetto l'Ordine
        cy.contains('SoR accept').click({ force: true });

        // Logout dal backoffice
        cy.get('.caret').click({ force: true });
        cy.contains('Log out').click({ force: true });
        cy.clearCookies()       // Cancello tutti i cookies
    })


})