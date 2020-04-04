
describe("Prove cy.visit", function () {
    it("prova", function () {
        cy.visit('https://staging.shop-o-rama.it/admin/login', {
            auth: {
                email: 'luca@shop-o-rama.it',
                password: 'Banana'
            }
        });
    });

});