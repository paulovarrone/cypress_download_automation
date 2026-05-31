Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaImages', () => {
    cy.get('nav').find('a').contains('Images').click();
    cy.url().should('include', '/images');
})

Cypress.Commands.add('verTodasImagens', () => {       
    cy.contains('a', 'View all JPG / JPEG →').click();
})

Cypress.Commands.add('massDownloadIMGS', () => {    
    for(let i = 0; i < 15; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
})