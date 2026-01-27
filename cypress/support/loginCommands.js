

Cypress.Commands.add('preencheLogin', (email) => {
    cy.get('#user').type(email)
})
Cypress.Commands.add('preencheSenha', (senha) => {
    cy.get('#password').type(senha)
})
Cypress.Commands.add('botaoLogin', () => {
    cy.get('#btnLogin').click()
})
Cypress.Commands.add('validaLogin', () => {
    cy.get('.swal2-confirm')
        .should('be.visible')
})
Cypress.Commands.add('validaLoginInvalido', () => {
    cy.get('.invalid_input')
        .should('be.visible');
})