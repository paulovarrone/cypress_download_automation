describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de fotos', () => {
    cy.entrarPaginaDocumentos();
    
  })

  it('Entrar na página do editor', () => {
    cy.verTodosDocumentos();
    
  })

  it('Download em massa', () => {
    cy.massDownloadDOCS();
  })






})