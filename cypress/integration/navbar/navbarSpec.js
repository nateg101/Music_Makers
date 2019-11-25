describe("navbar", function () {
  it("shows the app logo", function () {
      cy.visit('localhost:3000')
      cy.get('.navbar-brand').contains('Synesthesia')
  })
})
