'use strict';

describe('Controller: ManualsCtrl', function () {

  // load the controller's module
  beforeEach(module('localAngularDocsApp'));

  var ManualsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManualsCtrl = $controller('ManualsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ManualsCtrl.awesomeThings.length).toBe(3);
  });
});
