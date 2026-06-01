describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de documuentos', () => {
    cy.entrarPaginaDocumentos();
    
  })


  it('Download em massa', () => {
    cy.dPDF();
    cy.dDOCX();
    cy.dEPUB();
    cy.dXLSX();
    cy.dPPTX();
    cy.dCSV();
    cy.dMarkdown();
    cy.dTXT();
  })






})