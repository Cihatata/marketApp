describe('Filter inputs', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('placeholder', () => {
    cy.get('[data-testid="input-search-tag"]').should('have.attr', 'placeholder', "Search Tag");
    cy.get('[data-testid="input-search-brand"]').should('have.attr', 'placeholder', "Search Brand");
  })
  it('fill tag input', () => {
    const typedText = 'Wo'
    cy.get('[data-testid="input-search-tag"]')
    .type(typedText)
    .should('have.value', typedText);
    cy.get('[data-testid="products"]')
  })
  it('fill brand input', () => {
    const typedText = 'Low'
    cy.get('[data-testid="input-search-brand"]')
    .type(typedText)
    .should('have.value', typedText);
    cy.get('[data-testid="brand-label-wrapper"]')
    .children('label').find('input').should('have.attr', 'value', "Lowe-Wunsch-and-Stoltenberg");
    cy.get('[data-testid="brand-label-wrapper"]')
    .children('label').contains("Lowe, Wunsch and Stoltenberg");
  })
})