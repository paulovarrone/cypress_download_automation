Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaAudio', () => {
    cy.get('nav').find('a').contains('Audio').click();
    cy.url().should('include', '/audio');
})

Cypress.Commands.add('dMP3', () => {  
    cy.contains('a', 'View all MP3 →').click();  
    for(let i = 0; i < 13; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dWAV', () => {  
    cy.get('#tab-1').click();
    cy.contains('a', 'View all WAV →').click();  
    for(let i = 0; i < 9; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }
    cy.go('back');   
})

Cypress.Commands.add('dFLAC', () => {  
    cy.get('#tab-2').click();  
    cy.contains('a', 'View all FLAC →').click(); 
    for(let i = 0; i < 7; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dAAC', () => {  
    cy.get('#tab-3').click();  
    cy.contains('a', 'View all AAC →').click(); 
    for(let i = 0; i < 3; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dOGG', () => {  
    cy.get('#tab-4').click();  
    cy.contains('a', 'View all OGG →').click(); 
    for(let i = 0; i < 3; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})
