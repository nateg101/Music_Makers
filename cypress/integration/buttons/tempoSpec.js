describe("tempoChange", function () {
  it("it is visible in the options bar", function () {
      cy.visit('/')
      cy.get('.option-bar').should('visible')
      cy.get('.tempo-slider').should('visible')
      cy.get('.tempo-range').contains(120)
  })
})
