describe('Testing google search', () => {
    it ('I search some information', () => {
        cy.visit('https://www.google.com.ua');
        cy.get("input[title='Пошук']").type('JavaScript').type('{enter}');
        cy.contains('https://developer.mozilla.org');
        cy.contains('https://learn.javascript.ru');
    })
})