/// reference types="cypress" />
import { faker } from '@faker-js/faker'


const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const companyName = faker.company.name();
const emailAddress = faker.internet.exampleEmail();
const zipCode = faker.location.zipCode();
const address = faker.location.streetAddress();
const orderMessage = faker.git.commitMessage();

describe('Checkout Process', () => {
  const tamanhotela = ['iphone-6', 'ipad-2', 'macbook-16', 'samsung-s10'];

  tamanhotela.forEach((tamanho) => {

    beforeEach(() => {

      cy.viewport(tamanho);
      cy.visit('https://automationpratice.com.br/checkout-one');

    });

    it(`Checkout completo com sucesso - ${tamanho}`, () => {

      cy.preencheFName(firstName);
      cy.preencheLName(lastName);
      cy.preencheCName(companyName);
      cy.preencheEmail(emailAddress);
      cy.selecionaPais(1);
      cy.selecionaCity(1);
      cy.preencheZip(zipCode);
      cy.preencheFAddress(address);
      cy.preencheMessages(orderMessage);
      cy.marcaTermos();
      cy.clicaBotaoContinuar1().should('have.text', "Save");
      cy.marcaPagamentoCSS();
      cy.clicaBotaoContinuar2();
      cy.validaOrderSuccess().should('be.visible');

    });

    it(`Checkout com falha - ${tamanho}`, () => {

      cy.preencheLName(lastName);
      cy.preencheCName(companyName);
      cy.preencheEmail(emailAddress);
      cy.selecionaPais(1);
      cy.selecionaCity(1);
      cy.preencheZip(zipCode);
      cy.preencheFAddress(address);
      cy.preencheMessages(orderMessage);
      cy.marcaTermos();
      cy.clicaBotaoContinuar1()
      cy.validaOrderFailure().should('have.text', "O campo First Name deve ser prenchido");

    })

    it(`Checkout com todos os campos vazios - ${tamanho}`, () => {

      cy.clicaBotaoContinuar1()
      cy.validaOrderFailure().should('be.visible');

    });
    it(`Checkout com email inválido - ${tamanho}`, () => {

      cy.preencheFName(firstName);
      cy.preencheLName(lastName);
      cy.preencheCName(companyName);
      cy.preencheEmail("emailinvalido");
      cy.selecionaPais(1);
      cy.selecionaCity(1);
      cy.preencheZip(zipCode);
      cy.preencheFAddress(address);
      cy.preencheMessages(orderMessage);
      cy.marcaTermos();
      cy.clicaBotaoContinuar1()
      cy.validaOrderFailure().should('have.text', "O campo E-mail deve ser prenchido ou é inválido");
      })
  });
});