/// <reference types="cypress" />

import * as loginFunctions from '../../pages/loginPage'
import * as dashboardFunctions from '../../pages/dashboardPage'
import * as clientFunctions from '../../pages/clientsPage'

var faker = require('faker');

let randomName = faker.name.findName()
let randomEmail = faker.internet.email().toLowerCase();
let randomPhone = faker.phone.phoneNumber();


describe('Clients page and New Client tests', () => {
    beforeEach(() => {
        cy.log('before each')
        cy.visit('http://localhost:3000/login')
        loginFunctions.login('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    })
    
    afterEach(() => {
        cy.log('after each')
        dashboardFunctions.performLogout()
    })
    
    it('View Client page', () => {        
        clientFunctions.viewClientsPage('Clients')
    })

    it('View Create Client page', () => {        
        clientFunctions.openClientsPage()
        clientFunctions.viewNewClientPage()
    })

    it('Create, validate and delete new Client', () => {
        clientFunctions.openClientsPage()
        clientFunctions.openNewClientPage()
        clientFunctions.createNewClient(randomName,randomEmail,randomPhone)
        clientFunctions.validateCreatedClient(randomName,randomEmail,randomPhone)
        cy.wait(5000)
        clientFunctions.removeLastClient()
        cy.wait(1000)
    })
})