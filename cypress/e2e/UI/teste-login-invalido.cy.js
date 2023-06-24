const elements = require ('../../support/Elements/global-elements').ELEMENTS

describe('', () => {
    before(() => {
        cy.visit('/')
    });
    it.only('', () => {
        const msg = 'Inclua um "@" no endereço de e-mail.'
        const msg2= ' está com um "@" faltando.'
        cy.get(elements.campoEmailLogin).type(Cypress.env('emailSem@'), {force:true})
        cy.get(elements.campoSenhaLogin).type(Cypress.env('senhaUsuario'), {force:true})
        cy.get(elements.btnAcessar).click()
        cy.get('.kOeYBn > .input__warging').should('contain', 'Formato inválido')
        cy.get('.kOeYBn > .input__default').trigger('focus')
        .then(() => {
            cy.get('.kOeYBn > .input__default').invoke('show').should('be.visible').and('contain', msg)


          
        });
      
        
        
    });
    
});

//Inclua um "@" no endereço de e-mail.`${Cypress.env('emailSem@')} está com um "@" faltando.`

// `${msg + ' '+ Cypress.env('emailSem@') + msg2}}`