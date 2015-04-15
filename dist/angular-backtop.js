var backtop = angular.module('angular.backtop', []);

backtop.directive('backTop', [function() {
  return {
    restrict: 'A',
    scope: {
      text: "@buttonText",
      speed: "@scrollSpeed"
    },
    link: function(scope, element) {

      var self = this;

      self.currentYPosition = function() {
        if (self.pageYOffset)
          return self.pageYOffset;
        if (document.documentElement && document.documentElement.scrollTop)
          return document.documentElement.scrollTop;
        if (document.body.scrollTop)
          return document.body.scrollTop;
        return 0;
      };

      self.smoothScroll = function(eID) {
        var startY = self.currentYPosition();
        var stopY = 0;
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
          scrollTo(0, stopY);
          return;
        }
        var speed = Math.round(scope.speed / 100);
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
          for (var i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step;
            if (leapY > stopY) leapY = stopY;
            timer++;
          }
          return;
        }
        for (var i = startY; i > stopY; i -= step) {
          setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
          leapY -= step;
          if (leapY < stopY) leapY = stopY;
          timer++;
        }
      };

      element.append('<button id="back">'+scope.text+'</button');
      self.button = document.getElementById('back');

      self.button.addEventListener('click', function(){
        self.smoothScroll();
        self.button.classList.remove('show');
      });

      window.addEventListener('scroll', function() {
        console.log(document.body.offsetHeight);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          self.button.classList.add('show');
          console.log('showing');
        } else{
          self.button.classList.remove('show');
          console.log('hiding');
        }
      });
    }
  };

}]);
