describe('octaveSelector', function() {
  beforeEach(function() {
    cy.visit('/')
  })

  it('renders on the page', function() {
    cy.get('.octaves')
  })

  it('has 4 options', function() {
    cy.get('.octaves').find('select').select('1')
    cy.get('.octaves').find('select').select('3')
    cy.get('.octaves').find('select').select('5')
    cy.get('.octaves').find('select').select('7')
  })

  it('Page defaults to 3 sequencers', function() {
    cy.get('.piano-sequencer-wrapper').find('.sequencer-component').should('have.length', 3)
  })

  it('changes the number of sequencers', function() {
    cy.get('.octaves').find('select').select('1')

    cy.get('.piano-sequencer-wrapper').find('.sequencer-component').should('have.length', 1)
  })
})
