'use strict';

describe('backtop directive', function () {
  var scope, element2

  beforeEach(module('angular.backtop'));

  beforeEach(inject(function ($rootScope, $compile) {

    scope = $rootScope.$new();

    element2 = $compile('<div back-top scroll-speed=300 button-text="Take me back"></div>')(scope);

    scope.$digest();
  }));

  it('should contain field name', function() {
    // var innerHTML = element[0].innerHTML;

    console.log(element2);

    // expect(innerHTML.length > 0).toBe(true);
  });

});
