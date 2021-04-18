///<reference types = "Cypress"/>


// Buscar o produto
//-------------------------------------------//-------------------------------------------/

Cypress.Commands.add('searchProd', (produto) => {
    cy.get('#search_query_top')
        .clear()
        .type(produto)
    
        cy.get('button[name="submit_search"]')
        .should('be.visible')
        .click({force:true})
})


// Adicionar o produto
//-------------------------------------------//-------------------------------------------/

Cypress.Commands.add('addFirstProdCart', () => {
    cy.get('.ajax_add_to_cart_button')
        .first()
        .click({force:true})
})

Cypress.Commands.add('goCheckout', () => {
    cy.get('#button_order_cart')
        .children()
        .click({force: true})
})  

Cypress.Commands.add('continueShop', () => {
    cy.get('[class*="continue"]')
        .click()
})


// Validar dados do produto adicionado
//-------------------------------------------//-------------------------------------------/

Cypress.Commands.add('validateProdAdd', (produto, cor, tamanho, valor) => {

    cy.get('[class*="layer_cart_product col"]')
        .should('be.contain', 'Product successfully added to your shopping cart')

    cy.get('#layer_cart_product_title')
        .should('be.contain', produto)

    cy.get('#layer_cart_product_quantity')
        .invoke('text')
        .should('be.equals', '1')

    cy.get('#layer_cart_product_attributes')
        .should('be.contain', cor + ', ' + tamanho)

    cy.get('#layer_cart_product_price')
        .should('be.contain', valor)
    
    cy.continueShop()

    })


Cypress.Commands.add('validateProdCar', (produto, cor, tamanho, valor) => {

    cy.get('[title="View my shopping cart"]')
        .trigger('mouseover')
    
    cy.get(`[class = "cart-images"] [alt*='${produto}']`)
        .should('be.exist')
        .as('prodCar')
    
    cy.get('@prodCar')
        .parentsUntil('[data-id*="cart_]')
        .should('be.contain', valor)
        .and('be.contain', cor + ', ' + tamanho)
})


// Validar dados do produto no checkout
//-------------------------------------------//-------------------------------------------/

Cypress.Commands.add('validateProdCheckout', (produto, cor, tamanho, SKU, valor) => {
    
    let urlProd
    let qtdProd
    
    cy.get('.cart_description')
        .contains(produto)
        .parentsUntil('.cart_item')
        .as('prodCheck')

    cy.get('@prodCheck')
        .should('be.contain', produto)
        .and('be.contain', 'SKU : ' + SKU)
        .and('be.contain', 'Color : ' + cor)
        .and('be.contain', 'Size : ' + tamanho)

    cy.get('@prodCheck')
        .siblings()
        .find('[class*="label"]')
        .should('be.contain', 'In stock')

    cy.get('@prodCheck')
        .siblings()
        .find('.price')
        .should('be.contain', valor)

    cy.get('@prodCheck')
        .children()
        .invoke('attr', 'href')
        .then(res => {
            urlProd = res
        })

    cy.get(`[class = "cart-images"] [alt*='${produto}']`)
        .parentsUntil('[data-id*="cart_]')
        .as('prodCar')
    
    cy.get('@prodCar')
        .find('.cart_block_product_name')
        .invoke('attr', 'href')
        .then(res => {
            expect(res).be.eq(urlProd)
        })

    cy.get('@prodCheck')
        .siblings()
        .find('[type="hidden"][name*="quantity"]')
        .invoke('attr', 'value')
        .then(res => {
            expect(res).to.have.equals('1')
            qtdProd = res
        })

    cy.get('[title="View my shopping cart"]')
        .children('.ajax_cart_quantity')
        .invoke('text')
        .then(res => {
            expect(res).to.be.equals(qtdProd)
        })

    cy.get('#summary_products_quantity')
    .invoke('text')
    .then(res => {
        expect(res).to.be.equals(qtdProd + ' Product')
    })
})