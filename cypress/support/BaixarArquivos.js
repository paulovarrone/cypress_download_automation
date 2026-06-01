Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaArquivos', () => {
    cy.get('nav').find('a').contains('Archives').click();
    cy.url().should('include', '/archives');
})


Cypress.Commands.add('dZIP', () => {  
    cy.contains('a', 'View all ZIP →').click();  
    for(let i = 0; i < 14; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})


Cypress.Commands.add('dTARGZ', () => {  
    cy.get('#tab-1').click();
    cy.contains('a', 'View all TAR.GZ →').click();  
    for(let i = 0; i < 7; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }
    cy.go('back');   
})

Cypress.Commands.add('dTARBZ2', () => {  
    cy.get('#tab-2').click();
    cy.contains('a', 'View all TAR.BZ2 →').click();  
    for(let i = 0; i < 7; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }
    cy.go('back');   
})

Cypress.Commands.add('dRAR', () => {  
    cy.get('#tab-3').click();
    cy.contains('a', 'View all RAR →').click();  
    for(let i = 0; i < 7; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }
    cy.go('back');   
})

Cypress.Commands.add('d7Z', () => {  
    cy.get('#tab-4').click();
    cy.contains('a', 'View all 7Z →').click();  
    for(let i = 0; i < 3; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }
    cy.go('back');   
})