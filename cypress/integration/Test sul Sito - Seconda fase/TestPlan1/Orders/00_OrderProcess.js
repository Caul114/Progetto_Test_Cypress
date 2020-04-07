// Accedere su Shop-o-rama come Buyer

describe("Login as Buyer", function () {
    it("Visit HomePage", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
    });

    it("Closure of the Privacy Banner", function () {       // Chiusura del Banner policy
        cy.get('[data-test="close_cookie"]').click({ force: true });
        // cy.wait(5000);
    });

    it("Login Page", function () {      // Login con 'Accedi'
        cy.contains('Accedi').click({ force: true });
    });

    it("Login as Buyer", function () {      // Login come buyer1@getnada.com
        cy.get('[data-test="LoginForm"]').find('[data-test="email"]')
            .type("buyer1@getnada.com")
            .should("have.value", "buyer1@getnada.com");

        cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
            .type("Password1")
            .should("have.value", "Password1");

        cy.get("button")
            .contains("Invia")
            .click({ force: true });

        // cy.wait(4000);
    });
});

// Cercare un prodotto di seller1@getnada.com

describe("Purchase of a product", function () {
    it("Search for 'seller 1' product", function () {      // search, prodotti di seller 1
        cy.get('[data-test="main-search"]')
            .type('seller 1').should('have.value', 'seller 1');
        cy.get('[data-test="search_button"]').click({ force: true });
        cy.url().should("include", "q=seller%201&page=1");
    });

    it("Choose 'Prova 1", function () {     //  scelgo il prodotto Prova 1
        cy.get('[data-test="ProductCard__ProdTitle-3751"]')
            .click({ force: true });
        cy.url().should("include", "prova-1");
    });

    it("Load the product on the cart", function () {     //  Carico il prodotto sul carrello
        cy.get('[data-test="add-to-cart"]')
            .click({ force: true });
    });
});

// Usando un indirizzo di spedizione già presente e una CC già presente, fare l'acquisto

describe("Buy a product", function () {
    it("The cart", function () {     // Vado nel carrello
        cy.get('[data-test="Shopping-cart"]')
            .click({ force: true });
        cy.url().should("include", "carrello");
    });

    it("Buy the product", function () {     //  Effetttuo l'acquisto
        cy.get('[data-test="order"]')
            .click({ force: true });
    });

    it("!!! In case of error !!!", function () {     //  Chiudo il modale di errore
        cy.get('.ConfirmModal_ModalBoxAccept__1hYwL')
            .click({ force: true });
    });
});

// Logout Buyer

describe("Buyer Logout", function () {
    it("Go to the Dashboard Buyer", function () {     // Vado nella Dashboard del Buyer
        cy.get('[data-test="User"]')
            .click({ force: true });
        cy.url().should("include", "dashboard");
    });

    it("Buyer Logout", function () {     // Faccio il Logout
        cy.get(".sorDashboardContainer")
            .find('[data-test="signout_buyer"]')
            .click({ force: true });
        cy.clearCookies()       // Cancello tutti i cookies
    });
});


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