#language: pt

Funcionalidade: comprar produto
Eu como cliente, quero comprar uma roupa
Para dar de presente a um parente

Contexto:
Dado que eu acesso o site da loja

Cenario: adicionar produto ao carrinho
E faço uma busca pelo "produto"
Quando adiciono ao carrinho de compras o primeiro produto encontrado
Entao confirmo se os dados do produto" adicionado estão corretos
E confirmo também se o produto está correto no carrinho de compras
E ao seguir para o checkout verifico se os dados do produtos estão corretos na listagem de produtos