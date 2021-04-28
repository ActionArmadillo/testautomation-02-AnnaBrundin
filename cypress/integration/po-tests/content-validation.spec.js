/// <reference types="cypress" />

import * as loginFunctions from '../../pages/loginPage'
import * as dashboardFunctions from '../../pages/dashboardPage'
import * as clientsFunctions from '../../pages/clientsPage'

/* 
This suite validates static elements across the application 
*/

describe('Validate content across the application', () => {
    beforeEach(() => {
        cy.log('before each')
        cy.visit('http://localhost:3000/login')        
    })

    /*
        This test case is a part of "TC03 - Validate the web site header".
        The button clicks have been removed to streamline the code to the main purpose of the test - validating content of the dashboard.
    */
    it('Validate dashboard elements', () => {
        cy.visit('http://localhost:3000/login')
        loginFunctions.validLogin('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Tester Hotel Overview')

        // check the index page
        dashboardFunctions.checkElements('tester01')
        // check rooms, clients, bills, reservations
        dashboardFunctions.checkPages('tester01')
        dashboardFunctions.performLogout()
    })

    /*
        These test cases were a part of "TC03 - Validate the web site header"
        The button clicks are moved to separate tests to validate the buttons on the index page.
    */
    it('Open and validate Clients page', () => {
        loginFunctions.login('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        clientsFunctions.viewClientsPage('Clients')
        dashboardFunctions.performLogout()
    })
    it('Open and validate the content of New Client creation page', () => {
        loginFunctions.login('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        clientsFunctions.openClientsPage()
        clientsFunctions.viewNewClientPage()
        dashboardFunctions.performLogout()
    })
})