/// <reference types="cypress" />

import * as loginFunctions from '../../pages/loginPage'
import * as dashboardFunctions from '../../pages/dashboardPage'

describe('Login tests', () => {
    beforeEach(() => {
        cy.log('before each')
        cy.visit('http://localhost:3000/login')
    })

    afterEach(() => {
        cy.log('after each')
        dashboardFunctions.performLogout()
    })

    it('TC01 - log in to the application', () => {
        loginFunctions.checkElements()
        loginFunctions.validLogin('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    })
})