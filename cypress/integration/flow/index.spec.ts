/// reference types="cypress"

describe('Flow', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Should create a pipe card', () => {
    cy.get('[data-id=pipe-card-95527]').should('be.visible') 
  })
  it('Should open modal detail', () => {
    cy.get('[data-id=pipe-card-95527]').click();
    cy.wait(2000)
    cy.get('[data-id=pipe-modal-95527]').should('be.visible') 
  })
})
