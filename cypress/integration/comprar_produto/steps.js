import prod from '../../fixtures/produtos.json'


before(() => {
    cy.clearCookies()
});


Given(/^que eu acesso o site da loja$/, () => {
	cy.visit('http://automationpractice.com/')
});

When(/^faço uma busca pelo "([^"]*)"$/, (args1) => {
    cy.searchProd(prod.nome)
});

When(/^adiciono ao carrinho de compras o primeiro produto encontrado$/, () => {
	cy.addFirstProdCart(prod.nome, prod.cor, prod.tamanho, prod.valor)
});

Then(/^confirmo se os dados do produto" adicionado estão corretos$/, () => {
	cy.validateProdAdd(prod.nome, prod.cor, prod.tamanho, prod.valor)
});

Then(/^confirmo também se o produto está correto no carrinho de compras$/, () => {
	cy.validateProdCar(prod.nome, prod.cor, prod.tamanho, prod.valor)
});

Then(/^ao seguir para o checkout verifico se os dados do produtos estão corretos na listagem de produtos$/, () => {
	cy.goCheckout()
	
	cy.validateProdCheckout(prod.nome, prod.cor, prod.tamanho, prod.SKU, prod.valor)
});
