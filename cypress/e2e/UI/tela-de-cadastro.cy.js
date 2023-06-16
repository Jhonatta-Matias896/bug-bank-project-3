const elements = require ('../../support/Elements/global-elements').ELEMENTS
const faker = require ('faker-br')

describe('Teste na tela de cadastro', () => {
    before(() => {
        cy.visit('/')
    });
    it('Teste 01: Cadastro com sucesso', () => {
        cy.get(elements.btnCadastro).click()
        cy.get(elements.campoEmailCadastro).type(Cypress.env('email01'), {force:true})
        cy.get(elements.campoNomeCadastro).type(Cypress.env('usuario01'),{force:true})
        cy.get(elements.campoSenhaCadastro).type(Cypress.env('senhaUsuario'), {force:true})
        cy.get(elements.campoSenhaCadastroConfirmacao).type(Cypress.env('senhaUsuario'), {force:true})
        cy.get(elements.btnCriarContaComSaldo).click({force:true})
        cy.get(elements.btnCadastrar).click({force:true})
        cy.get(elements.alertaDecontaCriada).invoke('text').then((texto)=>{
            const NumeroDaConta= texto.match(/\d+-\d+/)[0];
            cy.get(elements.btnCloseAlertaDeContaCriada).click()
            cy.get(elements.campoEmailLogin).type(Cypress.env('email01'), {force:true})
            cy.get(elements.campoSenhaLogin).type(Cypress.env('senhaUsuario'), {force:true})
            cy.get(elements.btnAcessar).click()
            cy.contains(NumeroDaConta).should('be.visible')
        }) 
        //TESTE SEM A ASSERTIVA NO MOMENTO.
        // cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('teste@test.cim', {force:true})
        //     cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('N/12345', {force:true})
        //     cy.get('.otUnI').click()
        //     cy.get('#textName').invoke('text').should('contain', 'Aleatorio')
        //     cy.get('#textBalance > span').invoke('text').then((text)=>{
        //         const cleanText = text.replace(/[^\d.,'']/g,'')
        //         const saldo = parseFloat(cleanText.replace(',','.'))
        //         .should('contain', '1.000,00')

               
            

        //     })
                
    });
    
});