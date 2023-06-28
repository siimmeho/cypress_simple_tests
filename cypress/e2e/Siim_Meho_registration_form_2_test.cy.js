beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_2.html')
})

/*
Assignement 4: add content to the following tests
*/

describe('Section 1: Functional tests', () => {

    it('User can use only same both first and validation passwords', () => {
        // Add test steps for filling in only mandatory fields
        // Type confirmation password which is different from first password
        // Assert that submit button is not enabled
        // Assert that successful message is not visible
        // Assert that error message is visible
        // DONE

        cy.get('#username').type('Tester')
        cy.get('#email').type('awe@ga.ee')
        cy.get('[data-cy="name"]').type('Siim')
        cy.get('[data-testid="lastNameTestId"]').type('Meho')
        cy.get('[data-testid="phoneNumberTestId"]').type('12345')
        cy.get('input[name="password"]').type('SiimPass1')
        cy.get('[name="confirm"]').type('SiimPass')

        //in order to activate submit button, user has to click somewhere outside the input field
        cy.get('h2').contains('First').click()

        cy.get('.submit_button').should('not.be.enabled')

        // Assert that password error message is shown
        cy.get('#password_error_message').should('be.visible')

        // Assert that success message is not visible
        cy.get('#success_message').should('not.be.visible')
    })

    it('User can submit form with all fields added', () => {
        // Add test steps for filling in ALL fields
        // Assert that submit button is enabled
        // Assert that after submitting the form system show successful message
        // DONE

        cy.get('#username').should('have.attr', 'pattern', '[a-zA-Z0-9_]+').type('Tester')
        cy.get('#email').should('have.attr', 'pattern', "[a-z0-9]+@[a-z0-9]+\\.[a-z]{2,4}$").type('testertester@testilo.ee')
        cy.get('[data-cy="name"]').should('have.attr', 'pattern', '[a-zA-Z]+').type('Siim')
        cy.get('[data-testid="lastNameTestId"]').should('have.attr', 'pattern', '[a-zA-Z]+').type('Meho')
        cy.get('[data-testid="phoneNumberTestId"]').type('123456')
        cy.get('input[name="password"]').type('SiimPass')
        cy.get('[name="confirm"]').type('SiimPass')
        cy.get('#javascriptFavLanguage').click()
        cy.get('#vehicle2').click()
        cy.get('#cars').select('opel')
        cy.get('#animal').select('cat')

        //in order to activate submit button, user has to click somewhere outside the input field
        cy.get('h2').contains('First').click()

        cy.get('.submit_button').should('be.enabled')
        cy.get('.submit_button').click()

        // Assert that success message is visible
        cy.get('#success_message').should('be.visible')
    })

    it('User can submit form with valid data and only mandatory fields added', () => {
        // Add test steps for filling in ONLY mandatory fields
        // Assert that submit button is enabled
        // Assert that after submitting the form system shows successful message
        // DONE

        cy.get('#username').should('have.attr', 'pattern', '[a-zA-Z0-9_]+').type('Tester')
        cy.get('#email').should('have.attr', 'pattern', "[a-z0-9]+@[a-z0-9]+\\.[a-z]{2,4}$").type('testertester@testilo.ee')
        cy.get('[data-cy="name"]').should('have.attr', 'pattern', '[a-zA-Z]+').type('Siim')
        cy.get('[data-testid="lastNameTestId"]').should('have.attr', 'pattern', '[a-zA-Z]+').type('Meho')
        cy.get('[data-testid="phoneNumberTestId"]').type('12345')
        cy.get('input[name="password"]').type('SiimPass')
        cy.get('[name="confirm"]').type('SiimPass')

        //in order to activate submit button, user has to click somewhere outside the input field
        cy.get('h2').contains('First').click()

        cy.get('.submit_button').should('be.enabled')
        cy.get('.submit_button').click()

        // Assert that success message is visible
        cy.get('#success_message').should('be.visible')
    })

    it('Input valid data to the page', () => {
        inputValidData('john.doe')
    })

    it('Submit button is disabled when the "Input username" field is empty', () => {
        inputValidData('john.doe')

        // Clear the username field
        cy.get('#username').clear()

        //in order to activate submit button, user has to click somewhere outside the input field
        cy.get('h2').contains('First').click()

        cy.get('.submit_button').should('not.be.enabled')
    })

    it('Submit button is disabled when the "Last name" field is empty', () => {
        inputValidData('john.doe')

        // Clear the last name field
        cy.get('#lastName').clear()

        //in order to activate submit button, user has to click somewhere outside the input field
        cy.get('h2').contains('First').click()

        cy.get('.submit_button').should('not.be.enabled')

    })

    it('Submit button is disabled when the "Phone number" field is empty', () => {
        inputValidData('john.doe')

        // Clear the phone number field
        cy.get('[data-testid="phoneNumberTestId"]').clear()

        //in order to activate submit button, user has to click somewhere outside the input field
        cy.get('h2').contains('First').click()

        cy.get('.submit_button').should('not.be.enabled')

    })

    it('Submit button is disabled when the "Input email" field is empty', () => {
        inputValidData('john.doe')

        // Clear the email field
        cy.get('#email').clear()

        //in order to activate submit button, user has to click somewhere outside the input field
        cy.get('h2').contains('First').click()

        cy.get('.submit_button').should('not.be.enabled')
    })

    it('Submit button is disabled when the "First name" field is empty', () => {
        inputValidData('john.doe')

        // Clear the first name field
        cy.get('[data-cy="name"]').clear()

        //in order to activate submit button, user has to click somewhere outside the input field
        cy.get('h2').contains('First').click()

        cy.get('.submit_button').should('not.be.enabled')
    })
    // You can add more similar tests for checking other mandatory field's absence

})

