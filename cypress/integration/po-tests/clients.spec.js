/// <reference types="cypress" />

import * as loginFunctions from '../../pages/loginPage'
import * as dashboardFunctions from '../../pages/dashboardPage'

describe('Login and logout tests', () => {
    beforeEach(() => {
        cy.log('before each')
        cy.visit('http://localhost:3000/login')
    })

    afterEach(() => {
        cy.log('after each')
        dashboardFunctions.performLogout()
    })

    //it()

})