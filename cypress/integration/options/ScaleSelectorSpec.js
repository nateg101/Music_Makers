describe("scaleSelector", function () {
  it("has major and minor radio buttons", function () {
    cy.visit('/')
    cy.get('.maj-min-buttons').should('visible')
  })
})
