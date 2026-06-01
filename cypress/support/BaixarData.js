Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaData', () => {
    cy.get('nav').find('a').contains('Data').click();
    cy.url().should('include', '/data');
})

Cypress.Commands.add('dJSON', () => { 
    cy.contains('a', 'View all JSON →').click();   
    for(let i = 0; i < 15; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');  
})

Cypress.Commands.add('dYAML', () => { 
    cy.get('#tab-1').click(); 
    cy.contains('a', 'View all YAML →').click();   
    for(let i = 0; i < 8; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');  
})

Cypress.Commands.add('dTOML', () => { 
    cy.get('#tab-2').click(); 
    cy.contains('a', 'View all TOML →').click();   
    for(let i = 0; i < 7; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');  
})

Cypress.Commands.add('dXML', () => { 
    cy.get('#tab-3').click(); 
    cy.contains('a', 'View all XML →').click();   
    for(let i = 0; i < 12; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');  
})

Cypress.Commands.add('dSQL', () => { 
    cy.get('#tab-4').click();
    cy.contains('a', 'View all SQL →').click();   
    for(let i = 0; i < 9; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');  
})

Cypress.Commands.add('dSQLite', () => { 
    cy.get('#tab-5').click();
    cy.contains('a', 'View all SQLite →').click();   
    for(let i = 0; i < 7; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');  
})

Cypress.Commands.add('dParquet', () => { 
    cy.get('#tab-6').click();
    cy.contains('a', 'View all Parquet →').click();   
    for(let i = 0; i < 8; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');  
})

Cypress.Commands.add('dLOG', () => { 
    cy.get('#tab-7').click();
    cy.contains('a', 'View all Log Files →').click();   
    for(let i = 0; i < 12; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');  
})

Cypress.Commands.add('dHTML', () => { 
    cy.get('#tab-8').click();
    cy.contains('a', 'View all HTML →').click();   
    for(let i = 0; i < 10; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');  
})