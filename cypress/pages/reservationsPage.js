/// <reference types="cypress" />


//////////////
// elements //
//////////////
const VIEW_RESERVATIONS_BUTTON = ':nth-child(4) > .btn'
const CREATE_RESERVATION_BUTTON = 'h2 > .btn'
const START_TEXT_FIELD = ':nth-child(1) > input'
const END_TEXT_FIELD = ':nth-child(2) > input'
const CLIENT_SELECT = ':nth-child(3) > select'
const ROOM_SELECT = ':nth-child(4) > select'
const BILL_SELECT = ':nth-child(5) > select'
const SAVE_BUTTON = '.blue'
const RESERVATIONS_LIST = '.reservations'
const MEATBALLS_BUTTON = '.action'
const DELETE_BUTTON = '.menu > :nth-child(2)'

//////////////////////////////////
// functions / methods / actions//
//////////////////////////////////
function openReservationsPage(){
    cy.get(VIEW_RESERVATIONS_BUTTON).click()
}

function openCreateReservationPage(){
    cy.get(CREATE_RESERVATION_BUTTON).click()
}

function createReservation(start_date, end_date, client/*, room*/){
    cy.get(START_TEXT_FIELD).type(start_date)
    cy.get(END_TEXT_FIELD).type(end_date)
    cy.get(CLIENT_SELECT).select('3')//find('select').contains(client)
    cy.get(ROOM_SELECT).select('3')
    cy.get(BILL_SELECT).select('2')
    cy.get(SAVE_BUTTON).click()
}

function validateReservation(client, start_date, end_date){
    cy.get(RESERVATIONS_LIST).last()
    .should('contain', client)
    .and('contain', start_date)
    .and('contain', end_date)

}

function removeReservation(){
    cy.get(MEATBALLS_BUTTON).last().click()
    cy.get(DELETE_BUTTON).click()
}


//////////////////////
// export functions //
//////////////////////
module.exports = {
    openReservationsPage,
    openCreateReservationPage,
    createReservation,
    validateReservation,
    removeReservation
}