// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
	(function() {
		var noop = function() {};
		var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
		var length = methods.length;
		var console = window.console = {};
		while (length--) {
			console[methods[length]] = noop;
		}
	}());
}
var startTablet = 961;
var startMobile = 622;
$(function() {
	setMainPromoSliderWidth();
	setProjectsSlidersW()
	$(window).resize(function() {
		setMainPromoSliderWidth();
		setProjectsSlidersW()
	});
	// init .main-promo-slider slick-slider
	$(".main-promo-slider").slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 1,
		dots: true,
		arrows: false
	});
	setInfoDataSlider($(".main-promo-slider"));
	$(".main-promo-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
		setInfoDataSlider($(this), $(this).find(".slick-track > div").eq(nextSlide + 1));
	});
	// init .projects-slider slick-slider
	$(".projects-slider").slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 1,
		dots: true,
		arrows: true,
		prevArrow: '<span class="icon-long-arr-l"></span>',
		nextArrow: '<span class="icon-long-arr-r"></span>'
	});
	// add block with count in .projects-slider
	$(".projects-slider").each(function() {
		var slider = $(this);
		var counterBlock = $("<div class='slick-counter'></div>");
		var allItems = slider.find(".project-slider-item:not(.slick-cloned):last").data("slick-index") + 1;
		var nowItem = slider.find(".project-slider-item.slick-current").data("slick-index");
		nowItem++;
		var resultText = nowItem + " / " + allItems;
		counterBlock.text(resultText);
		slider.append(counterBlock);
	});
	setInfoDataSlider($(".projects-slider"));
	$(".projects-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
		setInfoDataSlider($(this), $(this).find(".slick-track > div").eq(nextSlide + 1));
		var allItems = $(this).find(".project-slider-item:not(.slick-cloned):last").data("slick-index") + 1;
		var text = (nextSlide + 1) + " / " + allItems;
		$(this).find(".slick-counter").text(text);
	});
	// init .equipment-slider slick-slider
	$(".equipment-slider").slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 5,
		dots: true,
		arrows: true,
		prevArrow: '<span class="icon-long-arr-l"></span>',
		nextArrow: '<span class="icon-long-arr-r"></span>',
		responsive: [
		    {
		      breakpoint: 1440,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		]
	});
	// init .multisliders-slider slick-slider
	$(".multisliders-slider").slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 5,
		dots: false,
		arrows: true,
		prevArrow: '<span class="icon-long-arr-l"></span>',
		nextArrow: '<span class="icon-long-arr-r"></span>',
		responsive: [
		    {
		      breakpoint: 1440,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		]
	});
	$(".multislider-tab").click(function() {
		if(!$(this).hasClass("active")) {
			var itemNum = $(this).data("item");
			$(".multislider-tab.active, .multislider-link.active, .multisliders-slider.active").removeClass("active");
			$(".multislider-tab").eq(itemNum).addClass("active");
			$(".multislider-link").eq(itemNum).addClass("active");
			$(".multisliders-slider").eq(itemNum).addClass("active");
		}
	});
	// for search form in header
	$(document).on("click", ".head-icons-wrap .icon-search", function(e) {
		e.preventDefault();
		$(".head-search-form").addClass("active");
		// $('.head-search-form').css({
		// 	'width': $(this).position().left - $('.logo-head').innerWidth(),
		// });
	});
	$(document).on("click", ".head-search-form .icon-close", function() {
		$(".head-search-form").removeClass("active");
	});

	$(document).on("click", ".load_more_text", function() {
		$(".main-description").addClass("active");
	});

	// scroll header
    headerScroll();
    $(window).scroll(function() {
        headerScroll();
    });
    $(window).resize(function() {
        headerScroll();
    });
    // init .slider-width-desc slick-slider
    $(".slider-width-desc").slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 1,
		dots: false,
		arrows: true,
		prevArrow: '<span class="icon-long-arr-l"></span>',
		nextArrow: '<span class="icon-long-arr-r"></span>'
	});
	// switch .desc-tabs
	$(".desc-tabs__tab").click(function() {
		if(!$(this).hasClass("active")) {
			$(".desc-tabs__tab.active").removeClass("active");
			var object = $(this);
			object.addClass("active");
			var item = object.data("item");
			$(".desc-tabs__cont.active").removeClass("active");
			$(".desc-tabs__cont").eq(item).addClass("active");
		}
	});
	// init .smpl-txt-sldr-count slick-slider
	$(".smpl-txt-sldr-count").slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 1,
		dots: true,
		arrows: true,
		prevArrow: '<span class="icon-long-arr-l"></span>',
		nextArrow: '<span class="icon-long-arr-r"></span>'
	});
	// add block with count in .smpl-txt-sldr-count
	$(".smpl-txt-sldr-count").each(function() {
		var slider = $(this);
		var counterBlock = $("<div class='slick-counter'></div>");
		var allItems = slider.find(".smpl-txt-sldr-count__item:not(.slick-cloned):last").data("slick-index") + 1;
		var nowItem = slider.find(".smpl-txt-sldr-count__item.slick-current").data("slick-index");
		nowItem++;
		var resultText = nowItem + " / " + allItems;
		counterBlock.text(resultText);
		slider.append(counterBlock);
	});
	$(".smpl-txt-sldr-count").on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var allItems = $(this).find(".smpl-txt-sldr-count__item:not(.slick-cloned):last").data("slick-index") + 1;
		var text = (nextSlide + 1) + " / " + allItems;
		$(this).find(".slick-counter").text(text);
	});
	// switch view .order-form
	$(".switch-form span").click(function() {
		$(this).parent().toggleClass("show");
		$(this).closest(".order-form").toggleClass("short-form");
	});
	// change work placeholder (IE9+)
	// $('input,textarea').each(function() {
	// 	if($(this).attr('placeholder')) {
	// 		$(this).data("placeholder", $(this).attr('placeholder'));
	// 		$(this).attr("placeholder", "");
	// 		$(this).val($(this).data('placeholder')).addClass("placeholder");
	// 	}
	// });
	$('input, textarea').focus(function(){
		if($(this).val() == $(this).data('placeholder')) {
			$(this).val("").removeClass("placeholder");
		}
	});
	// $('input, textarea').blur(function(){
	// 	if($(this).val() == "") {
	// 		$(this).val($(this).data('placeholder')).addClass("placeholder");
	// 	}
	// });
		// init .example-slider slick-slider
	$(".example-slider").slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 1,
		dots: false,
		arrows: true,
		prevArrow: '<span class="icon-long-arr-l"></span>',
		nextArrow: '<span class="icon-long-arr-r"></span>'
	});
	// add block with count in .example-slider-count
	$(".example-slider").each(function() {
		var slider = $(this);
		var counterBlock = $("<div class='slick-counter'></div>");
		var allItems = slider.find(".example-slider__item:not(.slick-cloned):last").data("slick-index") + 1;
		var nowItem = slider.find(".example-slider__item.slick-current").data("slick-index");
		nowItem++;
		var resultText = nowItem + " / " + allItems;
		counterBlock.text(resultText);
		slider.append(counterBlock);
	});
	$(".example-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var allItems = $(this).find(".example-slider__item:not(.slick-cloned):last").data("slick-index") + 1;
		var text = (nextSlide + 1) + " / " + allItems;
		$(this).find(".slick-counter").text(text);
	});
	$(".add-file-button").on("click", function() {
		$(this).siblings("input[type='file']").click();
	});
	// animate .example-block1
	$(".example-block1__top .btn_blue").click(function() {
		$(this).closest(".example-block1").toggleClass("show").find(".example-block1__desc").slideToggle();
	});
	$(".example-block1__desc .btn_blue").click(function() {
		$(this).closest(".example-block1").removeClass("show").find(".example-block1__desc").slideUp();
	});
	// animate .example-block2
	$(".example-block2__top .btn_blue").click(function() {
		$(this).closest(".example-block2").toggleClass("show").find(".example-block2__desc").slideToggle();
	});
	$(".example-block2__desc .btn_blue").click(function() {
		$(this).closest(".example-block2").removeClass("show").find(".example-block2__desc").slideUp();
	});
	// animate scroll from .anchors-menu
	// $(".anchors-menu a").click(function(e) {
	// 	e.preventDefault();
	// 	var defScroll = 0;
	// 	var id = $(this).attr("href").slice(1);
	// 	$("html, body").animate({
	// 		scrollTop: $("#" + id).offset().top - 90
	// 	}, 500);
	// });
	// init .news-slider slick-slider
	$(".news-slider").slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<span class="icon-long-arr-l"></span>',
		nextArrow: '<span class="icon-long-arr-r"></span>'
	});
	// add block with count in .news-slider
	$(".news-slider").each(function() {
		var slider = $(this);
		var counterBlock = $("<div class='slick-counter'></div>");
		var allItems = slider.find(".news-slider__item:not(.slick-cloned):last").data("slick-index") + 1;
		var nowItem = slider.find(".news-slider__item.slick-current").data("slick-index");
		nowItem++;
		var resultText = nowItem + " / " + allItems;
		counterBlock.text(resultText);
		slider.append(counterBlock);
	});
	$(".news-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var allItems = $(this).find(".news-slider__item:not(.slick-cloned):last").data("slick-index") + 1;
		var text = (nextSlide + 1) + " / " + allItems;
		$(this).find(".slick-counter").text(text);
	});
	$(".press-slider-switch li").click(function() {
		if(!$(this).hasClass("active")) {
			$(".press-slider-switch li.active").removeClass("active");
			var sliderName = $(this).addClass("active").data("slider");
			$(this).closest('.press-slider-wrap').removeClass("video photo booklets presentations").addClass(sliderName);
		}
	});
	// init .video-slider slick-slider
	$(".video-slider").slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<span class="icon-long-arr-l"></span>',
		nextArrow: '<span class="icon-long-arr-r"></span>'
	});
	// add block with count in .video-slider
	$(".video-slider").each(function() {
		var slider = $(this);
		var counterBlock = $("<div class='slick-counter'></div>");
		var allItems = slider.find(".video-slider__item-wrap:not(.slick-cloned):last").data("slick-index") + 1;
		var nowItem = slider.find(".video-slider__item-wrap.slick-current").data("slick-index");
		nowItem++;
		var resultText = nowItem + " / " + allItems;
		counterBlock.text(resultText);
		slider.append(counterBlock);
	});
	$(".video-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var allItems = $(this).find(".video-slider__item-wrap:not(.slick-cloned):last").data("slick-index") + 1;
		var text = (nextSlide + 1) + " / " + allItems;
		$(this).find(".slick-counter").text(text);
	});
	// init .icons-slider slick-slider
	$(".icons-slider").slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<span class="icon-long-arr-l"></span>',
		nextArrow: '<span class="icon-long-arr-r"></span>'
	});
	// switch .reviews-list__item
	$(".reviews-list__link").on("click", function() {
		$(this).closest(".reviews-list__item-wrap").toggleClass("show");
	});
	// switch .smpl-view-inline
	$(".smpl-view-inline .btn").on("click", function() {
		$(this).closest(".smpl-view-inline").toggleClass("show");
	});
	// animate share icons group
	$(".share-text").on("click", function() {
		$(this).next().toggleClass("active");
	});
	setSliderSizes();
	$('.photo-slider-max').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.photo-slider-min',
		arrows: true,
		prevArrow: '<span class="icon-long-arr-l"></span>',
		nextArrow: '<span class="icon-long-arr-r"></span>'
	});
	$('.photo-slider-min').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.photo-slider-max',
		dots: false,
		focusOnSelect: true,
		arrows: true,
		prevArrow: '<span class="icon-long-arr-l"></span>',
		nextArrow: '<span class="icon-long-arr-r"></span>'
	});
	var popupSliderInner = $(".photo-popup-slider__inner");
	if(popupSliderInner.length) {
		center_block(popupSliderInner);
	}
	$(window).resize(function() {
		setSliderSizes();
		if(popupSliderInner.length) {
		center_block(popupSliderInner);
	}
	});
	$(".photo-list__item").on("click", function() {
		$(".photo-popup-slider-wrap").addClass("active");
		$(this).closest(".photo-list").addClass("hide");
		var item = $(this).data("item");
		$('.photo-slider-min').slick("slickGoTo", item, true);
	});
	$(".photo-popup-slider-wrap .icon-close").click(function() {
		$(this).closest(".photo-popup-slider-wrap").removeClass("active");
		$(".photo-list").removeClass("hide");
	});
	// animate .company-col-2__block
	$(window).scroll(function() {
		$(".company-col-2__block").each(function() {
			$(this).removeClass("active");
			var scrlTop = $(window).scrollTop();
			var posT = $(this).offset().top;
			var objectH = $(this).outerHeight();
			var objectMarB = parseInt($(this).css("marginBottom"));
			var halfWinH = $(window).height() / 2;
			var terminatorPos = scrlTop + halfWinH - posT;
			if(terminatorPos > 0 && terminatorPos < objectH + objectMarB) {
				$(this).addClass("active").prev().removeClass("active");
				$(this).next().removeClass("active");
			}
			else {
				$(this).removeClass("active");
			}
		});
	});
	// init .team-slider slick-slider
	$(".team-slider").slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 1,
		dots: false,
		arrows: true,
		prevArrow: '<span class="icon-long-arr-l"></span>',
		nextArrow: '<span class="icon-long-arr-r"></span>'
	});
	// add block with count in .team-slider
	$(".team-slider").each(function() {
		var slider = $(this);
		var counterBlock = $("<div class='slick-counter'></div>");
		var allItems = slider.find(".team-slider__item:not(.slick-cloned):last").data("slick-index") + 1;
		var nowItem = slider.find(".team-slider__item.slick-current").data("slick-index");
		nowItem++;
		var resultText = nowItem + " / " + allItems;
		counterBlock.text(resultText);
		slider.append(counterBlock);
	});
	$(".team-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var allItems = $(this).find(".team-slider__item:not(.slick-cloned):last").data("slick-index") + 1;
		var text = (nextSlide + 1) + " / " + allItems;
		$(this).find(".slick-counter").text(text);
	});
	// init select function
	initSelect();
	$(document).on("mouseup", function(e) {
		if ($(e.target).closest(".select-menu").length === 0 && !$(e.target).hasClass("select-val")) {
			$(".select-menu").hide();
			$(".select-wrap").removeClass("open");
		}
		if ($(e.target).closest(".popup-feedback").length === 0) {
			$(".popup-feedback").removeClass("active");
		}
	});
	// animate anchors
	$("a").on("click", function(e) {
		var href = $(this).attr("href");
		if(href) {
			if(href.slice(0, 1) == "#") {
				e.preventDefault();
				// var dev = $("header.fixed").outerHeight();
				var dev = 90;
				var id = href.slice(1);
				if($(this).closest(".float-butt")) {
					var addDev = $(this).closest(".float-butt").height();
					$(this).closest(".float-butt").addClass("fixed")
					var dev = dev + addDev - 1;
				}
				if($(this).closest(".anchors-menu-wrap")) {
					var addDev = $(this).closest(".anchors-menu-wrap").height();
					$(this).closest(".anchors-menu-wrap").addClass("fixed")
					var dev = dev + addDev - 1;
				}
				$("html, body").animate({ scrollTop: $("#" + id).offset().top - dev }, 500);
			}
		}
	});
	// switch .popup-feedback__tab
	$(".popup-feedback__tab").on("click", function() {
		if(!$(this).hasClass("active")) {
			$(".popup-feedback__tab").removeClass("active");
			$(this).addClass("active");
			var item = $(this).data("item");
			$(".popup-feedback__form").each(function(index) {
				if(index == item) {
					$(this).show();
				}
				else {
					$(this).hide();
				}
			})
		}
	});
	// animate .popup-feedback
	$(".head-icons-wrap .icon-message, .foot-links-block .icon-message, .foot-links-block .icon-message + a").click(function(e) {
		e.preventDefault();
		$(".popup-feedback").addClass("active");
	});
	$(".popup-feedback .icon-close").click(function() {
		$(this).closest(".popup-feedback").removeClass("active");
	});
	//masorny init
	if($('.history-page').length != 0) {
		var iso = new Isotope( '.history-page__inner', {
			itemSelector: '.history-page__item',
			sortBy: 'number',
			getSortData: {
				number: '.number parseInt'
			}
		});
		function setFirst() {
			$('.history-page__item').each(function() {
				if($(this).css('left') == '0px') {
					$(this).addClass('first');
				} else {
					$(this).removeClass('first');
				}
			});
		}
		setFirst();
		iso.on('layoutComplete', setFirst);

		var wtop = 0;
		$(window).scroll(function() {
			wtop = $(this).scrollTop() + $(window).height() / 2;
			$('.history-page__item').each(function() {
				if(($(this).offset().top <= wtop) && ($(this).offset().top + $(this).height() > wtop)) {
					if($('.history-page__item.active').length > 0) {
						$('.history-page__item.active').not($(this)).removeClass('active');
					}
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});
		});

	}
	$('a.no-link').on('click', function (e) {
        e.preventDefault();
    });
    createCustomSelect("icon-arr1-b");

    // animate .icon-scroll-top
    $(window).scroll(function() {
        if($(".icon-scroll-top").length) {
            var object = $(".icon-scroll-top");
            var winH = $(window).height();
            var objcH = object.height();
            var footer = $("footer");
            var footerTopPos = footer.offset().top;
            var footerH = footer.height();
            var objPos = $(this).scrollTop() + winH / 2 - objcH / 2;
            if($(this).scrollTop() > 100) {
                object.addClass("active");
                if(objPos + objcH < footerTopPos) {
                    object.css("top", objPos);
                }
            }
            else {
                object.removeClass("active");
            }
        }

    });
    $(".icon-scroll-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
    //proj more
    $('.js-proj-open').on('click', function() {
        $(this).parents('.proj__part').find('.prhidden').fadeIn();
        $(this).parent('.proj__more').hide();
        $(this).parents('.proj__part').find('.proj__close').show();
    });
    $('.js-proj-close').on('click', function() {
        $(this).parents('.proj__part').find('.prhidden').fadeOut(200);
        $(this).parent('.proj__close').hide();
        $(this).parents('.proj__part').find('.proj__more').show();
    });
    $(".map-desc__tab-desc").on("click", function() {
        if(!$(this).hasClass("active")) {
            $(".map-desc__tab-desc.active").removeClass("active");
            $(this).addClass("active");
        }
    });
    // animate height map
    $(".contacts-map-wrap .btn-to-bottom").on("click", function(e) {
        $(this).closest(".contacts-map-wrap").toggleClass("full");
        return false;
    });
    // resize .top-promo
    topPromoW();
    $(window).resize(function() {
        topPromoW();
    });
    $(document).on("mouseenter", ".header.fixed .icon-tel", function(e) {
    	// if (e.type == "mouseenter") {
    		$(".header").addClass("show-phone");
	});
	$(document).on("mouseleave", ".header.fixed .icon-tel", function(e) {
   			$(".header").removeClass("show-phone");
   	});




	//---------------------------------------         navbar
   	/*$('.navbar-toggle').click(function(event) {
   		if (!$(this).hasClass('active')) {
   			$(this).addClass('active');
   			$(this).parents('.header').find('.main-menu').slideDown(300);
   		} 
   		else {
   			$(this).removeClass('active');
   			$(this).parents('.header').find('.main-menu').slideUp(300);
   		}
   	});*/
   	$('body').delegate('.header .navbar-toggle', 'click', function() {
   		if (!$(this).hasClass('active')) {
   			$(this).addClass('active');
   			$(this).parents('.header').find('.main-menu').slideDown(300);
   		} 
   		else {
   			$('.header .navbar-toggle').removeClass('active');
   			$('.header .main-menu').slideUp(300);
   		}
	});

   	//---------------------------------------         main-menu
   	$('.main-menu li').each(function(index, el) {
   		if ($(this).find('ul').length > 0) {
   			$(this).append('<div class="menu-arr"></div>');
   		}
   	});
   	$('.menu-arr').click(function(event) {
   		var $parent = $(this).parent('li');
   		if (!$parent.hasClass('active')) {
   			$parent.addClass('active');
   			if ($parent.find('.submenu-wrap').length > 0) {
   				$parent.find('.submenu-wrap').slideDown(300);
   			} 
   			else {
   				$parent.find('ul').slideDown(300);
   			}
   		}
   		else{
   			$parent.removeClass('active');
   			if ($parent.find('.submenu-wrap').length > 0) {
   				$parent.find('.submenu-wrap').slideUp(300);
   			} 
   			else {
   				$parent.find('ul').slideUp(300);
   			}
   		} 
   	});

   	function smplSlider(){
   		var $window = $(window).width();
   		if ($window < 1340 && $window > 1023) {
   			$('.smpl-txt-sldr-count').css({
   				'width': ($window - 50)/2,
   			});
   		} 
   		else {
   			$('.smpl-txt-sldr-count').css({
   				'width': '',
   			});
   		}
   	}
   	$(window).resize(function(event) {
   		smplSlider();
   	});
   	smplSlider();




});
function setInfoDataSlider(slider, object) {
	slider.each(function() {
		var sliderItem = $(this);
		if(!object) {
			object = sliderItem.find(".slick-track .slick-current");
		}
		var title = object.data("title");
		var desc = object.data("desc");
		var link = object.data("link");
		var infoBlock =sliderItem.siblings(".info-block");
		infoBlock.find(".title").text(title);
		infoBlock.find(".desc").text(desc);
		infoBlock.find(".link").attr("href", link);
		object = undefined;
	});
}
function headerScroll(param) {
    var header = $(".header");
    var headerH = header.outerHeight();
    var wScollTop = $(window).scrollTop();
    if(wScollTop >= headerH) {
    	if(!$(".header.fixed").length) {
			var headerF = header.clone().addClass("fixed");
			$("body").append(headerF);
			headerF.addClass("fixed");
    	}
    }
    else {
        $(".header.fixed").remove();
    }
	if($(".float-butt").length) {
		var crw = $(".crumbs-wrap");
		var crwT = crw.offset().top;
		var crwH = crw.outerHeight();
		if(wScollTop < crwT + crwH - 90) {
			$(".float-butt").removeClass("fixed");
		}
		else {
			$(".float-butt").addClass("fixed");
		}
	}
	if($(".anchors-menu-wrap").length) {
		var crw = $(".crumbs");
		var crwT = crw.offset().top;
		var crwH = crw.outerHeight();
		if(wScollTop < crwT + crwH - 90) {
			$(".anchors-menu-wrap").removeClass("fixed");
		}
		else {
			$(".anchors-menu-wrap").addClass("fixed");
		}
	}
}
function setSliderSizes() {
	var winH = $(window).height();
	var freeArea = 270;
	var maxImgH = (winH - freeArea) * 0.75;
	var minImgH = (winH - freeArea) * 0.25;
	var maxSliderW = maxImgH * 1.66;
	$(".photo-slider-max__img").height(maxImgH);
	$(".photo-slider-min__img").height(minImgH);
	$(".photo-slider-max-wrap").width(maxSliderW);
	$(".photo-slider-min-wrap").width(maxSliderW + 40);
}
function initSelect() {
    $(".select-wrap select").each(function() {
        var select = $(this);
        select.find("option").each(function() {
            if($(this).attr("selected") == "selected") {
                var val = $(this).text()
                $(this).closest(".select-wrap").find(".select-val").text(val).removeClass("empty");
            }
        });
    });
    $(document).on("click", ".select-val",  function() {
        $(this).closest(".select-wrap").toggleClass("open");
        if($(this).next().is(':hidden')) {
            $(this).next().show();
            var selectMenu = $(this).next();
        }
        else {
            $(this).next().hide();
        }
    });
    $(document).on("click", ".select-menu li",  function() {
        $(this).closest(".select-wrap").removeClass("open");
        var selectMenu = $(this).closest(".select-menu");
        var select = selectMenu.next();
        var newText = $(this).text();
        var val = $(this).data("value");
        if($(this).data("value") == "NULL") {
            selectMenu.prev().text(newText).addClass("empty");
        }
        else {
            selectMenu.prev().text(newText).removeClass("empty");
        }
        $(this).closest(".select-menu").hide();
        select.find("option:selected").removeAttr("selected");
        select.find("option").each(function() {
            if($(this).val() == val) {
                $(this).prop("selected", true);
                $(this).click();
            }
        });
        select.change();
    });
}
function reloadSelect(id) {
    var select = $("#" + id);
    select.siblings(".select-menu").remove();
    select.siblings(".select-val").remove();

    var selectMenu = $("<ul class='select-menu'></ul>");
    var selectVal = $("<div class='select-val empty'></div>");
    select.find("option").each(function() {
        var option = $(this);
        var value = option.val();
        var text = option.text();
        var li = $("<li data-value='" + value + "'>" + text + "</li>")
        selectMenu.append(li);
        if(option.prop("selected")) {
            selectVal.text(text);
        }
    });
    select.before(selectVal);
    select.before(selectMenu);

    // select.find("option").each(function() {
    //     if($(this).attr("selected") == "selected") {
    //         var val = $(this).text()
    //         $(this).closest(".select-wrap").find(".select-val").text(val).removeClass("empty");
    //     }
    // });
}
function setMainPromoSliderWidth() {
	if($(".second-menu-btn").length) {
		var winW = $(window).width();
		var cbW = $(".center-block").width();
		var targetDev = (winW - cbW) / 2;
		var infoBlockL = Math.abs(parseInt($(".main-promo-sw__inner .info-block").css("left")));
		var targetW = winW - targetDev - infoBlockL;
		$(".main-promo-sw__inner").width(targetW);
	}
}
function setProjectsSlidersW() {
	if($(".second-menu-btn").length) {
		var winW = $(window).width();
		var sm = $(".second-menu-btn");
		var smItem = sm.find(".btn");
		var smItemMR = parseInt(smItem.css("marginRight"));
		var cbW = $(".center-block").width();
		var targetW2 = cbW / 2 - smItemMR / 2;
		var targetW1 = winW - (targetW2 + smItemMR + (winW - cbW) / 2);
		$(".projects-slider-wrap").eq(0).width(targetW1);
		//$(".projects-slider-wrap").eq(1).width(targetW2);
		$(".projects-slider-wrap").eq(1).width(targetW1);
	}
}
function topPromoW() {
	if($(".top-promo").length) {
		var cbW = $(".center-block").width();
		var winW = $(window).width();
		var targetW = winW - (winW - cbW) / 2 - 174;
		console.log(winW - (winW - cbW) / 2);
		$(".top-promo").width(targetW);
	}
}
function createCustomSelect(icon) {
    $("select").each(function() {
        var select = $(this);
        var selectMenu = $("<ul class='select-menu'></ul>");
        var selectVal = $("<div class='select-val empty'></div>");
        select.find("option").each(function() {
            var option = $(this);
            var value = option.val();
            var text = option.text();
            var li = $("<li data-value='" + value + "'>" + text + "</li>")
            selectMenu.append(li);
            if(option.prop("selected")) {
                selectVal.text(text);
            }
        });
        var iconElem = $("<span class='" + icon + "'></span>");
        select.wrap("<div class='select-wrap'>");
        select.before(iconElem);
        select.before(selectVal);
        select.before(selectMenu);
    });
}