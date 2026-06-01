describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de áudio', () => {
    cy.entrarPaginaAudio();
    
  })


  it('Download em massa', () => {
    cy.dMP3();
    cy.dWAV();
    cy.dFLAC();
    cy.dAAC();
    cy.dOGG();
  })






})