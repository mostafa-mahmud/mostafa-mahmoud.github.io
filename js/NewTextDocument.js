/*global console,prompt,$,alert*/
/*the way to call an element in jquery it write it like css with dot to the class and hach in id*/

$(document).ready(function () {          //(document).ready it is active this function when the file html load without waiting the photos
    "use strict";
	
	
	/***************************ohc****************************************************/
	
	/********the movement************/
	var z = $(".ohc> .content> .container> .slide-cont"),
		x = parseInt(z.css("margin-left")),
		c = x;
	(function xxx () {
		var b = setInterval(function () {
			if (c <= -900) {
				c = 0;
				z.css("margin-left", c);
			} else {
				c = c - 160;
				z.css("margin-left", c);
			}
			/*z.mouseenter(function () {
				clearInterval(b);
			});
			z.mouseleave(function(){
				xxx();
			});*/	
		}, 2000);/*the speed share by the interval and the transition in css*/
	})();
	/*******the buttons**********/
	/*right*/
	var q = 0;
	$(".ohc> header> .container> span").first().on("click", function () {
		/*the arows*/
		if (q >= 0) {					/*if  the s go to the first slide and it will go up*/
			q = -900;					/* make it go to the last slide */
			$(this).parents(".ohc").find(".slide-cont").css("margin-left", q);
		
		/*the arows*/
		} else {						/*if not */
			q = q + 160;				/*make it go ud slide by slide*/
			$(this).parents(".ohc").find(".slide-cont").css("margin-left", q);
		}
	});
	/*left*/
	$(".ohc> header> .container> span").last().on("click", function () {
		/*the arows*/
		if (q <= -900) {			/*if s less then the last slide*/
			q = 0;					/*make it back tothe first*/
			$(this).parents(".ohc").find(".slide-cont").css("margin-left", q);
		/*the arows*/
		} else {					/*if not*/
			q = q - 160;			/*make it down slide by slide*/
			$(this).parents(".ohc").find(".slide-cont").css("margin-left", q);
								/*the part for the color of the controll panel*/
		}
	});
	/***************************ohs*************************/
	/**********************************nav bar**********************************************/
	
	/***********the button************/
	$(window).resize(function () {
		$("header nav").height(60);
	});
	
	$("header nav .container div button").on("click", function () {
		if ($(this).parents("nav").height() <= 60) {
			$(this).parents("nav").css("height", 650);
			$(this).parents("nav").css("background-image", "");
			$(this).children("span").eq(1).css({"transform": "rotate(0deg) translatex(550px)", "opacity": "0"});
			$(this).children("span").first().css("transform", "rotate(-3020deg) translate(-4px,-6px)");
			$(this).children("span").last().css("transform", "rotate(3020deg) translate(-4px,6px)");
			
		} else {
			$(this).parents("nav").css("height", 60);
			$(this).children("span").eq(1).css({"transform": "rotate(0deg) translateY(0px)", "opacity": "1"});
			$(this).children("span").first().css("transform", "rotate(0deg) translate(0px)");
			$(this).children("span").last().css("transform", "rotate(0deg) translate(0px)");
			
		}
	});
	
	/*for the inside list*/
	$("body header nav .container ul li:nth-of-type(3)").hover(function () {
		$("header nav .container ul li ul").show(500);
	}, function () {
		$("header nav .container ul li ul").hide(500);
	});
	/**********************************nav bar**********************************************/
	/***************************for slider*************************************/
	/**************************movement of the slider*********************************/

	/*******************/
/*	var r = $(".slide_container"),
		l = parseInt(r.css("margin-top")),
		ss = l;
	(function sss () {
		var o = setInterval(function lol () {
			
			if (ss <= -1200) {
				ss = 0;
				r.css("margin-top", ss);
				$("header> .slides> div.slide_container> div.controll-panel> div.con span").removeClass("active");
				$("header> .slides> div.slide_container> div.controll-panel> div.con span:nth-of-type(1)").addClass("active");
			} else {
				ss = ss - 600;
				if (ss === -600) {
					$("header> .slides> div.slide_container> div.controll-panel> div.con span").removeClass("active");
					$("header> .slides> div.slide_container> div.controll-panel> div.con span:nth-of-type(2)").addClass("active");
				} else if (ss === -1200) {
					$("header> .slides> div.slide_container> div.controll-panel> div.con span").removeClass("active");
					$("header> .slides> div.slide_container> div.controll-panel> div.con span:last-of-type").addClass("active");
				}
				r.css("margin-top", ss);
			}
			
			/*r.mouseenter(function () {
				clearInterval(o);
			});
			r.mouseleave(function () {
				clearInterval(o);	
				sss()	
			});*/
			
				
/*		}, 2000);	/*the speed share by the interval and the transition in css*/
/*	})();

	
								/*left button  arow*/
/*	var s = 0;
	$(".slides .slide_container .slide .container span.lleft").on("click", function () {
		/*the arows*/
/*		if (s <= -1200) {			/*if s less then the last slide*/
/*			s = 0;					/*make it back tothe first*/
/*			$(this).parents(".slide_container").css("margin-top", s);
		
			/*for control panel spans*/
/*			$("header> .slides> div.slide_container> div.controll-panel> div.con span").removeClass("active");
			$("header> .slides> div.slide_container> div.controll-panel> div.con span:nth-of-type(1)").addClass("active");
		
		/*the arows*/
/*		} else {					/*if not*/
/*			s = s - 600;			/*make it down slide by slide*/
/*			$(this).parents(".slide_container").css("margin-top", s);
								/*the part for the color of the controll panel*/
			
			/*for control panel spans*/
/*			if (s === -600) {
/*				$("header> .slides> div.slide_container> div.controll-panel> div.con span").removeClass("active");
/*				$("header> .slides> div.slide_container> div.controll-panel> div.con span:nth-of-type(2)").addClass("active");

/*			} else if (s === -1200) {
				$("header> .slides> div.slide_container> div.controll-panel> div.con span").removeClass("active");
				$("header> .slides> div.slide_container> div.controll-panel> div.con span:last-of-type").addClass("active");
			}
		}
	});
	
									/*right button arow*/
/*	$(".slides .slide_container .slide .container span.rright").on("click", function () {
		/*the arows*/
/*		if (s >= 0) {					/*if  the s go to the first slide and it will go up*/
/*			s = -1200;					/* make it go to the last slide */
/*			$(this).parents(".slide_container").css("margin-top", s);
		
			/*for control panel spans*/
/*			$("header> .slides> div.slide_container> div.controll-panel> div.con span").removeClass("active");
/*			$("header> .slides> div.slide_container> div.controll-panel> div.con span:last-of-type").addClass("active");
		
		/*the arows*/
/*		} else {						/*if not */
/*			s = s + 600;				/*make it go ud slide by slide*/
/*			$(this).parents(".slide_container").css("margin-top", s);
			
			/*for control panel spans*/
/*			if (s === -600) {
/*				$("header> .slides> div.slide_container> div.controll-panel> div.con span").removeClass("active");
				$("header> .slides> div.slide_container> div.controll-panel> div.con span:nth-of-type(2)").addClass("active");

			} else if (s === 0) {
				$("header> .slides> div.slide_container> div.controll-panel> div.con span").removeClass("active");
				$("header> .slides> div.slide_container> div.controll-panel> div.con span:first-of-type").addClass("active");
			}
		}
	});
	
	/***************************for slider*************************************/

});