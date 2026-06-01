Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaImages', () => {
    cy.get('nav').find('a').contains('Images').click();
    cy.url().should('include', '/images');
})

Cypress.Commands.add('baixarJPG', () => {       
    cy.contains('a', 'View all JPG / JPEG →').click();
    for(let i = 0; i < 15; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');
})

Cypress.Commands.add('baixarPNG', () => {    
   cy.get('#tab-1').click(); 
   cy.contains('a', 'View all PNG →').click();
    for(let i = 0; i < 16; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');   
})

Cypress.Commands.add('baixarSVG', () => {    
   cy.get('#tab-2').click(); 
   cy.contains('a', 'View all SVG →').click();
    for(let i = 0; i < 11; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');   
})

Cypress.Commands.add('baixarWebP', () => {    
   cy.get('#tab-3').click(); 
   cy.contains('a', 'View all WebP →').click();
    for(let i = 0; i < 6; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');   
})

Cypress.Commands.add('baixarAVIF', () => {    
   cy.get('#tab-4').click(); 
   cy.contains('a', 'View all AVIF →').click();
    for(let i = 0; i < 6; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');   
})

Cypress.Commands.add('baixarHeic', () => {    
   cy.get('#tab-5').click();
   cy.contains('a', 'View all HEIC →').click();
    for(let i = 0; i < 5; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');   
})

Cypress.Commands.add('baixarGIF', () => {    
   cy.get('#tab-6').click(); 
   cy.contains('a', 'View all GIF →').click();
    for(let i = 0; i < 6; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');   
})

Cypress.Commands.add('baixarTIFF', () => {    
   cy.get('#tab-7').click();
   cy.contains('a', 'View all TIFF →').click();
    for(let i = 0; i < 4; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');   
})

Cypress.Commands.add('baixarBMP', () => {    
   cy.get('#tab-8').click();
   cy.contains('a', 'View all BMP →').click();
    for(let i = 0; i < 4; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');   
})

Cypress.Commands.add('baixarICO', () => {    
   cy.get('#tab-9').click();
   cy.contains('a', 'View all ICO →').click();
    for(let i = 0; i < 5; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');   
})