/* Shutter.js */
!function(t){theme={_init:function(){api.options.slide_links&&t(vars.slide_list).css("margin-left",-t(vars.slide_list).width()/2),api.options.autoplay?api.options.progress_bar&&theme.progressBar():(t(vars.play_button).attr("src")&&t(vars.play_button).attr("src",vars.image_path+"play.png"),api.options.progress_bar&&t(vars.progress_bar).stop().css({left:-t(window).width()})),t(vars.thumb_tray).css({bottom:-t(vars.thumb_tray).height()}),t(vars.tray_button).toggle(function(){return t(vars.thumb_tray).stop().animate({bottom:0,avoidTransforms:!0},300),t(vars.tray_arrow).attr("src")&&t(vars.tray_arrow).attr("src",vars.image_path+"button-tray-down.png"),!1},function(){return t(vars.thumb_tray).stop().animate({bottom:-t(vars.thumb_tray).height(),avoidTransforms:!0},300),t(vars.tray_arrow).attr("src")&&t(vars.tray_arrow).attr("src",vars.image_path+"button-tray-up.png"),!1}),t(vars.thumb_list).width(t("> li",vars.thumb_list).length*t("> li",vars.thumb_list).outerWidth(!0)),t(vars.slide_total).length&&t(vars.slide_total).html(api.options.slides.length),api.options.thumb_links&&(t(vars.thumb_list).width()<=t(vars.thumb_tray).width()&&t(vars.thumb_back+","+vars.thumb_forward).fadeOut(0),vars.thumb_interval=Math.floor(t(vars.thumb_tray).width()/t("> li",vars.thumb_list).outerWidth(!0))*t("> li",vars.thumb_list).outerWidth(!0),vars.thumb_page=0,t(vars.thumb_forward).click(function(){vars.thumb_page-vars.thumb_interval<=-t(vars.thumb_list).width()?(vars.thumb_page=0,t(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:100,easing:"easeOutExpo"})):(vars.thumb_page=vars.thumb_page-vars.thumb_interval,t(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:100,easing:"easeOutExpo"}))}),t(vars.thumb_back).click(function(){vars.thumb_page+vars.thumb_interval>0?(vars.thumb_page=Math.floor(t(vars.thumb_list).width()/vars.thumb_interval)*-vars.thumb_interval,t(vars.thumb_list).width()<=-vars.thumb_page&&(vars.thumb_page=vars.thumb_page+vars.thumb_interval),t(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:100,easing:"easeOutExpo"})):(vars.thumb_page=vars.thumb_page+vars.thumb_interval,t(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:100,easing:"easeOutExpo"}))})),t(vars.next_slide).click(function(){api.nextSlide()}),t(vars.prev_slide).click(function(){api.prevSlide()}),jQuery.support.opacity&&t(vars.prev_slide+","+vars.next_slide).mouseover(function(){t(this).stop().animate({opacity:1},0)}).mouseout(function(){t(this).stop().animate({opacity:.5},0)}),api.options.thumbnail_navigation&&(t(vars.next_thumb).click(function(){api.nextSlide()}),t(vars.prev_thumb).click(function(){api.prevSlide()})),t(vars.play_button).click(function(){api.playToggle()}),api.options.mouse_scrub&&t(vars.thumb_tray).mousemove(function(a){var s=t(vars.thumb_tray).width(),r=t(vars.thumb_list).width();if(r>s){var e=1,i=a.pageX-e;(i>10||i<-10)&&(e=a.pageX,newX=(s-r)*(a.pageX/s),i=parseInt(Math.abs(parseInt(t(vars.thumb_list).css("left"))-newX)).toFixed(0),t(vars.thumb_list).stop().animate({left:newX},{duration:3*i,easing:"easeOutExpo"}))}}),t(window).resize(function(){api.options.progress_bar&&!vars.in_animation&&(vars.slideshow_interval&&clearInterval(vars.slideshow_interval),api.options.slides.length-1>0&&clearInterval(vars.slideshow_interval),t(vars.progress_bar).stop().css({left:-t(window).width()}),!vars.progressDelay&&api.options.slideshow&&(vars.progressDelay=setTimeout(function(){vars.is_paused||(theme.progressBar(),vars.slideshow_interval=setInterval(api.nextSlide,api.options.slide_interval)),vars.progressDelay=!1},1e3))),api.options.thumb_links&&vars.thumb_tray.length&&(vars.thumb_page=0,vars.thumb_interval=Math.floor(t(vars.thumb_tray).width()/t("> li",vars.thumb_list).outerWidth(!0))*t("> li",vars.thumb_list).outerWidth(!0),t(vars.thumb_list).width()>t(vars.thumb_tray).width()?(t(vars.thumb_back+","+vars.thumb_forward).fadeIn("fast"),t(vars.thumb_list).stop().animate({left:0},200)):t(vars.thumb_back+","+vars.thumb_forward).fadeOut("fast"))})},goTo:function(){api.options.progress_bar&&!vars.is_paused&&(t(vars.progress_bar).stop().css({left:-t(window).width()}),theme.progressBar())},playToggle:function(a){"play"==a?(t(vars.play_button).attr("src")&&t(vars.play_button).attr("src",vars.image_path+"pause.png"),api.options.progress_bar&&!vars.is_paused&&theme.progressBar()):"pause"==a&&(t(vars.play_button).attr("src")&&t(vars.play_button).attr("src",vars.image_path+"play.png"),api.options.progress_bar&&vars.is_paused&&t(vars.progress_bar).stop().css({left:-t(window).width()}))},beforeAnimation:function(a){if(api.options.progress_bar&&!vars.is_paused&&t(vars.progress_bar).stop().css({left:-t(window).width()}),t(vars.slide_caption).length&&(api.getField("title")?t(vars.slide_caption).html(api.getField("title")):t(vars.slide_caption).html("")),vars.slide_current.length&&t(vars.slide_current).html(vars.current_slide+1),api.options.thumb_links&&(t(".current-thumb").removeClass("current-thumb"),t("li",vars.thumb_list).eq(vars.current_slide).addClass("current-thumb"),t(vars.thumb_list).width()>t(vars.thumb_tray).width()))if("next"==a)0==vars.current_slide?(vars.thumb_page=0,t(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:500,easing:"easeOutExpo"})):t(".current-thumb").offset().left-t(vars.thumb_tray).offset().left>=vars.thumb_interval&&(vars.thumb_page=vars.thumb_page-vars.thumb_interval,t(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:500,easing:"easeOutExpo"}));else if("prev"==a)if(vars.current_slide==api.options.slides.length-1)vars.thumb_page=Math.floor(t(vars.thumb_list).width()/vars.thumb_interval)*-vars.thumb_interval,t(vars.thumb_list).width()<=-vars.thumb_page&&(vars.thumb_page=vars.thumb_page+vars.thumb_interval),t(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:500,easing:"easeOutExpo"});else if(t(".current-thumb").offset().left-t(vars.thumb_tray).offset().left<0){if(vars.thumb_page+vars.thumb_interval>0)return!1;vars.thumb_page=vars.thumb_page+vars.thumb_interval,t(vars.thumb_list).stop().animate({left:vars.thumb_page},{duration:500,easing:"easeOutExpo"})}},afterAnimation:function(){api.options.progress_bar&&!vars.is_paused&&theme.progressBar()},progressBar:function(){t(vars.progress_bar).stop().css({left:-t(window).width()}).animate({left:0},api.options.slide_interval)}},t.supersized.themeVars={progress_delay:!1,thumb_page:!1,thumb_interval:!1,image_path:"img/",play_button:"#pauseplay",next_slide:"#nextslide",prev_slide:"#prevslide",next_thumb:"#nextthumb",prev_thumb:"#prevthumb",slide_caption:"#slidecaption",slide_current:".slidenumber",slide_total:".totalslides",slide_list:"#slide-list",thumb_tray:"#thumb-tray",thumb_list:"#thumb-list",thumb_forward:"#thumb-forward",thumb_back:"#thumb-back",tray_arrow:"#tray-arrow",tray_button:"#tray-button",progress_bar:"#progress-bar"},t.supersized.themeOptions={progress_bar:1,mouse_scrub:0}}(jQuery);