describe('Loading Company Profile', () => {
  it('displays the company details', () => {
    cy.visit('/company/spy');
    cy.contains('SPY');
    cy.contains('SPDR S&P 500 ETF Trust');
    cy.contains('USD');
    cy.get('*[class^="profile-currency"]');
    cy.get('*[class^="company-attribute"]');
    cy.get('*[class^="profile-image"]');
    cy.get('*[class^="profile-companyName"]');
  });
});
