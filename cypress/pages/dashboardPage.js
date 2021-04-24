/// <reference types="cypress" />

// elements
const LOGOUT_BUTTON = '.user > .btn'

// functions / methods / actions
function performLogout(){
    cy.get(LOGOUT_BUTTON).click()
}

// export functions
module.exports = {
    //checkElements,
    performLogout
}