//---------------------------------------------------------------------------------//
//FADE IN MENU
//---------------------------------------------------------------------------------//


$(document).ready(function(){
$('.mainmenu').show(2000)
});


//---------------------------------------------------------------------------------//
//BLUR ANIMATION
//---------------------------------------------------------------------------------//


$(function() {
  $({blurRadius: 100}).animate({blurRadius: -100}, {
  duration: 3000,
  easing: 'swing',

  step: function() {
  $('.logo, .playbtn').css({"filter": "blur("+this.blurRadius+"px)"
  });
  }
  });
  });


//---------------------------------------------------------------------------------//
//WHEN PLAYER CLICKS PLAY BUTTON, HIDE MENU AND SHOW ADJUSTMENT SCREEN
//---------------------------------------------------------------------------------//


$('.playbtn').click(function(){
  $('.mainmenu').hide(500)
  $('.adj').slideDown(500)
});


//---------------------------------------------------------------------------------//
//WHEN PLAYER CLICKS CONFIRM BUTTON, HIDE ADJUSTMENT AND SHOW CHARACTER SELECT
//---------------------------------------------------------------------------------//


$('.confirmbtn').click(function(){
  $('.adj').hide(500)
  $('.select').slideDown(500)
});

$('.char1').click(function(){
  $('.select').hide(500)
  $('.objfirst').slideDown(500)
  $('.level1').fadeIn(1000)
  $('.stats').slideDown(1000)
});

$('.char2').click(function(){
  $('.select').hide(500)
  $('.objfirst').slideDown(500)
  $('.level1').fadeIn(1000)
  $('.stats').slideDown(1000)
  $('.game').css("cursor", "url('img/char2.png') 16 16, auto")
});

$('.char3').click(function(){
  $('.select').hide(500)
  $('.objfirst').slideDown(500)
  $('.level1').fadeIn(1000)
  $('.stats').slideDown(1000)
  $('.game').css("cursor", "url('img/char3.png') 16 16, auto")
});


//---------------------------------------------------------------------------------//
//DISABLE ZOOM AFTER CLICKING 'CONFIRM' BUTTON
//---------------------------------------------------------------------------------//


$('.confirmbtn').click(function(){

window.ondragstart = function() { return false; }
$(document).keydown(function(event) {
if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        event.preventDefault();
     }

});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
       if (event.ctrlKey == true) {
       event.preventDefault();
       }
});

});


//---------------------------------------------------------------------------------//
//CLOSE OBJECTIVE (INITIAL) WINDOW
//---------------------------------------------------------------------------------//


$('.closebtnfirst').click(function(){
    $('.objfirst, .hover, .crash, .outarea').hide('slow')
    window.setInterval(function(){
    timer = timer - 1;
    $('.timer span').html(timer);
    }, 1000);
    });

    window.setInterval(function(){
    if (timer == 0) {
    $('.gameover, .gameoverbg').show('medium')
    $('.finalscore').text('Your score: ' + points);
    $('.stats').hide('medium')
    timersfx.remove()
    gameover.play()
    }

    if (timer <= 10) {
    $('.timer').css('color', 'red')
    $('.timer b').css('text-shadow', '0 0 20px red')
    timersfx.play();
    }
    else{
    $('.timer').css('color', 'white')
    $('.timer b').css('text-shadow', '0 0 20px #9ecaed')
    timersfx.pause();
    }
    });


//---------------------------------------------------------------------------------//
//CLOSE OBJECTIVE (GENERAL) WINDOW
//---------------------------------------------------------------------------------//


$('#next').click(function(){

    $(this).css('color','gray')
    $(this).css('opacity','0.2')
    $(this).css('text-shadow','none')
    $(this).css('cursor','crosshair')

    $('#back').css('color','white')
    $('#back').css('opacity','1.0')
    $('#back').css('cursor','pointer')

    $('.tut').hide('medium')
    $('.tutb').show('medium')
    });

$('#back').click(function(){

  $(this).css('color','gray')
  $(this).css('opacity','0.2')
  $(this).css('text-shadow','none')
  $(this).css('cursor','crosshair')

  $('#next').css('color','white')
  $('#next').css('opacity','1.0')
  $('#next').css('cursor','pointer')

  $('.tutb').hide('medium')
  $('.tut').show('medium')
    });

