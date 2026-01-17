///reference types="cypress" />

describe('Comandos Basicos', () => {

    it('abrir uma url', () => {
        cy.visit('https://automationpratice.com.br/')
    })

    it('encontrar um elemento', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user')
        cy.get('.mc-form').contains('Mail')
    })

    it('preencher um campo', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('vertin@gmail.com')
    })

    it('clicar em um elemento', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#btnLogin').click()
    })

    it('select', () => {
        cy.visit('https://automationpratice.com.br/checkout-one')
        cy.get('#country').select('usa')
        cy.get('#country').select(1)
    })

    it('Checkbox e radio button', () => {
        cy.visit('https://automationpratice.com.br/checkout-one')
        cy.get('#materialUnchecked').click()
        //cy.get('#materialUnchecked').check()
        //cy.get('#materialUnchecked').uncheck()
        cy.get('#css').check()
    })

    it('Validação de teste', () => {
        cy.visit('https://automationpratice.com.br/login') 
        cy.get('#user').should('be.visible')

    })
})