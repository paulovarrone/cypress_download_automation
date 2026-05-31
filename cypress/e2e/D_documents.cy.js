describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de documuentos', () => {
    cy.entrarPaginaDocumentos();
    
  })

  it('Entrar na página com todos os documentos', () => {
    cy.verTodosDocumentos();
    
  })

  it('Download em massa', () => {
    cy.massDownloadDOCS();
  })






})