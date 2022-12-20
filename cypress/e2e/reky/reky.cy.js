describe("signup tests exercise", () => {

    beforeEach(() => {
        cy.visit('https://dev.reky.se/')
    })

    // Selector 'sup' stands for signup which is used to maintain unique name

    // Test level 1
    it('should dispaly all input fields border in red and error message in gold with name of empty fields.', () => {
        // Now cypress API (get) will click submit button to check
        // cy.get('[data-cy="form-sup"]').submit()
        // cy.get('[data-cy="info-sup"]').should('have.length', 1)
        // cy.get('[data-cy="info-sup"]').contains("firstname,lastname,email,password is required")
    })

    // Test level 2
    it('should dispaly only empty input fields border in red and error message in gold with its name.', () => {
        // Now cypress API (get) will click submit button to check
        // cy.get('[data-cy="fname-sup"]').type('Erik')
        // cy.get('[data-cy="email-sup"]').type('erik.andersson@email.com')
        // cy.get('[data-cy="form-sup"]').submit()
        // cy.get('[data-cy="info-sup"]').should('have.length', 1)
        // cy.get('[data-cy="info-sup"]').contains("lastname,password is required")
    })

    // Test level 3
    it('should display greetings message with mentioning users firstname in white and uppercase.', () => {
        // Now cypress API (get) will click submit button to check
        // cy.get('[data-cy="fname-sup"]').type('Erik')
        // cy.get('[data-cy="lname-sup"]').type('Andersson')
        // cy.get('[data-cy="email-sup"]').type('erik.andersson@email.com')
        // cy.get('[data-cy="password-sup"]').type('password')
        // cy.get('[data-cy="form-sup"]').submit()
        // cy.get('[data-cy="info-sup"]').should('have.length', 1)
        // cy.get('[data-cy="info-sup"]').contains("Welcome ERIK! You are registered!")
    })

})