describe('Food Ingredients Search', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/foodnames', {
      fixture: 'example.json',
    }).as('getFood');
    
    cy.visit('http://127.0.0.1:5173/');
  });

