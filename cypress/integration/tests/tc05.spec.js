/// <reference types="cypress" />
describe('TC05 - Create new Client', () => {
    it('Step1 - navigate to the login page', () => {        
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        // open and validate Clients
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.get('h2 > .btn').click()
        cy.get(':nth-child(1) > label').should('have.text','Name').should('have.css', 'text-transform', 'uppercase')
        cy.get(':nth-child(2) > label').should('have.text','Email').should('have.css', 'text-transform', 'uppercase')
        cy.get(':nth-child(3) > label').should('have.text','Telephone').should('have.css', 'text-transform', 'uppercase')
        cy.get('[href="/clients"]').should('have.text', 'Back')
        cy.get('.blue').should('have.text', 'Save')
        // input Client credentials
        cy.get(':nth-child(1) > input').type('FIRSTNAME LASTNAME')
        cy.get(':nth-child(2) > input').type('firstname@lastname.com')
        cy.get(':nth-child(3) > input').type('123456789')
        cy.get('.blue').click()
        // validate new Client credentials
        cy.get(':nth-child(3) > :nth-child(2) > h3').should('contain', 'FIRSTNAME LASTNAME')
        cy.get(':nth-child(4) > :nth-child(2) > .email').should('contain', 'firstname@lastname.com')
        cy.get(':nth-child(3) > :nth-child(2) > .telephone').should('contain', '123456789')
        // log out
        cy.get('.user > .btn').click()
        cy.url().should('eq','http://localhost:3000/login')
    })
})