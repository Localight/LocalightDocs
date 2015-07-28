'use strict';

describe('Controller: TriconcodesCtrl', function () {

  // load the controller's module
  beforeEach(module('localAngularDocsApp'));

  var TriconcodesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TriconcodesCtrl = $controller('TriconcodesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TriconcodesCtrl.awesomeThings.length).toBe(3);
  });
});
