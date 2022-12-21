
export const test = ()=>{
    return(
        cy.get('[data-test-id="yrke-systemutvecklare"]').click(),
        cy.get('[data-test-id="expertise-next-button"]').click(),
        cy.get('[data-test-id="expertis-validering"]').contains('Du måste välja minst en!'),
        cy.get('[data-test-id="javascript"]').click(),
        cy.get('[data-test-id="expertise-next-button"]').click()
    )
}

export const retest = () => {
    return (
        test(),
        cy.get('[data-test-id="location-step-next-button"]').click(),
        cy.get('[data-text-id="place-textbox-validation"]').contains('Du måste fylla i detta fält.'),
        cy.get('[data-test-id="place-textbox-textbox"]').type('Upplands Väsby'),
        cy.get('[data-test-id="location-step-next-button"]').click()
    )
}

export const apiTestURL = "https://reky.azurewebsites.net/api/apply-test"