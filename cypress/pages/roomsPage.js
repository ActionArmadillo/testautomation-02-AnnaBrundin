/// <reference types="cypress" />

//////////////
// elements //
//////////////
const VIEW_ROOMS_PAGE_BUTTON = ':nth-child(1) > .btn'
const CREATE_ROOM_BUTTON = 'h2 > .btn'
const ROOMS_LIST = '.rooms'
const SAVE_BUTTON = '.blue'
const CATEGORY = ':nth-child(1) > select'
const CATEGORY_VALUES = [   'Double',
                            'Single',
                            'Twin'
]
const NUMBER_TEXTFIELD = ':nth-child(2) > input'
const FLOOR_TEXTFIELD = ':nth-child(3) > input'
const PRICE_TEXT_FIELD = ':nth-child(5) > input'
const AVAILABLE_CHECKBOX = '.checkbox'
const FEATURES = ':nth-child(6) > select'
const FEATURES_LIST_VALUES = [ 'balcony',
                        'ensuite',
                        'sea_view',
                        'penthouse'
                    ]
const FEATURES_LIST = [ 'balcony',
                        'ensuite',
                        'sea view',
                        'penthouse'
                    ]

const MEATBALLS_BUTTON = '.action'
const DELETE_BUTTON = '.menu > :nth-child(2)'

//////////////////////////////////
// functions / methods / actions//
//////////////////////////////////
function openRoomsPage(){
    cy.get(VIEW_ROOMS_PAGE_BUTTON).click()
}
function openNewRoomPage(){
    cy.get(CREATE_ROOM_BUTTON).click()
}

function createAvailableRoom(category, number, floor, price, features){
    cy.get(CATEGORY).select(CATEGORY_VALUES[category])
    cy.get(NUMBER_TEXTFIELD).type(number)
    cy.get(FLOOR_TEXTFIELD).type(floor)
    cy.get(PRICE_TEXT_FIELD).type(price)
    cy.get(FEATURES).select(FEATURES_LIST_VALUES[features])
    cy.get(AVAILABLE_CHECKBOX).click()
    cy.get(SAVE_BUTTON).click()    
}

function validateAvailableRoom(category, number, floor, available, features){
    cy.log(category)
    cy.log(number)
    cy.log(floor)
    cy.log(features)
    cy.log(FEATURES_LIST[features])
    let feature = FEATURES_LIST[features]
    cy.log(feature)
    cy.get(ROOMS_LIST)
        .should('contain', category)
        .and('contain', number)
        .and('contain', floor)
        .and('contain', available)
        .and('contain', FEATURES_LIST[features])
}

function removeLastRoom(){
    cy.get(MEATBALLS_BUTTON).last().click()
    cy.get(DELETE_BUTTON).click()
}

//////////////////////
// export functions //
//////////////////////
module.exports = {
    FEATURES_LIST_VALUES,
    openRoomsPage,
    openNewRoomPage,
    createAvailableRoom,
    validateAvailableRoom,
    removeLastRoom
}