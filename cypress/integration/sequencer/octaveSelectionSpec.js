describe('octaveSelector', function() {
  it('renders on the page', function() {
    cy.visit('/')
    cy.get('.octaves')
  })
})