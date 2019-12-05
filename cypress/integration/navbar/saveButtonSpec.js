describe('SaveButton', function() {
  beforeEach(function() {
    cy.visit('/')
  })
  it('renders successfully', function() {
    cy.get('.save-button')
  })

  it('opens the Save Link overlay', function() {
    cy.get('.save-button').click()
    cy.get('.Modal-wrapper')
    cy.contains('Save your song!')
  })

  it('saves the url', function() {
    cy.get('.save-button').click()
    cy.get('.Modal-wrapper')
    cy.get('.url').contains("http://localhost:3000/?0=Aw18ZXTt_DFOS1b0c17Pd_wYUcSaWREA&1=Aw18ZXTt_DFOS1b0c1tQ&2=AxA~&3=Aw18ZXTt_DFOS1b0c17Pd_wYUcSaWREA&4=AxA~")
  })

  it('saves the url correctly each time', function() {

    cy.visit('http://localhost:3000/?0=IwBj4yunb-GKclq3o5r2e7_gwo4k0s8iyIA~&1=Aw18ZXTt_DFOS1b0c1tQ&2=AxA~')
    cy.get('rect').first().should('have.css', 'fill', 'rgb(255, 255, 0)')

    cy.get('.save-button').click()
    cy.get('.Modal-wrapper')
    cy.get('.url').contains('http://localhost:3000/?0=IwBj4yunb-GKclq3o5r2e7_gwo4k0s8iyIA~&1=Aw18ZXTt_DFOS1b0c1tQ&2=AxA~')
                  .should('not.contain', 'http://localhost:3000/?0=IwBj4yunb-GKclq3o5r2e7_gwo4k0s8iyIA~&1=Aw18ZXTt_DFOS1b0c1tQ&2=AxA~$?0=IwBj4yunb-GKclq3o5r2e7_gwo4k0s8iyIA~&1=Aw18ZXTt_DFOS1b0c1tQ&2=AxA~$')
  })
})
