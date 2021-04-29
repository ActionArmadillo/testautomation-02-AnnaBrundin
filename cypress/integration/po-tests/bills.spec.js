/// <reference types="cypress" />

import * as loginFunctions from '../../pages/loginPage'
import * as dashboardFunctions from '../../pages/dashboardPage'
import * as billsFunctions from '../../pages/billsPage'

var faker = require('faker');
let billValue = faker.random.number({min:500, max:1000})

describe('Main spec file for all test cases', () => {
    it('Create, validate and delete new unpaid Bill', () => {
        cy.log('Log in before every test')
        cy.visit('http://localhost:3000/login')
        loginFunctions.login('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.wait(500)
        cy.log('Logged in')
        billsFunctions.openBillsPage()
        billsFunctions.openNewBillPage()
        billsFunctions.createUnpaidBill(billValue)
        billsFunctions.validateUnpaidBill(billValue, 'No')
        cy.wait(2000)
        billsFunctions.removeLastBill()
        dashboardFunctions.performLogout()
    })

    it('Create, validate and delete new unpaid Bill', () => {
        cy.log('Log in before every test')
        cy.visit('http://localhost:3000/login')
        loginFunctions.login('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.wait(500)
        cy.log('Logged in')
        billsFunctions.openBillsPage()
        billsFunctions.openNewBillPage()
        billsFunctions.createPaidBill(billValue)
        billsFunctions.validatePaidBill(billValue, 'Yes')
        cy.wait(2000)
        billsFunctions.removeLastBill()
        dashboardFunctions.performLogout()
    })
})