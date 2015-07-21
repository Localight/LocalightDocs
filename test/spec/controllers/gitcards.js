'use strict';

describe('Controller: GitcardsCtrl', function () {

  // load the controller's module
  beforeEach(module('localAngularDocsApp'));

  var GitcardsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GitcardsCtrl = $controller('GitcardsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GitcardsCtrl.awesomeThings.length).toBe(3);
  });
});
