/* Handles menu toggles */
$(document).ready(function() {
    $(".toggle-menu").hide();
    $("#menu-btn").click(function() {
        $(".toggle-menu").fadeToggle(300);
    });
    $(".toggle-menu").click(function() {
        $(this).fadeOut(300);
    });
});


/* Handles anchor links */
$(document).ready(function() {
    $('a[rel="anchor"]').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
});


/* handles section animation */
$(document).ready(function() {
  var animationController = new ScrollMagic.Controller({});
  var iliketext = $('.ilike1-text-an');
  var ilikeBG = $('.ilike-background');
  var ilikeimage = $('.image1');
  var titleFlowers = $('#title-flow');
  var titleDota = $('#title-dota');
  var iliketextD = $('.ilike2-text-dot');
  var ilikeBGD  = $('.ilike-background2');
  var ilikeimage2 = $('.image2');


  var ilikeT = new TimelineMax()
    .from(ilikeBG, 1.3, { ease: Power3.easeOut, x: '-100%' })
    .from(ilikeimage, 1.8, { ease: Power3.easeOut, autoAlpha: 0 }, '-=1')
    .from(iliketext, 1.6, { ease: Power3.easeOut, x: 100, autoAlpha: 0 }, '-=1.3');

  var ilikeD = new TimelineMax()
    .from(ilikeBGD, 1.3, { ease: Power3.easeOut, x: '100%'})
    .from(ilikeimage2, 1.8, { ease: Power3.easeOut, autoAlpha: 0 }, '-=1')
    .from(iliketextD, 1.6, { ease: Power3.easeOut, x: -100, autoAlpha: 0 }, '-=1.3');

  var titleflow = new TimelineMax()
    .from(titleFlowers, .9, { y: 100, autoAlpha: 0});

  var titledota = new TimelineMax()
    .from(titleDota, .4, { y: 100, autoAlpha: 0});

  var Scene = new ScrollMagic.Scene({ triggerElement: "#ilike-con", triggerHook: .6 })
    .setTween(ilikeT)
    .addTo(animationController);

  var Scene = new ScrollMagic.Scene({ triggerElement: '#title-flow', triggerHook: 1})
    .setTween(titleflow)
    .addTo(animationController);

  var Scene = new ScrollMagic.Scene({ triggerElement: '#title-dota', triggerHook: 1})
    .setTween(titledota)
    .addTo(animationController);

  var Scene = new ScrollMagic.Scene({ triggerElement: '#dota-con', triggerHook: .9})
    .setTween(ilikeD)
    .addTo(animationController);
});

// Make someone copyboard the email when clicking the email

document.getElementById("contact").addEventListener("click",function() {
        var t = document,
            e = t.createElement("input");
        t.body.appendChild(e), e.setAttribute("value","vickyymuahamad@gmail.com"),
        e.select(),t.execCommand("copy"), t.body.removeChild(e);
        });
