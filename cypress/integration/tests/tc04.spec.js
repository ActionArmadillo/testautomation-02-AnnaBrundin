/// <reference types="cypress" />
describe('TC02 -  Log in to the application', () => {
    it('Step1 - navigate to the login page', () => {        
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        // open and validate Clients
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.get('h2 > .btn').should('have.text', 'Create Client')
        cy.get(':nth-child(3) > .btn').should('have.text', 'Back')
        // log out
        cy.get('.user > .btn').click()
        cy.url().should('eq','http://localhost:3000/login')
    })
})