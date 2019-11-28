describe("instrumentSelect", function () {
  it("it is visible in the options bar", function () {
      cy.visit('/')
      cy.get('.option-bar').should('visible')
      cy.get('.instrument-selector').should('visible')
      cy.get(".instrument-selector").contains('Piano')
  })

})
