describe("scaleSelector", function () {
  beforeEach(function() {
    cy.visit('/')
  })
  it("has major and minor radio buttons", function () {
    cy.get('.maj-min-buttons').should('visible')
  })

  it("has a menu to select key", function () {
    cy.get('.key-selector').should('visible')
    cy.get('.key-selector-control').select('C')
    cy.get('.key-selector-control').select('D#')
    cy.get('.key-selector-control').select('B')
  })

  it("allows you to select key when playing", function () {
    cy.get('.play-button').click()
    cy.get('.key-selector-control').select('A')
    cy.get('.instruments').should('contain', 'F#5')
    cy.get('.play-button').click()
  })
})
