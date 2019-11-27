describe('SequencerContainer', function() {
  it('renders the sequencer grid', function() {
    cy.visit('/')
    cy.get('.sequencer-container')
    let i = 1
    for (i; i < 8; ++i) {
      cy.get(`#nexus-ui-sequencer-${i}`)
    }
  })

  it('displays the notes of an octave in the correct order', function() {
    cy.visit('/')
    let noteArray = ['B','A','G','F','E','D','C']
    cy.get('.sequencer-container').first( function() {
      cy.get('.card').each((Card, index)=> {
        cy.wrap(Card).should('contain', noteArray[index])
      })
    })
  })
})
