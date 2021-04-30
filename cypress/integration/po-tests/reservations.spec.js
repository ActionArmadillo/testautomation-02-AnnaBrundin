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
let start = faker.date.between('2020-12-01', '2020-12-31').toISOString();
let end  = faker.date.between('2021-01-01', '2021-01-31').toISOString();
let start_date = start.toString().substring(0,10);
let end_date = end.toString().substring(0, 10);

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
//                          functions                              //
//-----------------------------------------------------------------//
/*
function randomDate(start, end) {
    var d = new Date(start.getTime() + Math.random() * (end.getTime() -                     start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
*/

//-----------------------------------------------------------------//
//                          tests                                  //
//-----------------------------------------------------------------//


describe('Main spec file for all test cases', () => {
    
    it('Create, validate and delete a Reservation', () => {
        cy.visit('http://localhost:3000/login')
        cy.wait(1000)
        loginFunctions.login(USERNAME, PASSWORD)
        cy.wait(1000)
        
        
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
        dashboardFunctions.performLogout()      
    })

})