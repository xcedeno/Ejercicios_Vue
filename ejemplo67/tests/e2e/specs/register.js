/* eslint-disable prettier/prettier */
describe('Registro', ()=> {
    it('registrando nuevo usuario', () => {
        cy.visit('http://localhost:8080/#/');
        const username = "User011";
        const email = "user4@user4.com";
        const password = "123456789";
        cy.contains('a.nav-link','Sign up').click();
        cy.window().then((win) => {
            console.log(win.location)
        })
        cy.location('hash').should('equal','#/register');
        cy.get('[placeholder="Username"]').type(username).should('have.value','User011');
        cy.get('[placeholder="Email"]').type(email).should('have.value','user4@user4.com');
        cy.get('[placeholder="Password"]').type(password).should('have.value','123456789');
        cy.get('form').submit();
        cy.location('pathname').should('equal','/');
        // cy.get('[href="#/@User011/"]').should('be.visible');
    });
})