
describe("Prove cy.request", function () {
    it("prova", function () {
        cy.visit("https://localhost:44338", {

        });
        // cy.get('a[id=google]').click();

        cy.get('#google').then((google) => {
            // pull off the fully qualified href from the <a>
            const url = google.prop('href')

            // make a cy.request to it
            cy.request(url).its('body').should('include', '</html>')
        })
    });
});