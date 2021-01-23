/*-------------------------
スクロールして途中で固定
--------------------------*/
 $(window).on("load scroll",function(){
    let $sideBar = $(" .side-bar"),
				$sideBox = $(".side-box"),
        $distance = $sideBar.offset().top,
        $scrollVal = $(window).scrollTop();
	/* ブラウザに映っているエリアがside-barのTopを超えたら */
    if($scrollVal>$distance){
        $sideBox.css("margin-top",$scrollVal-$distance);
    }else{
        $sideBox.css("margin-top", 0);
    }
});


//-------------ハンバーガーメニュー---------------
$(".header-menu").on("touchstart", function(){
	var display = getComputedStyle(document.documentElement).getPropertyValue('--display-menu');

	$(this).toggleClass("active");

	if(display == "block"){
		document.documentElement.style.setProperty('--display-menu',"none");
	}else{
		document.documentElement.style.setProperty('--display-menu',"block");
	}


});






//---------------bxslider--------------
$(document).ready(function() {
	$('.bxslider').bxSlider({
		mode: 'fade',
		speed: 1000,
		pause: 3500,
		auto: true,
		pager: true,
		controls: false,
		touchEnabled: true,
    infiniteLoop: true,
    hideControlOnEnd: false
	});

	// 画面リサイズ時にスライド幅を再設定
	$(window).on('resize', function(){
		var windowWidth = $(window).width();
		$('.bxslider li').width(windowWidth)
	});
});


//---------リンクのスムーズスクロール-------------
$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});




//--------Overflow-------
$(window).on("resize", function () {
        if ($("#article1").height() < $(".sentence1").height()) {
            $("#article1").addClass("overflow");
        } else {
            $("#article1").removeClass("overflow");
        }
    });

    $(function () {
       if ($("#article1").height() < $(".sentence1").height()) {
            $("#article1").addClass("overflow");
        } else {
            $("#article1").removeClass("overflow");
        }
    });

$(window).on("resize", function () {
        if ($("#article2").height() < $(".sentence2").height()) {
            $("#article2").addClass("overflow");
        } else {
            $("#article2").removeClass("overflow");
        }
    });

    $(function () {
       if ($("#article2").height() < $(".sentence2").height()) {
            $("#article2").addClass("overflow");
        } else {
            $("#article2").removeClass("overflow");
        }
    });

$(window).on("resize", function () {
        if ($("#article3").height() < $(".sentence3").height()) {
            $("#article3").addClass("overflow");
        } else {
            $("#article3").removeClass("overflow");
        }
    });
    $(function () {
       if ($("#article3").height() < $(".sentence3").height()) {
            $("#article3").addClass("overflow");
        } else {
            $("#article3").removeClass("overflow");
        }
    });
