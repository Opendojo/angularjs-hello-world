//
// test/e2e/controllers/mainSpec.js
//
describe("E2E: Testing Main Controller", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should have a allo allo yeoman', function() {
    browser().navigateTo('#/');
    expect(browser().location().path()).toBe("/");
    expect(element('.jumbotron.ng-scope>h1').text()).toContain("'Allo, 'Allo!");
    expect(element('.row.ng-scope>h4').text()).toContain("HTML5");
  });

});
