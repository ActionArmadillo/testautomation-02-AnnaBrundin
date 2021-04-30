/// <reference types="cypress" />

//-----------------------------------------------------------------//
//                          imports                                //
//-----------------------------------------------------------------//
import * as loginFunctions from '../../pages/loginPage'
import * as dashboardFunctions from '../../pages/dashboardPage'
import * as clientsFunctions from '../../pages/clientsPage'
import * as billsFunctions from '../../pages/billsPage'
import * as roomsFunctions from '../../pages/roomsPage'
import * as reservationsFunctions from '../../pages/reservationsPage'

//-----------------------------------------------------------------//
//                          variables                              //
//-----------------------------------------------------------------//

const USERNAME = 'tester01';
const PASSWORD = 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c';

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

let start = faker.date.between('2020-12-01', '2020-12-31').toISOString();
let end  = faker.date.between('2021-01-01', '2021-01-31').toISOString();
let start_date = start.toString().substring(0,10);
let end_date = end.toString().substring(0, 10);


//-----------------------------------------------------------------//
//                          test cases                             //
//-----------------------------------------------------------------//

describe('Main spec file for all test cases', () => {
    
    beforeEach(() => {
        cy.log('Log in before every test')
        cy.visit('http://localhost:3000/login')
        loginFunctions.login(USERNAME, PASSWORD)
        cy.wait(500)
        cy.log('Logged in')
    })
    
    afterEach(() => {
        cy.log('Log out after each test')
        dashboardFunctions.performLogout()
    })

    it('Validate dashboard presence and content on all pages in the application', () =>{
        cy.log('checking the dashboard')
        clientsFunctions.openClientsPage()
        clientsFunctions.viewNewClientPage()
        dashboardFunctions.checkPages('tester01')
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
        //roomsFunctions.validateAvailableRoom(category, roomNumber, floor, 'true', features)
        roomsFunctions.validateAvailableRoom(category, roomNumber, floor, 'true', features)
        cy.wait(2000)
        roomsFunctions.removeLastRoom()
    })

    it('Create, validate and delete a Reservation', () => {
        // create new client //
        clientsFunctions.openClientsPage()
        clientsFunctions.openNewClientPage()
        clientsFunctions.createNewClient(randomName,randomEmail,randomPhone)
        dashboardFunctions.backToIndex()
        
        // create new bill
        billsFunctions.openBillsPage()
        billsFunctions.openNewBillPage()
        billsFunctions.createUnpaidBill(billValue)
        dashboardFunctions.backToIndex()

        // create new available room
        roomsFunctions.openRoomsPage()
        roomsFunctions.openNewRoomPage()
        roomsFunctions.createAvailableRoom(category, roomNumber, floor, price, features)
        dashboardFunctions.backToIndex()
             
        // create reservation
        reservationsFunctions.openReservationsPage()
        reservationsFunctions.openCreateReservationPage()        
        reservationsFunctions.createReservation(start_date, end_date)
        cy.wait(3000)

        //validate reservation
        reservationsFunctions.validateReservation(randomName, start_date, end_date)
        cy.wait(3000)

        // remove everything
        reservationsFunctions.removeReservation()
        cy.wait(1000)
        dashboardFunctions.backToIndex()
        clientsFunctions.openClientsPage()
        clientsFunctions.removeLastClient()
        cy.wait(1000)
        dashboardFunctions.backToIndex()
        roomsFunctions.openRoomsPage()
        roomsFunctions.removeLastRoom()
        cy.wait(1000)
        dashboardFunctions.backToIndex()
        billsFunctions.openBillsPage()
        billsFunctions.removeLastBill()
        cy.wait(1000)
        dashboardFunctions.backToIndex()
    })
    
})
