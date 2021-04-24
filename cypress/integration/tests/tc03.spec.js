/// <reference types="cypress" />
describe('TC02 -  Log in to the application', () => {
    it('Step1 - navigate to the login page', () => {        
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get('.router-link-exact-active').should('have.text', 'Tester Hotel')
        cy.get('.username').should('have.text', 'Welcome tester01!')
        cy.get('.user > .btn').contains('Logout')
        // test Rooms
        cy.get(':nth-child(1) > .btn').click()
        cy.url().should('eq', 'http://localhost:3000/rooms')
        cy.get('h1 > .router-link-active').click()
        // test Clients
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.url().should('eq', 'http://localhost:3000/clients')
        cy.get('h1 > .router-link-active').click()
        // test Bills
        cy.get('.blocks > :nth-child(3) > .btn').click()
        cy.url().should('eq', 'http://localhost:3000/bills')
        cy.get('h1 > .router-link-active').click()
        // test Reservations
        cy.get('.blocks > :nth-child(4) > .btn').click()
        cy.url().should('eq', 'http://localhost:3000/reservations')
        cy.get('h1 > .router-link-active').click()
        // back to Overview
        cy.get('.router-link-exact-active').should('have.text', 'Tester Hotel')
        cy.get('.username').should('have.text', 'Welcome tester01!')
        cy.get('.user > .btn').contains('Logout')
        // log out
        cy.get('.user > .btn').click()
        cy.url().should('eq','http://localhost:3000/login')
    })
})