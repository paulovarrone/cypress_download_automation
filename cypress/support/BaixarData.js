Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaData', () => {
    cy.get('nav').find('a').contains('Data').click();
    cy.url().should('include', '/data');
})

Cypress.Commands.add('verTodosData', () => {       
    cy.contains('a', 'View all JSON →').click();
})

Cypress.Commands.add('massDownloadDATA', () => {    
    for(let i = 0; i < 15; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
})