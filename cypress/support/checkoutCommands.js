Cypress.Commands.add('preencheFName', (fname) => {
   cy.get('#fname').type(fname);
})
Cypress.Commands.add('preencheLName', (lname) => {
    cy.get('#lname').type(lname);
})
Cypress.Commands.add('preencheCName', (cname) => {
    cy.get('#cname').type(cname);
})
Cypress.Commands.add('preencheEmail', (email) => {
    cy.get('#email').type(email);
})
Cypress.Commands.add('selecionaPais', (index) => {
    cy.get('#country').select(index);
})
Cypress.Commands.add('selecionaCity', (index) => {
    cy.get('#city').select(index);
})
Cypress.Commands.add('preencheZip', (zip) => {
    cy.get('#zip').type(zip);
})
Cypress.Commands.add('preencheFAddress', (faddress) => {
    cy.get('#faddress').type(faddress);
})
Cypress.Commands.add('preencheMessages', (message) => {
    cy.get('#messages').type(message);
})
Cypress.Commands.add('marcaTermos', () => {
    cy.get('#materialUnchecked').check();
});
Cypress.Commands.add('clicaBotaoContinuar1', () => {
    cy.get('.checkout-area-bg > .theme-btn-one').click();
});
Cypress.Commands.add('marcaPagamentoCSS', () => {
    cy.get('#css').check();
});
Cypress.Commands.add('clicaBotaoContinuar2', () => {
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click();
});
Cypress.Commands.add('validaOrderSuccess', () => {
    cy.get('h2').contains('Order success!');
});
Cypress.Commands.add('validaOrderFailure', () => {
    cy.get('#errorMessageFirstName').should('be.visible');
});

