/* eslint-disable prettier/prettier */
describe('probando la creacion de articulos',()=>{
    
    it('articulo numero 1', () => {
        //cy.task('cleanDatabase')
        cy.visit('http://localhost:8080/');
        const email = "user3@user3.com";
        const password = "123456789";
        cy.contains('a.nav-link','Sign in').click();
        cy.location('hash').should('equal','#/login');
        cy.get('[placeholder="Email"]').type(email).should('have.value',email);
        cy.get('[placeholder="Password"]').type(password).should('have.value',password);
        cy.get('form').submit();
        cy.get('[href="#/@User010/"]').should('be.visible');
        cy.contains('a[href="#/editor"]','New Article').click();
        cy.get('[placeholder="Article Title"]').type('Titulo del articulo').should('have.value','Titulo del articulo');
        cy.get('[placeholder="What\'s this article about?"]').type('Articulo de ejemplo numero 1').should('have.value','Articulo de ejemplo numero 1');
        cy.get('[placeholder="Write your article (in markdown)"]').type('## Ejemplo de escritura del articulo numero 1').should('have.value','## Ejemplo de escritura del articulo numero 1');
        cy.get('[placeholder="Enter tags"').type('articulo').should('have.value','articulo');
        cy.get('form').submit();
        cy.get('#editandoArticulo').click();
        cy.get('[placeholder="Article Title"]').should('have.value','Titulo del articulo');
        cy.get('[placeholder="Write your article (in markdown)"]').clear();
        cy.get('[placeholder="Write your article (in markdown)"]').type('## Modificando la escritura del articulo numero 1 desde la vista de edicion').should('have.value','## Modificando la escritura del articulo numero 1 desde la vista de edicion');
        cy.get('[placeholder="Enter tags"').type('articulos').should('have.value','articulos');
        cy.get('form').submit();
        cy.get('[href="#/@User010/"]').click();
        cy.get('button i.ion-heart').first().click();
        cy.get('[href="#/@User010/favorites"]').click();
        cy.get('button span.counter').first().should('have.length',1);
    });
});