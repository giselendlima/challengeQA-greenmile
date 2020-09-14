/// <reference types = "cypress" />

describe('Challenge QA', () => {
    beforeEach(() => {
        //acess the challenge URL
        cy.visit('https://codepen.io/choskim/pen/RLYebL');

        //its gets the iframe instance
        cy.getIframeBody().as('iframe')
    })

    it('should change the square size after the long press', () => {
        //its gets the square instance
        cy.get('@iframe')
            .find('.square')
            .first().as('square');

        // its checks if the square has size equals 90px
        cy.get('@square')
            .should('have.css', 'height', '90px')
            .should('have.css', 'width', '90px');

        //firstPressTo225px: its presses the square for 500ms and the release 
        cy.get('@square')
            .trigger('pointerdown', { button: 0 })
            .wait(500)
            .get('@square')
            .trigger('pointerleave', { button: 0 });
        //its checks if the square has size equals 225px
        cy.get('@square')
            .should('have.css', 'height', '225px')
            .should('have.css', 'width', '225px');

        //secondPressTo90px: its presses the square for 500ms and the release 
        cy.get('@square')
            .trigger('pointerdown', { button: 0 })
            .wait(500)
            .get('@square')
            .trigger('pointerleave', { button: 0 });
            
        // its checks if the square has size equals 90px
        cy.get('@square')
            .should('have.css', 'height', '90px')
            .should('have.css', 'width', '90px');
    })

})