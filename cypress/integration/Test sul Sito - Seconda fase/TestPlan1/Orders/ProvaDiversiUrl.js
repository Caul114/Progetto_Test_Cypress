describe('Visito several sites', function () {
    it("Visit localhost", function () {
        cy.visit("http://localhost:3005/"); // url da visitare
        cy.url().should("include", "localhost:3005");
    });
    it('Visit Google', () => {
        // Faccio Login nella Dashboard 
        cy.visit('https:/www.google.com')
        cy.wait(10000);
    })
    it('Visit BackOffice', () => {
        // Faccio Login nella Dashboard 
        cy.visit('https://staging.shop-o-rama.it//admin/login')
    })
})