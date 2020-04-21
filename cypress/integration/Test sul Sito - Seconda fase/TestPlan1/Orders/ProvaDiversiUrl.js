describe('Visito several sites', function () {
    it("Visit localhost", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
        // cy.clearLocalStorage()
        cy.clearCookies()
    });
})


// describe('Memory cleaning', () => {
//     it('Cleaning', () => {
//         cy.clearLocalStorage()
//         cy.clearCookies()
//     })
// })

// describe('Visito several sites', function () {
//     it('Visit Google', () => {
//         // Faccio Login nella Dashboard 
//         cy.visit('https:/www.google.com')
//         cy.url().should("include", "google");
//         // cy.clearLocalStorage()
//         cy.clearCookies()

//     })
// })


// describe('Memory cleaning', () => {
//     it('Cleaning', () => {
//         cy.clearLocalStorage()
//         cy.clearCookies()
//     })
// })

describe('Visito several sites', function () {
    it('Visit BackOffice', () => {
        // Faccio Login nella Dashboard 
        cy.visit('https://staging.shop-o-rama.it//admin/login')
        cy.url().should("include", "staging");

    })
})