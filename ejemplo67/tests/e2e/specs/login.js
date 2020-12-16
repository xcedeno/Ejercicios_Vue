/* eslint-disable prettier/prettier */
describe('Probando la vista de login y el ingreso de usuarios',()=>{
    it('login prueba con datos erroneos', () => {
        cy.visit('http://localhost:8080/');
        const email = "user3";
        const password = "123456789";
        cy.contains('a.nav-link','Sign in').click();
        cy.get('[placeholder="Email"]').type(email).should('have.value',email);
        cy.get('[placeholder="Password"]').type(password).should('have.value',password);
        cy.get('form').submit();
        cy.contains('.error-messages li', 'email or password is invalid');
    });
     it('login prueba con datos correctos', () => {
        cy.visit('http://localhost:8080/');
        const email = "user3@user3.com";
        const password = "123456789";
        cy.contains('a.nav-link','Sign in').click();
        cy.location('hash').should('equal','#/login');
        cy.get('[placeholder="Email"]').type(email).should('have.value',email);
        cy.get('[placeholder="Password"]').type(password).should('have.value',password);
        cy.get('form').submit();
        cy.get('[href="#/@User010/"]').should('be.visible');
        cy.screenshot();
        cy.contains('a.nav-link','Global Feed').should('have.class','nav-link router-link-exact-active active');
        cy.contains('a.nav-link','Your Feed').should('not.have.class','router-link-exact-active active');
        cy.contains('a.nav-link','Your Feed').click()
        cy.contains('a.nav-link','Your Feed').should('have.class','nav-link router-link-exact-active active');
        cy.location('hash').should('equal','#/my-feed');
    });
});