///<reference types = "Cypress"/>

const produto = 'Faded Short Sleeve'
const valor = 16.51
const cor = 'Orange'
const tamanho = 'S'
const SKU = 'demo_1'
const produto2 = 'Printed'


before(() => {
    cy.visit('')
    cy.clearLocalStorage()
});

it('consulta dados', () => {
    cy.searchProd(produto)
    cy.addFirstProdCart(produto, cor, tamanho, valor)
    cy.validateProdAdd(produto, cor, tamanho, valor)
    cy.validateProdCar(produto, cor, tamanho, valor)
    cy.goCheckout()
    cy.validateProdCheckout(produto, cor, tamanho, SKU, valor)
});


