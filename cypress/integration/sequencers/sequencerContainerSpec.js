describe('SequencerContainer', function() {
  describe('render piano sequencer', function() {
    it('renders the piano sequencer', function() {
      cy.visit('/')
      cy.wait(4000)
      cy.get('.sequencer-component')
      let i = 1
      for (i; i < 3; ++i) {
        cy.get(`#nexus-ui-sequencer-${i}`)
      }
    })
  
    it('displays the notes of an octave in the correct order', function() {
      cy.visit('/')
      cy.wait(4000)
      let noteArray = ['B5','A5', 'G5','F5','E5','D5','C5','B4','A4','G4','F4','E4','D4','C4','B3','A3','G3','F3','E3','D3','C3']
      cy.get('.piano-sequencer-wrapper').find('.note-card').each((Card, index)=> {
        cy.wrap(Card).should('contain', noteArray[index])
      })
    })

    it('collapses correctly', function() {
      cy.get('.piano-sequencer-wrapper').find('.title').should('have.class', 'is-expanded')
      cy.get('.piano-sequencer-wrapper').find('.title').click()
      cy.get('.piano-sequencer-wrapper').find('.title').should('not.have.class', 'is-expanded')
      cy.get('.drum-sequencer-wrapper').find('.title').should('have.class', 'is-expanded')
    })
  })



  it('renders the drum sequencer components', function() {
    cy.visit('/')
    cy.wait(4000)
    cy.get('.drum-sequencer-wrapper')
    cy.get('.drum-sequencer-wrapper').get(`#nexus-ui-sequencer-1`)
  })

  it('collapses correctly', function() {
    cy.get('.drum-sequencer-wrapper').find('.title').should('have.class', 'is-expanded')
    cy.get('.drum-sequencer-wrapper').find('.title').click()
    cy.get('.drum-sequencer-wrapper').find('.title').should('not.have.class', 'is-expanded')
    cy.get('.piano-sequencer-wrapper').find('.title').should('have.class', 'is-expanded')
  })
})
