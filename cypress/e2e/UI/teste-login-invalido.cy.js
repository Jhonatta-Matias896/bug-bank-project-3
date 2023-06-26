const elements = require('../../support/Elements/global-elements').ELEMENTS

describe('Login inválido', () => {
    before(() => {
        cy.visit('/')
    });
    it.only('Teste 01: Email sem o @', () => {

        const msg = 'Inclua um "@" no endereço de e-mail."'
        const msg2 = '" está com um "@" faltando.'

        cy.get(elements.campoEmailLogin).type(Cypress.env('emailSem@'), { force: true })
        cy.get(elements.campoSenhaLogin).type(Cypress.env('senhaUsuario'), { force: true })
        cy.get(elements.btnAcessar).click()
        cy.get('.kOeYBn > .input__warging').should('be.visible')
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0').should('exist', `${msg + Cypress.env('emailSem@') + msg2}}`)
        


    });

});

