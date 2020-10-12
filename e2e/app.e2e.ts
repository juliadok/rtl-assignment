/// <reference types="cypress" />

describe('articles', () => {
  beforeEach(() => {
    cy.request('/bundle-api.json').as('data');
  });

  describe('validate data', () => {
    it('should request a correct data', () => {
      cy.get<Cypress.Response>('@data').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('bundelItems');
        expect(response.body).to.have.property('label');
        expect(response.body).to.have.property('title');
        expect(response.body).to.have.property('description');
      });
    });
  });

  describe('rendering', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should render heading', () => {
      cy.get<Cypress.Response>('@data').then(({ body: articles }) => {
        cy.get('[data-qa-element="label"]').contains(articles.label);
        cy.get('[data-qa-element="title"]').contains(articles.title);
        cy.get('[data-qa-element="description"]').contains(articles.description);
      });
    });

    it('should render the first article', () => {
      cy.get<Cypress.Response>('@data').then(({ body }) => {
        const [article] = body.bundelItems;

        cy.get('[data-qa-element="chapeau"]').contains(article.chapeau);
        cy.get('[data-qa-element="titel"]').contains(article.titel);
        cy.get('[data-qa-element="lead"]').contains(article.lead);
      });
    });
  });
});
