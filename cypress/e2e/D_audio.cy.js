describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de áudio', () => {
    cy.entrarPaginaAudio();
    
  })

  it('Entrar na página com todos os áudios', () => {
    cy.verTodosAudios();
    
  })

  it('Download em massa', () => {
    cy.massDownloadAUDIOS();
  })






})