describe("scaleSelector", function () {
  it("has major and minor radio buttons", function () {
    cy.visit('/')
    cy.get('.maj-min-buttons').should('visible')
  })

  it("has a menu to select key", function () {
    cy.visit('/')
    cy.get('.key-selector').should('visible')
    cy.get('.key-selector-control').select('C')
    cy.get('.key-selector-control').select('D#')
    cy.get('.key-selector-control').select('B')
  })
})
