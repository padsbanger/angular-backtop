'use strict';

describe('backtop directive', function () {
  var scope, element;

  beforeEach(module('angular.backtop'));

  beforeEach(inject(function ($rootScope, $compile) {

    scope = $rootScope.$new();

    element = $compile('<back-top scroll-speed=600 button-theme="light" button-text="Take me back"></back-top>')(scope);

    scope.$digest();
  }));

  it('should contain a compiled button', function() {
    expect(element[0].innerHTML).toContain('button');
  });

});
