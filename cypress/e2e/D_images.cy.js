describe('template spec', () => {

  it('Visitar página inicial', () => {
    cy.visitarPaginaInicial();
  })

  it('Entrar na página de imagens', () => {
    cy.entrarPaginaImages();
    
  })

  it('Download em massa', () => {  
    cy.baixarJPG();
    cy.baixarPNG();
    cy.baixarSVG();
    cy.baixarWebP();
    cy.baixarAVIF();
    cy.baixarHeic();
    cy.baixarGIF();
    cy.baixarTIFF();
    cy.baixarBMP();
    cy.baixarICO();
  })






})