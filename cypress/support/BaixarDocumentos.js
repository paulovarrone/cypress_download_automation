Cypress.Commands.add('visitarPaginaInicial', () => {
    cy.visit('/');
    cy.contains('h1','Free sample files, true to size').should('be.visible');
})

Cypress.Commands.add('entrarPaginaDocumentos', () => {
    cy.get('nav').find('a').contains('Documents').click();
    cy.url().should('include', '/documents');
})

Cypress.Commands.add('dPDF', () => {   
    cy.contains('a', 'View all PDF →').click(); 
    for(let i = 0; i < 15; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    } 
    cy.go('back');  
})

Cypress.Commands.add('dDOCX', () => {  
    cy.get('#tab-1').click();  
    cy.contains('a', 'View all DOCX →').click(); 
    for(let i = 0; i < 14; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dEPUB', () => {  
    cy.get('#tab-2').click();  
    cy.contains('a', 'View all EPUB →').click(); 
    for(let i = 0; i < 7; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dXLSX', () => {  
    cy.get('#tab-3').click();  
    cy.contains('a', 'View all XLSX →').click(); 
    for(let i = 0; i < 14; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dPPTX', () => {  
    cy.get('#tab-4').click();  
    cy.contains('a', 'View all PPTX →').click(); 
    for(let i = 0; i < 7; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dCSV', () => {  
    cy.get('#tab-5').click();  
    cy.contains('a', 'View all CSV →').click(); 
    for(let i = 0; i < 13; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dMarkdown', () => {  
    cy.get('#tab-6').click();  
    cy.contains('a', 'View all Markdown →').click(); 
    for(let i = 0; i < 8; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})

Cypress.Commands.add('dTXT', () => {  
    cy.get('#tab-7').click();  
    cy.contains('a', 'View all TXT →').click(); 
    for(let i = 0; i < 9; i++) {
        cy.get('.mt-auto.flex.gap-2.pt-5').eq(`${i}`).find('a').contains('Download').click(); 
    }   
    cy.go('back');
})