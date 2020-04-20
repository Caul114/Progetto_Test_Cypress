import "./../../../../support/index"

describe("Login as Buyer", function () {
    const email = 'buyer@shop-o-rama.it'
    const password = 'Password1@{enter}'

    it("Login as Buyer", function () {
        cy.server()
        cy.route({
            method: 'GET',
            url: '/api/home/',
        }).as('apiCheck')

        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");


        cy.contains('Accedi').click({ force: true });

        cy.loginToSite(email, password)

        cy.get('[data-test="LoginForm"]').find('[data-test="email"]')
            .type(email)

        cy.get('[data-test="LoginForm"]').find('[data-test="password"]')
            .type(password)


        cy.wait('@apiCheck').then((xhr) => {
            assert.isNotNull(xhr.response.body.user, 'user_type')
        })


        // cy.get('[data-test="main-search"]')
        //     .type('prodotto').should('have.value', 'prodotto');
        // cy.get('[data-test="search_button"]').click({ force: true });
        // cy.url().should("include", "q=prodotto&page=1");
    });

    // it("Search for 'prodotto' product", function () {      // search, prodotto di seller 2
    //     cy.get('[data-test="main-search"]')
    //         .type('prodotto').should('have.value', 'prodotto');
    //     cy.get('[data-test="search_button"]').click({ force: true });
    //     cy.url().should("include", "q=prodotto&page=1");
    // });
});