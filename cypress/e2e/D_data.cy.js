describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de data', () => {
    cy.entrarPaginaData();
    
  })

  it('Download em massa', () => {
    cy.dJSON();
    cy.dYAML();
    cy.dTOML();
    cy.dXML();
    cy.dSQL();
    cy.dSQLite();
    cy.dParquet();
    cy.dLOG();
    cy.dHTML();
  })






})