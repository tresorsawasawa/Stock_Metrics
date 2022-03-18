describe('Loading Symbols', () => {
  it('displays the symbol in the list', () => {
    cy.visit('/');
    cy.contains('SPY');
    cy.contains('SPDR S&P 500 ETF Trust');
    cy.get('*[class^="symbol-price"]');
  });
});
