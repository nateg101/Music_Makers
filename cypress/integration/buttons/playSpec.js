describe("playButton", function () {
  it("it is visible in the options bar", function () {
      cy.visit('/')
      cy.get('.option-bar').should('visible')
      cy.get('.play-button').should('visible')
  })

  it("changes to a stop button when clicked", function () {
    cy.visit('/')
    cy.get('.option-bar').should('visible')
    cy.get('.stop-button').should('not.visible')
    cy.get('.play-button').contains("▶")
    cy.get('.play-button').click()
    cy.get('.play-button').should('not.visible')
    cy.get('.stop-button').contains("◼")
  })

  it("returns the stepper to the start of the sequencer on click", function () {
    cy.visit('/')
    cy.get('.play-button').click()
    cy.wait(100)
    cy.get('.stop-button').click()
    cy.get('rect').each((Rect, index)=> {
      cy.wrap(Rect).should('have.css', "stroke='none'")
    })
  })
})
