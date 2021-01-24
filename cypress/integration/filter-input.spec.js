import {  FRONTEND_URL } from '../../src/constant'

describe('Access Site', () => {
  it('access', () => {
    cy.visit(FRONTEND_URL);
  })
})

describe('Placeholder Control', () => {
  it('placeholder', () => {
    cy.get('[data-testid="input-search-tag"]').should('have.attr', 'placeholder', "Search Tag");
    cy.get('[data-testid="input-search-brand"]').should('have.attr', 'placeholder', "Search Brand");
  })
})