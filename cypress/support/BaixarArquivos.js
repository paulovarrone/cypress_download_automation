Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaArquivos', () => {
    cy.get('nav').find('a').contains('Archives').click();
    cy.url().should('include', '/archives');
})

Cypress.Commands.add('verTodosArquivos', () => {       
    cy.contains('a', 'View all ZIP →').click();
})

Cypress.Commands.add('massDownloadARCHIVES', () => {    
    for(let i = 0; i < 14; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
})