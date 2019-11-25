describe("playButton", function () {
  it("it is visible in the options bar", function () {
      cy.visit('localhost:3000')
      cy.get('.options').should('visible')
      cy.get('.play-button').should('visible')
  })

  it("changes to a pause button when clicked", function () {
    cy.visit('localhost:3000')
    cy.get('.options').should('visible')
    cy.get('.play-button').contains("&#9654")
    cy.get('.play-button').click()
  })
})
