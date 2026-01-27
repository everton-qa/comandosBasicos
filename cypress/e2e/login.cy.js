/// reference types="cypress" />
import { faker } from '@faker-js/faker';

const email = faker.internet.email()
const senha = faker.internet.password()

describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/login')
    })

    it('Login Válido', () => {

        cy.preencheLogin(email)
        cy.preencheSenha(senha)
        cy.botaoLogin()
        cy.validaLogin()
    })

    it('Login Inválido', () => {

        cy.preencheLogin(email)
        cy.botaoLogin()
        cy.validaLoginInvalido()
    });

    it('Login sem Senha', () => {

        cy.preencheLogin(email)
        cy.botaoLogin()
        cy.validaLoginInvalido()
    });
    it('Login sem Email', () => {

        cy.preencheSenha(senha)
        cy.botaoLogin()
        cy.validaLoginInvalido()
    })
    it('Login sem Email e Senha', () => {

        cy.botaoLogin()
        cy.validaLoginInvalido()
    })
    it('Login com Email inválido', () => {
        cy.preencheLogin('cytest');
        cy.preencheSenha(senha);
        cy.botaoLogin()
        cy.validaLoginInvalido()
    })
    it('Login com Senha inválida', () => {

        cy.preencheLogin(email);
        cy.preencheSenha(faker.internet.password(({length: 3})));
        cy.botaoLogin()
        cy.validaLoginInvalido()
    })
})
