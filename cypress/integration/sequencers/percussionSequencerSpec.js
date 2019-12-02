describe('percussionSequencer', function() {
  it('renders the drum sequencer components', function() {
    cy.visit('/')
    cy.get('.drum-sequencer-wrapper')
    cy.get('.drum-sequencer-wrapper').get(`#nexus-ui-sequencer-1`)
  })
})