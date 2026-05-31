describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de imagens', () => {
    cy.entrarPaginaImages();
    
  })

  it('Entrar na página com todos as imagens', () => {
    cy.verTodasImagens();
    
  })

  it('Download em massa', () => {
    cy.massDownloadIMGS();
  })






})