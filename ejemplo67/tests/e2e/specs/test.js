/* eslint-disable prettier/prettier */
/// <reference types="Cypress" />

describe('My First Test', () => {
it('Visitando la pagina', () => {
    cy.visit('http://localhost:8080/');
  });
  it('prueba 2', ()=>{
    cy.contains('a.nav-link','Sign up').click();
  });
})
