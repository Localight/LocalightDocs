'use strict';

describe('Controller: RoutespageCtrl', function () {

  // load the controller's module
  beforeEach(module('localAngularDocsApp'));

  var RoutespageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoutespageCtrl = $controller('RoutespageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RoutespageCtrl.awesomeThings.length).toBe(3);
  });
});
