'use strict';

describe('Controller: OwnersCtrl', function () {

  // load the controller's module
  beforeEach(module('localAngularDocsApp'));

  var OwnersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OwnersCtrl = $controller('OwnersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OwnersCtrl.awesomeThings.length).toBe(3);
  });
});
