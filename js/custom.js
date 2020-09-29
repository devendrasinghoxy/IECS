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
			autoplay:true,
			autoplayTimeout:5000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		});
	}
	//Client carousel
	if ($(".client_slider").length > 0){
		$(".client_slider").owlCarousel({
			items:5,
			loop:true,
			margin:10,
			autoplay:true,
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
				480 : {
					items: 2
				},
				768 : {
					items: 3
				},
				992 : {
					items: 4
				},
				1199 : {
					items: 5
				}
			}
		});
	}
	//Gallery carousel
	if ($(".gallery_slider").length > 0){
		$(".gallery_slider").owlCarousel({
			items:2,
			loop:true,
			margin:10,
			autoplay:true,
			autoplayTimeout:5000,
			autoplaySpeed:2000,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsiveClass: true,
			responsive : {
				0 : {
					items: 1
				},
				600 : {
					items: 2
				},
				1199 : {
					items: 2
				}
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
	//popup gallery js
	if ($(".gallery_popup").length > 0){
		$('.gallery_popup').magnificPopup({
			delegate: '.gallery_icon',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'my_zoom_in',
			fixedContentPos: true,
			fixedBgPos: true,
			overflowY: false,
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small></small>';
				}
			}
		});
	}
	//counter Number
	if($('.counter_n').length > 0){
		$('.counter_n').appear(function() {
			$('.counter_n').each(count);
				function count(options) {	
				var $this = $(this);
				options = $.extend({}, options || {}, $this.data('countToOptions') || {});
				$this.countTo(options);
			}
		});
	}
})(jQuery);