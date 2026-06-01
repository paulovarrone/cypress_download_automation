Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaFontes', () => {
    cy.get('nav').find('a').contains('Fonts').click();
    cy.url().should('include', '/fonts');
})


Cypress.Commands.add('dTTF', () => {  
    cy.contains('a', 'View all TTF →').click();  
    for(let i = 0; i < 5; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dOTF', () => {  
    cy.get('#tab-1').click();  
    cy.contains('a', 'View all OTF →').click(); 
    for(let i = 0; i < 5; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dWOFF2', () => {  
    cy.get('#tab-2').click();  
    cy.contains('a', 'View all WOFF2 →').click(); 
    for(let i = 0; i < 5; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})