import pages from '../fixtures/tech-blog-pages.json';

describe(pages.homePage, () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });
  it('Random passed test', () => {
    expect(true).to.equal(true);
  });
  it('Check for title', () => {
    cy.contains('Welcome to Your Vue.js + TypeScript App');
  });
  // it('Does image render', () => {
  //   cy.fixture('images/who-we-are.jpg', null).then((logo) => {
  //     expect(Cypress.Buffer.isBuffer(logo)).to.be.true;
  //   });
  // });
});