describe('SequencerContainer', function() {
  it('renders the sequencer grid', function() {
    cy.visit('/')
    cy.get('.sequencer-container')
    cy.get('#nexus-ui-sequencer-1')
    cy.get('.sequencer-container').find('rect').should('have.length', 256)
  })
})