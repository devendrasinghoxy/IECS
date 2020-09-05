(function($) {
	"use strict";
	$('.nav_toggle').on('click', function(){
		$(".navigation_menu").toggleClass("menu_open");
		$(this).toggleClass("close_toggle");
	});
	//dropdown menu
	$(".navigation_menu ul li ul.sub_menu").parents("li").addClass("dropdown_toggle");
	$(".dropdown_toggle").append("<span class='caret_down'></span>");
	$(".navigation_menu ul li").children(".caret_down").on("click",function(){
		$(this).toggleClass("caret_up");
		$(this).prev("ul").slideToggle();
	});
	$(".megamenu_wrapper").parents("li").addClass("mega_dropdown");
	$(".mega_dropdown > a").append("<span class='mega_toggle'><i class='fa fa-angle-down'></span>");
	
	//mega menu js script
	var win_w = $(window).outerWidth();
	if(win_w < 992){
		$(".mega_dropdown").on('click', function(){
			$(this).children(".megamenu_wrapper").slideToggle(300);
		});
	}
	//fix header on scroll
	var win_scroll = $(window).scrollTop();
	$(window).on('bind scroll', function(e) {
		if ($(window).scrollTop() > 300) {
			$('.navigation_header').addClass('fixed_menu');
		} else {
			$('.navigation_header').removeClass('fixed_menu');
		}	
	}); 
	//Home slider
	if ($(".home_slider").length > 0){ 
		$(".home_slider").owlCarousel({
			singleItem:true,
			items:1,
			loop:true,
			margin:10,
			autoplay:false,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		});
	}
	//video carousel
	if ($(".related_post_carousel").length > 0){
		$(".related_post_carousel").owlCarousel({
			singleItem:true,
			items:4,
			loop:true,
			margin:10,
			autoplay:false,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsiveClass: true,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 2
				},
				992 : {
					items: 3
				},
				1199 : {
					items: 4
				},
			}
		});
	}
	//onclick popup js
	$('.popup_icon').on('click', function() {
		$('.popup_wrapper').removeClass("open_popup");
		var popup_show = $(this).attr('data-show');
		$('#'+ popup_show).addClass("open_popup");	
	});
	$('.popup_wrapper').on('click', function(){
		$(this).removeClass("open_popup");
	});
	$('.close_btn').on('click', function(){
		$('.popup_wrapper').removeClass("open_popup");
	});
	$('.popup_inner_content').on('click', function(e){
		e.stopPropagation();
	});	
	//load event
	$(window).on('load', function() {
		$(".ayu_loader").delay(600).fadeOut("slow");
		//add class on focused in input
		$(".input").each(function() {
			var default_val = $(this).val();
			if ( default_val !== "") {
				$(this).parents('.form_group').addClass('focused');
			}
			else{
				$(this).parents('.form_group').removeClass('focused');
				
			}
		});
	});
	//add class on focus in label
	$('.input').focus(function(){
		$(this).parents('.form_group').addClass('focused');
	});
	//Remove class on focus in label
	$('.input').blur(function(){
		var inputValue = $(this).val();
		if ( inputValue == "" ) {
			$(this).parents('.form_group').removeClass('focused');  
		} 
	});
	//blog slideToggle
	$('.blog_filter_btn').on('click', function(){
		$(".blog_sidebar").slideToggle(200);
	});
	//slider img call in bg
	$(".slide_img").each(function () {
		var img_path = $(this).attr("src");
		$(this).parents(".slide_item").css("background-image","url("+img_path+")");
	});
})(jQuery);