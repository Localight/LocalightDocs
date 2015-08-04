'use strict';

describe('Controller: NgrokCtrl', function () {

  // load the controller's module
  beforeEach(module('localAngularDocsApp'));

  var NgrokCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NgrokCtrl = $controller('NgrokCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NgrokCtrl.awesomeThings.length).toBe(3);
  });
});
