describe("navbar", function () {
  it("shows the app logo", function () {
      cy.visit('localhost:3000')
      cy.get('.Nav-title').contains('Synesthesia')
  })
})
