describe('Altro sito', function() {
    it('Entrare nel sito', function() {
        cy.visit('https://docs.microsoft.com/it-it/dotnet/csharp/programming-guide/classes-and-structs/classes')

        cy.contains('Ereditarietà').click();

        cy.get('.tree-item ').click({force:true})
    })
})