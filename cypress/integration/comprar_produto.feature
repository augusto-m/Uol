Feature: comprar produto
Eu como cliente, quero comprar uma roupa
Para dar de presente a um parente

Background: Background name: adicionar produto ao carrinho de compras
Given que eu acesso o site da loja

Scenario: adicionar produto ao carrinho
And faço uma busca pelo "produto"
When adiciono ao carrinho de compras o primeiro produto encontrado
Then confirmo se os dados do produto" adicionado estão corretos
And confirmo também se o produto está correto no carrinho de compras
And ao seguir para o checkout verifico se os dados do produtos estão corretos na listagem de produtos