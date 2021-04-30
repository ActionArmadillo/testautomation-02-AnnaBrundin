/// <reference types="cypress" />

//-----------------------------------------------------------------//
//                          imports                                //
//-----------------------------------------------------------------//
import * as loginFunctions from '../../pages/loginPage'
import * as dashboardFunctions from '../../pages/dashboardPage'
import * as clientsFunctions from '../../pages/clientsPage'

//-----------------------------------------------------------------//
//                          variables                              //
//-----------------------------------------------------------------//

const USERNAME = 'tester01';
const PASSWORD = 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c';

//-----------------------------------------------------------------//
//                          test cases                             //
//-----------------------------------------------------------------//

describe('Main spec file for all test cases', () => {
    
    it('Testing login functionality - Open login page, check contents, log in, check contents', () => {
        cy.visit('http://localhost:3000/login')
        cy.wait(1000)
        loginFunctions.checkElements()
        cy.percySnapshot('Validating login page elements')
        loginFunctions.validLogin(USERNAME, PASSWORD,'Tester Hotel Overview')
        cy.wait(1000)
        cy.percySnapshot('Validating successul login')
        dashboardFunctions.performLogout()
    })

    it('Open and validate Clients page', () => {
        cy.visit('http://localhost:3000/login')
        cy.wait(1000)
        loginFunctions.checkElements()
        cy.percySnapshot('Validating login page elements')
        loginFunctions.validLogin(USERNAME, PASSWORD,'Tester Hotel Overview')
        clientsFunctions.viewClientsPage('Clients')
        cy.wait(1000)
        cy.percySnapshot("Validating Clients' page appearance")
        dashboardFunctions.performLogout()
    })

    it('Open and validate the content of New Client creation page', () => {
        cy.visit('http://localhost:3000/login')
        cy.wait(1000)
        loginFunctions.checkElements()
        cy.percySnapshot('Validating login page elements')
        loginFunctions.validLogin(USERNAME, PASSWORD,'Tester Hotel Overview')
        clientsFunctions.openClientsPage()
        clientsFunctions.viewNewClientPage()
        cy.wait(1000)
        cy.percySnapshot('Validating New Client page appearance')
        dashboardFunctions.performLogout()
        cy.wait(1000)
    })
})
