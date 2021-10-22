/// <reference path="../../support/index.d.ts" />

describe('Dropdown Test', () => {
  it('When clicked on the dropdown, it should show the options', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=dropdown-selected]').should('have.text', 'Lisbon').click();

    cy.get('[data-cy=dropdown-list]').children().should('have.length', 4);
  });
  it('When click on an option, it becomes the active option', () => {
    cy.get('[data-cy=dropdown-option-London]').click();
    cy.get('[data-cy=dropdown-selected]').should('have.text', 'London');
  });
});
