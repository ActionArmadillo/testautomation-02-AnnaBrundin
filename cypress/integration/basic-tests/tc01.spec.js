/// <reference types="cypress" />
describe('TC01 -  Log in to the application', () => {
    it('Step1 - navigate to the login page', () => {        
        cy.visit('http://localhost:3000/login')
        cy.get('.router-link-active').contains('Tester Hotel')
        cy.get(':nth-child(1) > label').should('have.text','Username:').should('have.css', 'text-transform', 'uppercase')
        cy.get(':nth-child(2) > label').should('have.text', 'Password:').should('have.css', 'text-transform', 'uppercase')
        cy.get('.btn').contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get('h2').should('have.text', 'Tester Hotel Overview')
        cy.get('.user > .btn').click()
    })
})