describe("instrumentSelect", function () {
  it("it is visible in the Sequencer Header", function () {
      cy.visit('/')
      cy.get('.piano-sequencer-wrapper').should('visible')
      cy.get('.instrument-select').should('visible')
      cy.get(".instrument-select").contains('Electric Piano')
  })

  it("selects another instrument", function () {
      cy.visit('/')
      cy.get('.option-bar').should('visible')
      cy.get('.instrument-selector').should('visible')
      cy.get(".instrument-selector").contains('Piano')
      cy.get(".instruments").select('Glockenspiel')
      cy.get(".instrument-selector").contains('Glockenspiel')
  })
})
