describe("optionsBar", function () {
  it("has a play button", function () {
      cy.visit('localhost:3000')
      cy.get('.optionsBar').should('visible')
      cy.get('.play-button').should('visible')
  })
})
