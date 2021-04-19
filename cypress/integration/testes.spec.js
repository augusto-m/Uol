///<reference types = "Cypress"/>

import prod from '../fixtures/produtos.json'

before(() => {
    cy.visit('')
    cy.clearLocalStorage()
});

it('consulta dados', () => {
    cy.searchProd(prod.nome)
    cy.addFirstProdCart(prod.nome, prod.cor, prod.tamanho, prod.valor)
    cy.validateProdAdd(prod.nome, prod.cor, prod.tamanho, prod.valor)
    cy.validateProdCar(prod.nome, prod.cor, prod.tamanho, prod.valor)
    cy.goCheckout()
    cy.validateProdCheckout(prod.nome, prod.cor, prod.tamanho, prod.SKU, prod.valor)
});


