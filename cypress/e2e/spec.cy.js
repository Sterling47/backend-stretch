describe('Food Ingredients Search', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/foodnames', {
      fixture: 'example.json',
    }).as('getFood');
    
    cy.visit('http://127.0.0.1:5173/');
  });

  it('should load the homepage and display food items', () => {
    cy.wait('@getFood');
    cy.get('header').should('contain', 'Food Ingredients Search');

    cy.get('.card').should('have.length.greaterThan', 0);
  });

  