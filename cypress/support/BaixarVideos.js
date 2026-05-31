Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaVideos', () => {
    cy.get('nav').find('a').contains('Video').click();
    cy.url().should('include', '/video');
})

Cypress.Commands.add('verTodosVideos', () => {       
    cy.contains('a', 'View all MP4 →').click();
})

Cypress.Commands.add('massDownloadVIDEOS', () => {    
    for(let i = 0; i < 15; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
})