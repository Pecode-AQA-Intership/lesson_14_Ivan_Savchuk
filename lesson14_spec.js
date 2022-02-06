describe('My First Test', () => {
  before(() => {
    cy.visit('https://demoqa.com')
    })

    after(() => {
      cy.reload(); // cleanup text from the inputs fields
    });
      // Should be on a new URL which includes '/elements'
      it('find "Elements" button', () => {
        cy.contains('Elements').click().url().should('include', '/elements')
      })
      // Should be on a new URL which includes '/text-box'
      it('find "Text-box" button', () => {
        cy.contains('Text Box').click().url().should('include', '/text-box')
      })
      // Get an input, type into it "user Name" value and verify that the value has been added
      it('fill the form "Full Name" ', () => {
        cy.get('#userName').type('Knopa').should('have.value', 'Knopa')
      })

      // Get an input, type into it "user Email" value and verify that the value has been added
      it('fill the form "user Email" ', () => {
        cy.get('#userEmail').type('Knopa@gmail.com').should('have.value', 'Knopa@gmail.com')
      })
      // Get an input, type into it "user current address" value and verify that the value has been added
      it('fill the form "current address"', () => {
        cy.get('#currentAddress').type('Kyiv').should('have.value', 'Kyiv')
      })
      // Get an input, type into it "user permanent address" value and verify that the value has been added
      it('fiil the form "permanent address" ', () => {  
        cy.get('#permanentAddress').type('Obukhiv').should('have.value', 'Obukhiv') 
    })
})