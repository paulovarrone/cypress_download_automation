Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaAudio', () => {
    cy.get('nav').find('a').contains('Audio').click();
    cy.url().should('include', '/audio');
})

Cypress.Commands.add('verTodosAudios', () => {       
    cy.contains('a', 'View all MP3 →').click();
})

Cypress.Commands.add('massDownloadAUDIOS', () => {    
    for(let i = 0; i < 13; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
})