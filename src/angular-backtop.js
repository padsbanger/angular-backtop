var backtop = angular.module('backtop', []);

backtop.directive('backTop', [function() {
  return {
    restrict: 'A',
    scope: {
      text: "@buttonText",
      speed: "@scrollSpeed"
    },
    link: function(scope, element) {

      function currentYPosition() {
        if (self.pageYOffset)
          return self.pageYOffset;
        if (document.documentElement && document.documentElement.scrollTop)
          return document.documentElement.scrollTop;
        if (document.body.scrollTop)
          return document.body.scrollTop;
        return 0;
      }

      function elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
          node = node.offsetParent;
          y += node.offsetTop;
        }
        return y;
      }

      function smoothScroll(eID) {
        var startY = currentYPosition();
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
      }

      element.append('<button id="back">'+scope.text+'</button');
      var button = document.getElementById('back');

      button.addEventListener('click', function(){
        smoothScroll();
        button.classList.remove('show');
      });
      window.onscroll = function(ev) {
        console.log(document.body.offsetHeight);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          button.classList.add('show');
          console.log('showing');
        } else{
          button.classList.remove('show');
          console.log('hiding');
        }
      };
    }
  };

}]);
