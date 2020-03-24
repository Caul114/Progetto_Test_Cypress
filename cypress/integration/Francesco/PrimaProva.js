describe("HomePage", function () {
    it("Visit HomePage - it successfully loads", function () {
        cy.visit("/")
        cy.wait(2000);
    })

});