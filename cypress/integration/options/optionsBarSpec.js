describe("optionsBar", function () {
  beforeEach(function() {
    cy.visit('/')
    cy.get('.option-bar').should('visible')
  })
  it("has a play button", function () {
      cy.get('.play-button').should('contain', '▶')
  })

  it("shows the tempo bar", function() {
    cy.get('.tempo-slider').should('visible')
    cy.get('.tempo-slider').should('contain', '120')
  })

  it("shows the Octaves selector", function() {
    cy.get('.octaves').should('visible')
    cy.get('.octaves').should('contain', 'Octaves')
  })

  it("Shows the key selection form", function() {
    cy.get('.key-selector-form').should('visible')
    cy.get('.key-selector-form').should('contain', 'Key - C')
  })

  it("Shows the key selection radio buttons", function() {
    cy.get('.maj-min-buttons').should('visible')
  })
})
