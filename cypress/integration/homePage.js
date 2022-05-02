describe("renders home page",()=>{
  it('renders homepage correctly',()=>{
    cy.visit('/');
    cy.get('#latest-blocks').should('exist');
  })
  it('click on next button',()=>{
    cy.visit('/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-testid="increment-button"] > :nth-child(2)').click();
    /* ==== End Cypress Studio ==== */
  })
})

describe("View details of block chain",()=>{
  it('Go to view single blockchain page',()=>{
    cy.visit('/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > :nth-child(2) > a').click();
    /* ==== End Cypress Studio ==== */
  })
})

describe("View details of my blocks",()=>{
  it('Go to view my blocks page',()=>{
    cy.visit('/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#myBlocks').click();
    /* ==== End Cypress Studio ==== */
  })
})
