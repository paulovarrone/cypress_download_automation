describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de videos', () => {
    cy.entrarPaginaVideos();
    
  })

  it('Entrar na página de todos os videos', () => {
    cy.verTodosVideos();
    
  })

  it('Download em massa', () => {
    cy.massDownloadVIDEOS();
  })






})