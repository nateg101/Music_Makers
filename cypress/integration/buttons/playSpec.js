describe("playButton", function () {
  it("it is visible in the options bar", function () {
      cy.visit('localhost:3000')
      cy.get('.option-bar').should('visible')
      cy.get('.play-button').should('visible')
  })

  it("changes to a stop button when clicked", function () {
    cy.visit('localhost:3000')
    cy.get('.option-bar').should('visible')
    cy.get('.stop-button').should('not.visible')
    cy.get('.play-button').contains("▶")
    cy.get('.play-button').click()
    cy.get('.play-button').should('not.visible')
    cy.get('.stop-button').contains("◼")
  })
})
