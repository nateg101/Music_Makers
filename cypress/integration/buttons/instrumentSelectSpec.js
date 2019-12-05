describe("instrumentSelect", function () {
  it("is visible in the Sequencer Header", function () {
      cy.visit('/')
      cy.get('.lead-container').should('visible')
      cy.get('.instrument-select').should('visible')
      cy.get(".instrument-select").contains('Electric Piano')
  })

  it("selects another instrument", function () {
      cy.visit('/')
      cy.get('.lead-container').should('visible')
      cy.get(".instrument-select").contains('Electric Piano')
      cy.get("#lead").find(".select-instrument-control").select('Glockenspiel')
      cy.get(".instrument-select").contains('Glockenspiel')
  })
})
