describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de arquivos', () => {
    cy.entrarPaginaArquivos();
    
  })

  it('Entrar na página com todos os arquivos', () => {
    cy.verTodosArquivos();
    
  })

  it('Download em massa', () => {
    cy.massDownloadARCHIVES();
  })






})