//---------------------------------------------------------------------------------//
//CLOSE OBJECTIVE (GENERAL) WINDOW
//---------------------------------------------------------------------------------//


$('.crashbtn').click(function(){
    $('.hover, .crash').hide('medium')
    });


//---------------------------------------------------------------------------------//
//START GAME ON HOVER (STARTPOINT) - ANIMATIONS START
//---------------------------------------------------------------------------------//

function animate() {
$(".a1").animate({right: '60%'}, 500);
$(".a1").animate({right: '-=60%'}, 800, animate)
$(".b1").animate({left: '60%'}, 1300);
$(".b1").animate({left: '-=60%'}, 500, animate)
$(".c1").animate({right: '60%'}, 800);
$(".c1").animate({right: '-=60%'}, 700, animate)
$(".d1").animate({left: '60%'}, 400);
$(".d1").animate({left: '-=60%'}, 900, animate)
}

animate();

$('.point1').mouseenter(function(){
    $('.hove1').hide()
    $('.outarea').show();
});

//---------------------------------------------------------------------------------//
//ANIMATE OBSTACLES
//---------------------------------------------------------------------------------//


function AnimateRotate1(angle,repeat) {
var duration= 1000;
setTimeout(function() {
    if(repeat && repeat == "infinite") {
        AnimateRotate1(angle,repeat);
    } else if ( repeat && repeat > 1) {
        AnimateRotate1(angle, repeat-1);
    }
},duration)
var $elem = $('.spinnera2, .spinnera4, .spinnera5, .spinnera6, .spinnera7');


$({deg: 0}).animate({deg: angle}, {
    duration: duration,
    step: function(now) {
        $elem.css({
            'transform': 'rotate('+ now +'deg)'
        });
    }
});
}
AnimateRotate1(360,"infinite");




function AnimateRotate(angle,repeat) {
var duration= 2000;
setTimeout(function() {
    if(repeat && repeat == "infinite") {
        AnimateRotate(angle,repeat);
    } else if ( repeat && repeat > 1) {
        AnimateRotate(angle, repeat-1);
    }
},duration)
var $elem1 = $('.spinnerb3');


$({deg: 0}).animate({deg: angle}, {
    duration: duration,
    step: function(now) {
        $elem1.css({
            'transform': 'rotate('+ now +'deg)'
        });
    }
});
}
AnimateRotate(-360,"infinite");


//---------------------------------------------------------------------------------//
//COLLISIONS/OBSTACLES - ON MOUSEENTER
//---------------------------------------------------------------------------------//


$('.laser, .outarea, .laserbox').mouseenter(function(){
    $('.crash, .hover, .hove').show()
    $('.outarea').hide()
    $(function() {
      $({blurRadius: 10}).animate({blurRadius: -10}, {
      duration: 500,
      easing: 'swing',

      step: function() {
      $('.crash').css({"filter": "blur("+this.blurRadius+"px)"
      });
      }
      });
      });

    });


//---------------------------------------------------------------------------------//
//CHANGE TO LEVEL 2
//---------------------------------------------------------------------------------//


$('.point2').mouseenter(function(){
    $('.outarea').show()
    $('.hove2').hide()

    });

$('.exit1').mouseenter(function(){
    $('.level1').remove()
    $('.level2').fadeIn(1000)
    $('.hover').hide()
    $('.outarea').hide()
    $(".bg").css("background-image", "url('img/bg3.png')");
    $(".game").css("box-shadow", "0 0 60px #e3595e");
    $('.currentlvl').html('<b>Level&emsp;2</b>')
    });


//---------------------------------------------------------------------------------//
//CHANGE TO LEVEL 3
//---------------------------------------------------------------------------------//


