describe('Food Ingredients Search', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/foodnames', {
      fixture: 'example.json',
    }).as('getFood');
    
    cy.visit('http://localhost:5173/');
  });

  it('should load the homepage and display food items', () => {
    cy.wait('@getFood');
    cy.get('header').should('contain', 'Food Ingredients Search');

    cy.get('.card').should('have.length.greaterThan', 0);
  });

  it('should search for food items', () => {
    cy.wait('@getFood');

    cy.get('input[type="text"]').type('apple');
    cy.get('button').click();

  
    cy.get('.card').each(($el) => {
      cy.wrap($el).should('contain', 'apple');
    });
  });

  it('should navigate to the detail page', () => {
    cy.wait('@getFood')
    cy.get('.card').first().click();
    cy.url().should('include', '/detail/1');
    cy.get('h2').should('contain', 'Detailpage');
    cy.get('p').eq(0).should('contain', '1');
    cy.get('p').eq(1).should('contain', 'Brand A');  
    cy.get('p').eq(2).should('contain', 'apple'); 
    cy.get('p').eq(3).should('contain', '100'); 
  });



})

