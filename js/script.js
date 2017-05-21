jQuery(function ($) {
  $(document).ready(function () {

    $("#font-size").keyup(function () {
      $('#prompt-content').css('font-size', $(this).val() + 'px');
    });

    var playing = false;
    var font_size = $('#font-size').val();
    var height = 10000;
    var scrollbar_width = $('.up').width();

    // controls

    // space bar
    $(document).keyup(function (evt) {
      if (evt.keyCode == 32) {
        if (playing) {
          playing = false;
          stop();
          console.log('stop playing');
        } else {
          playing = true;
          scroll(2000);
          console.log('start playing');
        }
      }
    });

    // scroll zone

    $(".up").hover(function (e) {
        $(this).mousemove(function (e) {
          var parentOffset = $(this).parent().offset();
          var relX = e.pageX - parentOffset.left;
          console.log('up ' + relX);
          playing = true;
          scroll(relX, 'up');
        });
      }, function (e) {
        playing = false;
        stop();
        console.log('stop playing');
      }
    );

    $(".down").hover(function (e) {
        $(this).mousemove(function (e) {
          var parentOffset = $(this).parent().offset();
          var relX = (e.pageX - parentOffset.left) * 5 - 1500;
          var down = 4000 - (relX);
          console.log('down ' + ' ' +  relX + ' ' +  down);
          playing = true;
          scroll(down, 'down');
        });
      }, function (e) {
        playing = false;
        stop();
        console.log('stop playing');
      }
    );

    function scroll(speed, direction) {
      console.log('start scrolling');
      var calc_speed = height / font_size * speed;
      if (direction === 'down') {
        $('.scrollWrapper').stop().animate({scrollTop: height}, calc_speed, "linear");
      } else if (direction === 'up') {
        $('.scrollWrapper').stop().animate({scrollTop: 0}, calc_speed, "linear");
      }
    }

    function stop() {
      console.log('stop');
      $('.scrollWrapper').stop();
    }

  });
});