const produto = 'Faded Short Sleeve'
const valor = 16.51
const cor = 'Orange'
const tamanho = 'S'
const SKU = 'demo_1'
const produto2 = 'Printed'

before(() => {
    cy.clearCookies()
});


Given(/^que eu acesso o site da loja$/, () => {
	cy.visit('http://automationpractice.com/')
});

When(/^faço uma busca pelo "([^"]*)"$/, (args1) => {
    cy.searchProd(produto)
});

When(/^adiciono ao carrinho de compras o primeiro produto encontrado$/, () => {
	cy.addFirstProdCart(produto, cor, tamanho, valor)
});

Then(/^confirmo se os dados do produto" adicionado estão corretos$/, () => {
	cy.validateProdAdd(produto, cor, tamanho, valor)
});

Then(/^confirmo também se o produto está correto no carrinho de compras$/, () => {
	cy.validateProdCar(produto, cor, tamanho, valor)
});

Then(/^ao seguir para o checkout verifico se os dados do produtos estão corretos na listagem de produtos$/, () => {
	cy.goCheckout()
	
	cy.validateProdCheckout(produto, cor, tamanho, SKU, valor)
});
