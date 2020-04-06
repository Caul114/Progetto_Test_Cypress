
describe("Prove cy.visit", function () {
    it("prova", function () {
        cy.visit("https://localhost:44338", {
            app: {
                Username: 'gianni',
                Password: 'prova1'
            }
        });
    });
});