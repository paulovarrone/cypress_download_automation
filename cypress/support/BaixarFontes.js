Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaFontes', () => {
    cy.get('nav').find('a').contains('Fonts').click();
    cy.url().should('include', '/fonts');
})

Cypress.Commands.add('verTodosFontes', () => {       
    cy.contains('a', 'View all TTF →').click();
})

Cypress.Commands.add('massDownloadFONTS', () => {    
    for(let i = 0; i < 5; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
})