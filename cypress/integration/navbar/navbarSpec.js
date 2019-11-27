describe("navbar", function () {
  it("shows the app logo", function () {
      cy.visit('/')
      cy.get('.Nav-title').contains('Synesthesia')
  })
})
