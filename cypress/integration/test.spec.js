import { API_URL } from '../../src/constant'

describe('Filter inputs', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.request(`${API_URL}/products`)
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

  it('get products fetch request ', () => {
    cy.request(`${API_URL}/products?slug=Rustic-Beach-Mug`)
      .then((response) => {
        expect(response.body[0]).to.have.property('slug', 'Rustic-Beach-Mug') // true
      })
  })
  it('add to basket', () => {
    cy.get('[data-testid="products"]').children('article').first().find('button').click()
    cy.get('[data-testid="basket-item-0"]').find('button').first().next().contains(1)
  })
  it('increase product number', () => {
    cy.get('[data-testid="products"]').children('article').first().find('button').click()
    cy.get('[data-testid="basket-item-0"]').find('button').first().next().next().click()
    cy.get('[data-testid="basket-item-0"]').find('button').first().next().contains(2)
  })
  it('decrease product number', () => {
    cy.get('[data-testid="products"]').children('article').first().find('button').click()
    cy.get('[data-testid="basket-item-0"]').find('button').first().click()
  })

})