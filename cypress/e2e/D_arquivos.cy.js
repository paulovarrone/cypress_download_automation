describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de arquivos', () => {
    cy.entrarPaginaArquivos();
    
  })

  it('Download em massa', () => {
    cy.dZIP();
    cy.dTARGZ();
    cy.dTARBZ2();
    cy.dRAR();
    cy.d7Z();
  })






})