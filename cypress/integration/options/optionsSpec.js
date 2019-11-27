describe("optionsBar", function () {
  it("has a play button", function () {
      cy.visit('localhost:3000')
      cy.get('.option-bar').should('visible')
  })
})
