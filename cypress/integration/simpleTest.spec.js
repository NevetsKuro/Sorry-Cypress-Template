// import pages from '../fixtures/tech-blog-pages.json';

describe("Home Test", () => {
  beforeEach(() => {
    // cy.visit('http://tech.dripcapital.com/');
    cy.visit('/');
  });
  it('Random passed test', () => {
    expect(true).to.equal(true);
  });
  it('Check for Name', () => {
    cy.contains('Steven Fernandes').click();
    cy.url().should('include', 'stevenferns.me')
  });
  // it('Does image render', () => {
  //   cy.fixture('images/who-we-are.jpg', null).then((logo) => {
  //     expect(Cypress.Buffer.isBuffer(logo)).to.be.true;
  //   });
  // });
});