describe('Route', () => {
  it('navigate to the companie profile trought the link', () => {
    cy.visit('/');
    cy.contains('SPY');
    cy.get('[data-testid="SPY"]').click();
    cy.contains('SPY');
  });

  it('navigate directly to the companie profile', () => {
    cy.visit('/company/spy');
    cy.contains('SPY');
  });
});
