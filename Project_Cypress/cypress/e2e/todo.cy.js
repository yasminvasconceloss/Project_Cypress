
context('TodoMVC', () => {
    it('Adicionar nova tarefa', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        

       cy.get('input.new-todo')
        .type('Dormir')
        .type('{enter}')

    // asserção: validação/garantia 
        cy.get('ul.todo-list li').should('have.length', 1)

    });


});

