describe("optionsBar", function () {
  it("has a play button", function () {
      cy.visit('/')
      cy.get('.option-bar').should('visible')
  })
})
