describe("instrumentSelect", function () {
  it("is visible in the Sequencer Header", function () {
      cy.visit('/')
      cy.wait(2000)
      cy.get('.piano-sequencer-wrapper').should('visible')
      cy.get('.instrument-select').should('visible')
      cy.get(".instrument-select").contains('Electric Piano')
  })

  it("selects another instrument", function () {
      cy.visit('/')
      cy.get('.piano-sequencer-wrapper').should('visible')
      cy.get('.instrument-select').should('visible')
      cy.get(".instrument-select").contains('Electric Piano')
      cy.get(".select-instrument-control").select('Glockenspiel')
      cy.get(".instrument-select").contains('Glockenspiel')
  })
})
