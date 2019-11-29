describe("instrumentSelect", function () {
  it("it is visible in the options bar", function () {
      cy.visit('/')
      cy.get('.option-bar').should('visible')
      cy.get('.instrument-selector').should('visible')
      cy.get(".instrument-selector").contains('Piano')
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
