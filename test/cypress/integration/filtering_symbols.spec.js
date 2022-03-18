describe('Filtring Symbols', () => {
  it('Displays the symbol in the list', () => {
    cy.visit('/');
    cy.contains('SPY');
    cy.contains('SPDR S&P 500 ETF Trust');
    cy.get('*[class^="symbol-price"]');

    cy.contains('SPY');
    cy.contains('SIRI');
    cy.contains('KMI');

    cy.get('[data-testid="inputSymbol"]').type('S');
    cy.get('[data-testid="seachSymbol"]').click();

    cy.contains('SPY');
    cy.contains('SIRI');
    cy.contains('KMI').should('not.exist');
    cy.contains('Not found').should('not.exist');

    cy.get('[data-testid="inputSymbol"]').type('i');
    cy.get('[data-testid="seachSymbol"]').click();

    cy.contains('SPY').should('not.exist');
    cy.contains('SIRI');
    cy.contains('KMI').should('not.exist');

    cy.get('[data-testid="inputSymbol"]').type('ri');
    cy.get('[data-testid="seachSymbol"]').click();

    cy.contains('SPY').should('not.exist');
    cy.contains('SIRI');
    cy.contains('KMI').should('not.exist');

    cy.get('[data-testid="inputSymbol"]').type('i');
    cy.get('[data-testid="seachSymbol"]').click();

    cy.contains('SPY').should('not.exist');
    cy.contains('SIRI').should('not.exist');
    cy.contains('KMI').should('not.exist');
    cy.contains("CAN'T FIND THAT COMPANY");
  });
});
