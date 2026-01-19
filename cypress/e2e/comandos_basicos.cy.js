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

    it('Validação de texto', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#createAccount')
            .should('be.visible')
            .should('contain', 'Ainda não tem conta?')
    })
    it('Login Válido', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('vertin@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.swal2-confirm')
            .should('be.visible')
    })

    it('Login Inválido', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').click();
        cy.get('#user').type('vertin123@hotmail.com');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('be.visible');
    });

it('Login sem Senha',() => {
    cy.visit('https://automationpratice.com.br/login')
    
    cy.get('#user').click();
    cy.get('#user').type('euller!gmail.com');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('be.visible'); 
});

})