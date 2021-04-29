/// <reference types="cypress" />

import * as loginFunctions from '../../pages/loginPage'
import * as dashboardFunctions from '../../pages/dashboardPage'
import * as roomsFunctions from '../../pages/roomsPage'

var faker = require('faker');
let category = faker.random.number({min:0, max:2});
let floor = faker.random.number({min:1, max:10});
let roomNumber = faker.random.number({min:1, max:20}) + (floor * 100);
let features = faker.random.number({min:0, max:3});
let price = faker.random.number({min:2, max:5}) * 100 * floor + (features * 500);



describe('Main spec file for all test cases', () => {
    it('Create, validate and delete new unpaid Bill', () => {
        cy.log('Log in before every test')
        cy.visit('http://localhost:3000/login')
        loginFunctions.login('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.wait(500)
        cy.log('Logged in')
        roomsFunctions.openRoomsPage()
        roomsFunctions.openNewRoomPage()
        roomsFunctions.createAvailableRoom(category, roomNumber, floor, price, features)
        cy.wait(1000)
        roomsFunctions.validateAvailableRoom(category, roomNumber, floor, 'true', roomsFunctions.FEATURES_LIST[features])
        cy.wait(2000)
        roomsFunctions.removeLastRoom()
    })
})