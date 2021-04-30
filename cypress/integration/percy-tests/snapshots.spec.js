/// <reference types="cypress" />

//-----------------------------------------------------------------//
//                          imports                                //
//-----------------------------------------------------------------//
import * as loginFunctions from '../../pages/loginPage'
import * as headerFunctions from '../../pages/headerPage'
import * as indexFunctions from '../../pages/indexPage'
import * as clientsFunctions from '../../pages/clientsPage'
import * as newClientFunctions from '../../pages/newClientPage'

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
        headerFunctions.performLogout()
    })

    it('Open and validate Clients page', () => {
        cy.visit('http://localhost:3000/login')
        cy.wait(1000)
        loginFunctions.checkElements()
        loginFunctions.validLogin(USERNAME, PASSWORD,'Tester Hotel Overview')
        indexFunctions.openClientsPage()
        cy.wait(1000)
        cy.percySnapshot("Validating Clients' page appearance")
        headerFunctions.performLogout()
    })

    it('Open and validate the content of New Client creation page', () => {
        cy.visit('http://localhost:3000/login')
        cy.wait(1000)
        loginFunctions.checkElements()
        loginFunctions.validLogin(USERNAME, PASSWORD,'Tester Hotel Overview')
        indexFunctions.openClientsPage()
        clientsFunctions.openNewClientPage()
        newClientFunctions.validateNewClientPage()
        cy.wait(1000)
        cy.percySnapshot('Validating New Client page appearance')
        headerFunctions.performLogout()
        cy.wait(1000)
    })
})
