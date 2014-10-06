'use strict';

describe('Directive: catGif', function () {

  // load the directive's module
  beforeEach(module('iloverandomcatgifsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cat-gif></cat-gif>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the catGif directive');
  }));
});
