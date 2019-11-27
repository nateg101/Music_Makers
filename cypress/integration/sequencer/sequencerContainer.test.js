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
    let noteArray = ['B5','A5', 'G5','F5','E5','D5','C5','B4','A4','G4','F4','E4','D4','C4','B3','A3','G3','F3','E3','D3','C3']
    cy.get('.note-card').each((Card, index)=> {
    cy.wrap(Card).should('contain', noteArray[index])
    })
  })
})