/*
Assignement 5: create more visual tests
*/

describe('Section 2: Visual tests', () => {
    it('Check that logo is correct and has correct size', () => {
        cy.log('Will check logo source and size')
        cy.get('img').should('have.attr', 'src').should('include', 'cerebrum_hub_logo')
        // get element and check its parameter height, to be equal 178
        cy.get('img').invoke('height').should('be.lessThan', 178)
            .and('be.greaterThan', 100)
    })

    // Create similar test for checking second picture
    // DONE

    it('Check that logo of Cypress is correct and has correct size', () => {
        cy.log('Will check logo source and size')
        cy.get('[data-cy="cypress_logo"]')
        // get element and check its parameter height, to be equal 88
        cy.get('[data-cy="cypress_logo"]').invoke('height').should('be.lessThan', 100)
            .and('be.greaterThan', 80)
    })

    it('Check navigation part', () => {
        cy.get('nav').children().should('have.length', 2)

        // Get navigation element, find siblings that contains h1 and check if it has Registration form in string
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')

        // Get navigation element, find its first child, check the link content and click it
        cy.get('nav').children().eq(0).should('be.visible')
            .and('have.attr', 'href', 'registration_form_1.html')
            .click()

        // Check that currently opened URL is correct
        cy.url().should('contain', '/registration_form_1.html')

        // Go back to previous page
        cy.go('back')
        cy.log('Back again in registration form 2')
    })

    // Create similar test for checking second link to Cerebrum Hub homepage
    // Check that URL to Cerebrum Hub page is correct and clickable
    // DONE

    it('Check navigation part Cerebrum Hub', () => {
        cy.get('nav').children().should('have.length', 2)

        // Get navigation element, find siblings that contains h1 and check if it has Registration form in string
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')

        // Get navigation element, find its first child, check the link content and click it
        cy.get('nav').children().eq(1).should('be.visible')
            .and('have.attr', 'href', 'https://cerebrumhub.com/')
            .click()
        cy.wait(15000)

        // Check that currently opened URL is correct
        cy.url().should('contain', 'https://cerebrumhub.com/')

        // Go back to previous page
        cy.go('back')
        cy.log('Back again in registration form 2')
    })



    it('Check that radio button list is correct', () => {
        // Array of found elements with given selector has 4 elements in total
        cy.get('input[type="radio"]').should('have.length', 4)
        cy.get('input[type="radio"]').next().eq(0).should('have.text', 'HTML').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(1).should('have.text', 'CSS').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(2).should('have.text', 'JavaScript').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(3).should('have.text', 'PHP').and('not.be.checked')

        // Selecting one will remove selection from other radio button
        cy.get('input[type="radio"]').eq(0).check().should('be.checked')
        cy.get('input[type="radio"]').eq(1).check().should('be.checked')
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
    })

    // Create test similar to previous one
    // DONE

    it('Check that the checkboxes list is correct', () => {
        // Array of found elements with given selector has 3 elements in total
        cy.get('input[type="checkbox"]').should('have.length', 3)
        cy.get('input[type="checkbox"]').next().eq(0).should('have.text', 'I have a bike').and('not.be.checked')
        cy.get('input[type="checkbox"]').next().eq(1).should('have.text', 'I have a car').and('not.be.checked')
        cy.get('input[type="checkbox"]').next().eq(2).should('have.text', 'I have a boat').and('not.be.checked')

        // Assure you can check and uncheck the boxes
        cy.get('input[type="checkbox"]').eq(0).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(2).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(0).uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').eq(1).uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').eq(2).uncheck().should('not.be.checked')
    })

    it('Car dropdown is correct', () => {
        // Here is an example how to explicitely create screenshot from the code
        // Select second element and create screenshot for this area, and full page
        cy.get('#cars').select(1).screenshot('Cars drop-down')
        cy.screenshot('Full page screenshot')

        // Here are given different solutions how to get the length of array of elements in Cars dropdown
        // Next 2 lines of code do exactly the same!
        cy.get('#cars').children().should('have.length', 4)
        cy.get('#cars').find('option').should('have.length', 4)

        //Check  that first element in the dropdown has text Volvo
        cy.get('#cars').find('option').eq(0).should('have.text', 'Volvo')

        // Advanced level how to check the content of the Cars dropdown
        cy.get('#cars').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(actual).to.deep.eq(['volvo', 'saab', 'opel', 'audi'])
        })
    })


    // Create test similar to previous one
    // DONE

    it('Animal dropdown is correct', () => {
        // Here is an example how to explicitely create screenshot from the code
        // Select second element and create screenshot for this area, and full page
        cy.get('#animal').select(1).screenshot('Animal drop-down')
        cy.screenshot('Full page screenshot')

        // Here are given different solutions how to get the length of array of elements in Animal dropdown
        // Next 2 lines of code do exactly the same!
        cy.get('#animal').children().should('have.length', 6)
        cy.get('#animal').find('option').should('have.length', 6)

        //Check  that first element in the dropdown has text Dog
        cy.get('#animal').find('option').eq(0).should('have.text', 'Dog')

        // Advanced level how to check the content of the Animal dropdown
        cy.get('#animal').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(actual).to.deep.eq(['dog', 'cat', 'snake', 'hippo', 'spider', 'mouse'])
        })
    })

})

function inputValidData() {
    cy.log('Username will be filled')
    cy.get('input[data-testid="user"]').type('Something')
    cy.get('#email').type('validemail@yeap.com')
    cy.get('[data-cy="name"]').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('[data-testid="phoneNumberTestId"]').type('10203040')
    // If element has multiple classes, then one of them can be used
    cy.get('#password').type('MyPass')
    cy.get('#confirm').type('MyPass')
    cy.get('h2').contains('Password').click()
}