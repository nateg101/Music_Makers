describe('octaveSelector', function() {
  beforeEach(function() {
    cy.visit('/')
  })

  it('renders on the page', function() {
    cy.get('.octaves')
  })

  it('has 4 options', function() {
    cy.get('select').select('1')
    cy.get('select').select('3')
    cy.get('select').select('5')
    cy.get('select').select('7')
  })

  it('defaults to 3 sequencers', function() {
    let value = Cypress.$('select').val();
    expect(value).to.equal('3')

    cy.get('.sequencer-container').should('have.length', 3)
  })

  it('changes the number of sequencers', function() {
    cy.get('select').select('1')

    cy.get('.sequencer-container').should('have.length', 1)
  })
})
