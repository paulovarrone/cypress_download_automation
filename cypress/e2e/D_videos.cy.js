describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de videos', () => {
    cy.entrarPaginaVideos();
    
  })


  it('Download em massa', () => {
    cy.dMP4();
    cy.dMKV();
    cy.dMOV();
    cy.dAVI();
    cy.dWebM();
  })






})