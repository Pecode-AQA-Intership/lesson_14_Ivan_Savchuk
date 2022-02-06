describe('My First Test', () => {
    before(() => {
      cy.visit('https://demoqa.com')
    })
  
      it('find "Web-tables" button', () => {
        
    
        cy.contains('Elements').click()
    
        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/elements')
        cy.contains('Web Tables').click()
        cy.url().should('include', '/webtables')
      })
        // Get an input, type into it and verify that the value has been updated
        it('Check, that "Add" button is clickable', () => { 
        cy.contains('Add').click()
        cy.url().should('include', '/webtables')
        cy.contains('Registration Form')
        })

        it('Fill in the field "first Name" ', () => {
        cy.get('#firstName').type('Knopa2').should('have.value', 'Knopa2')  
        })

        it('Fill in the field "Last Name" ', () => { 
            cy.get('#lastName').type('Maladec').should('have.value', 'Maladec')  
            })

        it('Fill in the field "Email" ', () => { 
        cy.get('#userEmail').type('Knopa@gmail.com').should('have.value', 'Knopa@gmail.com')  
        })

        it('Fill in the field "age" ', () => { 
            cy.get('#age').type('2').should('have.value', '2')  
            })

        it('Fill in the field "salary" ', () => { 
            cy.get('#salary').type('200').should('have.value', '200')  
            })

        it('Fill in the field "department" ', () => { 
            cy.get('#department') 
                .type('AQA')
                .should('have.value', 'AQA')  
            })
        
        it('Check, that "Submit" button is clickable', () => { 
            cy.contains('Submit').click()
            cy.url().should('include', '/webtables')
            cy.contains('Knopa2')
            })

        it('Check ability to edit the data of user', () => { 
            cy.get('#edit-record-4').click()
            cy.contains('Knopa2')  
            })

            it('Edit a field "first Name" ', () => {
                cy.get('#firstName').clear().type('Knopa3')
                  .should('have.value', 'Knopa3')  
                })
        
                it('Edit a field field "Last Name" ', () => { 
                    cy.get('#lastName').clear().type('Maladec2')
                      .should('have.value', 'Maladec2')  
                    })
        
                it('Edit a field "Email" ', () => { 
                cy.get('#userEmail').clear().type('Knopa3@gmail.com')
                    .should('have.value', 'Knopa3@gmail.com')  
                })
        
                it('Edit a field "age" ', () => { 
                    cy.get('#age').clear().type('3')
                        .should('have.value', '3')  
                    })
        
                it('Edit a field "salary" ', () => { 
                    cy.get('#salary').clear().type('300')
                        .should('have.value', '300')  
                    })
        
                it('Edit a field "department" ', () => { 
                    cy.get('#department').clear().type('QA')
                        .should('have.value', 'QA')  
                    })
                
                it('Check, that "Submit" button is clickable', () => { 
                    cy.contains('Submit').click()
                    cy.url().should('include', '/webtables')
                    cy.contains('Knopa3')
                    })

                    it('Check ability to delete the data of user', () => { 
                        cy.get('#delete-record-4').click()

                    })

                    it('Check whether the data of user were deleted ', () => {
                        cy.get('.rt-tbody').not('Knopa3')
                        })

                        it('Check ability to search the data of user', () => { 
                            cy.get('#searchBox').click().type('Cierra')
                            cy.get('.rt-tbody')
                            cy.contains('Cierra')  
                            })
    })

//#searchBox
    //rt-tr -odd
