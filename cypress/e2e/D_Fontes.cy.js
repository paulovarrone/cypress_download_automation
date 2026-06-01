describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de Fontes', () => {
    cy.entrarPaginaFontes();
    
  })


  it('Download em massa', () => {
    cy.dTTF();
    cy.dOTF();
    cy.dWOFF2();
  })






})