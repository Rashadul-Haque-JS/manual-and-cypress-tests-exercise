
import { test, retest, apiTestURL } from "./utils"

describe("tests of reky intresseanmällan form", () => {

    beforeEach(() => {
        cy.visit('https://dev.reky.se/')
        cy.get('[id="rcc-confirm-button"]').click()

        // Rather listen request than perform a request
        cy.intercept('POST', apiTestURL)

        // perform a network level request
        cy.request('POST', apiTestURL, {
            name: 'Foo Bar'
        }).then((response) => {
            expect(response.body).contains('Hello, Foo Bar. This HTTP triggered function executed successfully');

        })

    })

    // Test level 1 when annat-yrke
    it('should ask for fritext if click on Annat-yrke', () => {
        cy.get('[data-test-id="yrke-annat"]').click()
        cy.get('[data-test-id="yrke-fritext"]').type('Singer')
        cy.get('[class="expertise-step-other__NextButton-sc-cj5gww-0 eECwug"]').click()
    })

    // Test level 1 when not annat-yrke
    it('should go to next step', () => {
        cy.get('[class="step__StepTitle-sc-12qz7mz-0 gqMuXA"]').click()
        cy.get('[data-test-id="yrke-systemutvecklare"]').click()
    })

    // Test level 2
    it("should show error message if no expertis selected", () => {
        test()
    })

    // Test level 3
    it("should show error message if any field is empty in contact form", () => {
        retest()
    })

    // Test level 4
    it("should show error message", () => {
        retest()
        cy.get('[data-test-id="send-form-button"]').click()
        cy.get('[data-text-id="contact-name-validation"]').contains('Du måste fylla i ett namn')
    })

    it("should show error message", () => {
        retest()
        cy.get('[data-test-id="contact-email-textbox"]').type('foo.bar@example')
        cy.get('[data-test-id="contact-tel-textbox"]').type('070NaN1010')
        cy.get('[data-test-id="send-form-button"]').click()
        cy.get('.step__StepContentInner-sc-12qz7mz-2 form span:nth-of-type(2)').contains('Ogiltig email')
        cy.get('.step__StepContentInner-sc-12qz7mz-2 form span:nth-of-type(3)').contains('Endast siffror tillåtna')
    })


    // Test level 5
    it("should show 'KLART' message in the end", () => {
        retest()
        cy.get('[data-test-id="contact-name-textbox"]').type('Foo Bar')
        cy.get('[data-test-id="contact-email-textbox"]').type('foo.bar@example.com')
        cy.get('[data-test-id="contact-tel-textbox"]').type('070101010')
        cy.get('[data-test-id="send-form-button"]').click()
        cy.get('.response-message__StepTitle-sc-1t69zwa-0').should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('.response-message__StepTitle-sc-1t69zwa-0').contains('KLART')

    })

})