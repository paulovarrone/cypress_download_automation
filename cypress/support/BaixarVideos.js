Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaVideos', () => {
    cy.get('nav').find('a').contains('Video').click();
    cy.url().should('include', '/video');
})


Cypress.Commands.add('dMP4', () => {  
    cy.contains('a', 'View all MP4 →').click();  
    for(let i = 0; i < 15; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }
    cy.go('back');   
})

Cypress.Commands.add('dMKV', () => {  
    cy.get('#tab-1').click();  
    cy.contains('a', 'View all MKV →').click(); 
    for(let i = 0; i < 10; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dMOV', () => {  
    cy.get('#tab-2').click();  
    cy.contains('a', 'View all MOV →').click(); 
    for(let i = 0; i < 4; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dAVI', () => {  
    cy.get('#tab-3').click();  
    cy.contains('a', 'View all AVI →').click(); 
    for(let i = 0; i < 4; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dWebM', () => {  
    cy.get('#tab-3').click();  
    cy.contains('a', 'View all WebM →').click(); 
    for(let i = 0; i < 4; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

