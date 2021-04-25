/// <reference types="cypress" />

import * as loginFunctions from '../../pages/loginPage'
import * as dashboardFunctions from '../../pages/dashboardPage'
import * as clientFunctions from '../../pages/clientsPage'


describe('Clients page and New Client tests', () => {
    beforeEach(() => {
        cy.log('before each')
        cy.visit('http://localhost:3000/login')
        loginFunctions.login('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    })
    /*
    afterEach(() => {
        cy.log('after each')
        dashboardFunctions.performLogout()
    })
    */
    it('View Client page', () => {
        
        clientFunctions.viewClientsPage('Clients')
        dashboardFunctions.performLogout()
    })

    it('View Create Client page', () => {
        
        clientFunctions.openClientsPage()
        clientFunctions.viewNewClientPage()
        dashboardFunctions.performLogout()
    })

    it('Create new Client', () => {
        clientFunctions.openClientsPage()
        clientFunctions.openNewClientPage()
        clientFunctions.createNewClient('FIRSTNAME LASTNAME','firstname@lastname.com','123456789')
    })

})