$('.point3').mouseenter(function(){
    $('.outarea').show()
    $('.hove3').hide()

    });

    $('.panel1').mouseenter(function(){
    panel.play()
    $(this).hide()
    $('.panel2').show()
    $('.e2, .f2').fadeOut('slow')
    $('.exit2').mouseenter(function(){
    level1.pause();
    level2.play();
    });

    $('.exit2').mouseenter(function(){
        $('.level2').remove()
        $('.level3').fadeIn(1000)
        $('.hover').hide()
        $('.outarea').hide()
        $(".bg").css("background-image", "url('img/bg4.png')");
        $(".game").css("box-shadow", "0 0 60px #375c71");
        $('.currentlvl').html('<b>Level&emsp;3</b>')
        });
        });

    var rotation = 0;

$('.panel3').mouseenter(function(){
panel.play()
$(this).hide()
$('.panel4').show()
$('.e3, .f3').fadeOut('slow')

$('.clickme').click(function() {
$('.b3').toggleClass('rotated');
});

$('.clickme').click(function() {
    rotation += 5;
    clickme.play()
    $('.b3').css({'-webkit-transform' : 'rotate('+ rotation +'deg)'});


    $('.exit3').mouseenter(function(){
        $('.level3').remove()
        $('.level4').fadeIn(1000)
        $('.hover').hide()
        $('.outarea').hide()
        $(".bg").css("background-image", "url('img/bg5.jpg')");
        $(".game").css("box-shadow", "0 0 60px #6a20c1");
        $('.currentlvl').html('<b>Level&emsp;4</b>')
        });
});

});

$('.point4').mouseenter(function(){
    $('.outarea').show()
    $('.hove4').hide()

    });

$('.exit4').mouseenter(function(){
level2.pause();
level3.play();
$('.gameover').remove()
$('.winner, .winnerbg').show('medium')
$('.finalscore').text('Your score: ' + points);
$('.stats').hide('medium')
timersfx.remove()
gameover.play()
});

//---------------------------------------------------------------------------------//
//TIMER / POINTS
//---------------------------------------------------------------------------------//


var points = 0;
var timer = 45;

$('.points span').html(points);
$('.timer span').html(timer);

$('.time').mouseenter(function(){
$(this).hide('fast');
timer = timer + 30;
});


//---------------------------------------------------------------------------------//
//ORBS - ON MOUSEENTER
//---------------------------------------------------------------------------------//


$('.orb').on( "mouseover", function() {
points = points + 100;
$('.points span').html(points);

$(this).hide('fast');
$('#start').show('fast');

});

$('.bigorb').on( "mouseover", function() {
points = points + 1000;
$('.points span').html(points);

$(this).hide('slow');
$('#start').show('fast');
});


//---------------------------------------------------------------------------------//
//RELOAD PAGE
//---------------------------------------------------------------------------------//


$(".gameoverbtn, .winnerbtn").click(function() {
window.location.reload()
});


//---------------------------------------------------------------------------------//
//AUDIO - PLAY MUSIC & SFX ON HOVER/CLICK
//---------------------------------------------------------------------------------//


var beepOne = $("#beep-one")[0];

$(document).ready(function(){
$(".playbtn, .closebtnfirst, .confirmbtn, .char1, .char2, .char3, .crashbtn, .gameoverbtn")
	.mouseenter(function() {
		hoversfx.play();
	})
});

$('.exit, .time').mouseenter(function(){
    portalsfx.play();
});

$(".startpoint").mouseenter(function(){
    pointsfx.play();
});

$(".orb, .bigorb").mouseenter(function(){
    orbsfx.play();
});

$(".obstacles, .outarea").mouseenter(function(){
    crashsfx.play();
});

$(".playbtn, .confirmbtn, .closebtnfirst, .crashbtn, .gameoverbtn, .winnerbtn").click(function(){
        clicksfx.play();
    });

$(".char1, .char2, .char3").click(function(){
        clicksfx.play();
        menu.pause();
        level1.play();
        });


//---------------------------------------------------------------------------------//
//AVOID BUGS/CHEATING (MOUSE RIGHT CLICK)
//---------------------------------------------------------------------------------//


$(function() {
$(this).bind("contextmenu", function(e) {
e.preventDefault();
});
});


//---------------------------------------------------------------------------------//
//END
//---------------------------------------------------------------------------------//
