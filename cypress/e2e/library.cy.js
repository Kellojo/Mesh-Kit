describe('empty spec', () => {
  it('passes', () => {
      cy.visit('/');

      cy.get('a[href="#/library"]').click();
  });

    it('passes', () => {
        cy.visit('/');

        cy.get('button').contains('.blend').click();

        cy.verifyDownload('.blend', { contains: true });
    });


})