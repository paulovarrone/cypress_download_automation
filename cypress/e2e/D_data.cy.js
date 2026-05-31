describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de data', () => {
    cy.entrarPaginaData();
    
  })

  it('Entrar na página com todos os data', () => {
    cy.verTodosData();
    
  })

  it('Download em massa', () => {
    cy.massDownloadDATA();
  })






})