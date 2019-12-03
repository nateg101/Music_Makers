describe('SaveButton', function() {
  beforeEach(function() {
    cy.visit('/')
  })
  it('renders successfully', function() {
    cy.get('.save-button')
  })

  it('opens the Save Link overlay', function() {
    cy.get('.save-button').click()
    cy.get('.Modal-wrapper')
    cy.contains('Save your song!')
  })
})