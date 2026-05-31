describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de Fontes', () => {
    cy.entrarPaginaFontes();
    
  })

  it('Entrar na página com todos os fontes', () => {
    cy.verTodosFontes();
    
  })

  it('Download em massa', () => {
    cy.massDownloadFONTS();
  })






})