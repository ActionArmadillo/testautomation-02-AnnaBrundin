/// <reference types="cypress" />
describe('TC06 -  Validate the Client appearance', () => {
    it('Step1 - navigate to the login page', () => {        
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        
        //cy.get('.user > .btn').click()
        //cy.url().should('eq','http://localhost:3000/login')
    })
})