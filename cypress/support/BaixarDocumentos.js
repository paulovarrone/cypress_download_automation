Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaDocumentos', () => {
    cy.get('nav').find('a').contains('Documents').click();
    cy.url().should('include', '/documents');
})

Cypress.Commands.add('verTodosDocumentos', () => {       
    cy.contains('a', 'View all PDF →').click();
})

Cypress.Commands.add('massDownloadDOCS', () => {    
    for(let i = 0; i < 15; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
})