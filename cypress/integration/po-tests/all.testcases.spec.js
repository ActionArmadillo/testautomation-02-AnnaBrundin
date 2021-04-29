/// <reference types="cypress" />

//-----------------------------------------------------------------//
//                          imports                                //
//-----------------------------------------------------------------//
import * as loginFunctions from '../../pages/loginPage'
import * as dashboardFunctions from '../../pages/dashboardPage'
import * as clientsFunctions from '../../pages/clientsPage'
import * as billsFunctions from '../../pages/billsPage'
import * as roomsFunctions from '../../pages/roomsPage'

//-----------------------------------------------------------------//
//                          variables                              //
//-----------------------------------------------------------------//

var faker = require('faker');

let randomName = faker.name.findName()
let randomEmail = faker.internet.email().toLowerCase();
let randomPhone = faker.phone.phoneNumber();
let billValue = faker.random.number({min:500, max:1000})

var faker = require('faker');
let category = faker.random.number({min:0, max:2});
let floor = faker.random.number({min:1, max:10});
let roomNumber = faker.random.number({min:1, max:20}) + (floor * 100);
let features = faker.random.number({min:0, max:3});
let price = faker.random.number({min:2, max:5}) * 100 * floor + (features * 500);

//-----------------------------------------------------------------//
//                          test cases                             //
//-----------------------------------------------------------------//

describe('Main spec file for all test cases', () => {
    
    beforeEach(() => {
        cy.log('Log in before every test')
        cy.visit('http://localhost:3000/login')
        loginFunctions.login('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.wait(500)
        cy.log('Logged in')
    })
    
    afterEach(() => {
        cy.log('Log out after each test')
        dashboardFunctions.performLogout()
    })
       
    it('Testing login functionality - Open login page, check contents, log in, check contents', () => {
        cy.log('To check login one must log out. ')
        dashboardFunctions.performLogout()
        cy.visit('http://localhost:3000/login')
        cy.wait(1000)
        loginFunctions.checkElements()
        cy.percySnapshot('Validating login page elements')
        loginFunctions.validLogin('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Tester Hotel Overview')
        cy.wait(1000)
        cy.percySnapshot('Validating successul login')
    })

    it('Validate dashboard presence and content on all pages in the application', () =>{
        cy.log('checking the dashboard')
        clientsFunctions.openClientsPage()
        clientsFunctions.viewNewClientPage()
        dashboardFunctions.checkPages('tester01')
    })

    it('Open and validate Clients page', () => {
        clientsFunctions.viewClientsPage('Clients')
        cy.wait(1000)
        cy.percySnapshot("Validating Clients' page appearance")
    })

    it('Open and validate the content of New Client creation page', () => {
        clientsFunctions.openClientsPage()
        clientsFunctions.viewNewClientPage()
        cy.wait(1000)
        cy.percySnapshot('Validating New Client page appearance')
    })

    it('Create, validate and delete new Client', () => {
        clientsFunctions.openClientsPage()
        clientsFunctions.openNewClientPage()
        clientsFunctions.createNewClient(randomName,randomEmail,randomPhone)
        clientsFunctions.validateCreatedClient(randomName,randomEmail,randomPhone)
        cy.wait(1000)
        clientsFunctions.removeLastClient()
        cy.wait(1000)
    })
    
    it('Create, validate and delete new unpaid Bill', () => {
        billsFunctions.openBillsPage()
        billsFunctions.openNewBillPage()
        billsFunctions.createUnpaidBill(billValue)
        billsFunctions.validateUnpaidBill(billValue, 'No')
        cy.wait(2000)
        billsFunctions.removeLastBill()
    })

    it('Create, validate and delete new paid Bill', () => {
        billsFunctions.openBillsPage()
        billsFunctions.openNewBillPage()
        billsFunctions.createPaidBill(billValue)
        billsFunctions.validatePaidBill(billValue, 'Yes')
        cy.wait(2000)
        billsFunctions.removeLastBill()
    })

    it('Create, validate and delete available Room', () => {
        roomsFunctions.openRoomsPage()
        roomsFunctions.openNewRoomPage()
        roomsFunctions.createAvailableRoom(category, roomNumber, floor, price, features)
        cy.wait(1000)
        roomsFunctions.validateAvailableRoom(category, roomNumber, floor, 'true', roomsFunctions.FEATURES_LIST[features])
        cy.wait(2000)
        roomsFunctions.removeLastRoom()
    })
    
})
