jQuery(document).ready(function($){
	//move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	//mobile version - open/close navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		if($('header').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');
		
		$('header').toggleClass('nav-is-visible');
		$('.cd-main-nav').toggleClass('nav-is-visible');
		$('.cd-main-content').toggleClass('nav-is-visible');
	});

	//mobile version - go back to main navigation
	$('.go-back').on('click', function(event){
		event.preventDefault();
		$('.cd-main-nav').removeClass('moves-out');
	});

	//open sub-navigation
	$('.cd-subnav-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-main-nav').toggleClass('moves-out');
	});

	function moveNavigation(){
		var navigation = $('.cd-main-nav-wrapper');
  		var screenSize = checkWindowWidth();
        if ( screenSize ) {
        	//desktop screen - insert navigation inside header element
			navigation.detach();
			navigation.insertBefore('.cd-nav-trigger');
		} else {
			//mobile screen - insert navigation after .cd-main-content element
			navigation.detach();
			navigation.insertAfter('.cd-main-content');
		}
	}

	function checkWindowWidth() {
		var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
		return ( mq == 'mobile' ) ? false : true;
	}
});




	/* Loading animation */
		$(window).load(function() {
			$("#loading-overlay").fadeIn(1000).fadeOut(1000);
		});
		
	/* Initialize Swiper */
		var swiper = new Swiper('.swiper-container', {
			/*
				pagination: '.swiper-pagination',
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				
				paginationClickable: true,
				spaceBetween: 30,
			*/
			centeredSlides: true,
			autoplay: 4000,
			loop: true,
			autoplayDisableOnInteraction: false
		});

		$(document).ready(function () {
			/* CALLING onScroll FUNCTION - ADDING class="active" to navi links */
				$(document).on("scroll", onScroll);
					/* BOOTSTRAP ANIMATED ScrollSpy */
							$("nav ul li a[href^='#'], div a").on('click', function(e) {
							   // prevent default anchor click behavior
							   e.preventDefault();
							   var $anchor = $(this);
							   // animate
							   $('html, body').animate({
								   scrollTop: $($anchor.attr('href')).offset().top
								 }, 500);
							});	
		});
		
		/* onScroll FUNCTION - ADDING class="active" to navi links */
			function onScroll(event){
				var scrollPos = $(document).scrollTop();
				$('.cd-main-nav a').each(function () {
					var currLink = $(this);
					var refElement = $(currLink.attr("href"));
					if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
						$('.cd-main-nav ul li a').removeClass("active");
						currLink.addClass("active");
					}
					else{
						currLink.removeClass("active");
					}
				});
			};	
			
		/* ANIMATED HEADER SCROLLING */
			$(window).scroll(function() {
				/*
				if ($(this).scrollTop() > 10){  
					$('#header-top').removeClass("top-div").addClass("top-div-none");
					//$('header').addClass("top-position");
					$('.cd-main-nav').removeClass("top-20");
					$('.cd-logo').addClass("cd-logo-scroll");
					$('#logo-img').addClass("logo-img-scroll");
				}
				else
				{
					$('ul.cd-main-nav').removeClass("moves-out");
					$('#header-top').removeClass("top-div-none").addClass("top-div");
					$('header').removeClass("top-position");
					$('.cd-main-nav').addClass("top-20");
					$('.cd-logo').removeClass("cd-logo-scroll");
					$('#logo-img').removeClass("logo-img-scroll");
				}
				if ($(this).scrollTop() > 20){  
					$('header').addClass("fixed-position");
				}
				else
				{
					$('header').removeClass("fixed-position");
				}
				*/
				if ($(this).scrollTop() > 20){  
					$('header').addClass("narrow");
				}
				else
				{
					$('header').removeClass("narrow");
				}
			});	
			
		/* NAVBAR ACTIVE LINKS */	
			$("nav ul li").find( "a" ).click(function(){
				$("nav ul li a").removeClass( "active" );
				$(this).addClass('active');
			});

		/* Scroll Arrow */		
			//this is where we apply opacity to the arrow
			$(window).scroll( function(){

			  //get scroll position
			  var topWindow = $(window).scrollTop();
			  //multipl by 1.5 so the arrow will become transparent half-way up the page
			  var topWindow = topWindow * 1.5;
			  
			  //get height of window
			  var windowHeight = $(window).height();
				  
			  //set position as percentage of how far the user has scrolled 
			  var position = topWindow / windowHeight;
			  //invert the percentage
			  position = 1 - position;

			  //define arrow opacity as based on how far up the page the user has scrolled
			  //no scrolling = 1, half-way up the page = 0
			  $('.mouse').css('opacity', position);

			});
			
		/* Animate.css */	
			// EFEKTI - https://daneden.github.io/animate.css/
			$(function() {

			  var $window           = $(window),
				  win_height_padded = $window.height() * 1.1,
				  isTouch           = Modernizr.touch;

			  if (isTouch) { $('.revealOnScroll').addClass('animated'); }

			  $window.on('scroll', revealOnScroll);

			  function revealOnScroll() {
				var scrolled = $window.scrollTop(),
					win_height_padded = $window.height() * 1.1;

				// Showed...
				$(".revealOnScroll:not(.animated)").each(function () {
				  var $this     = $(this),
					  offsetTop = $this.offset().top;

				  if (scrolled + win_height_padded > offsetTop) {
					if ($this.data('timeout')) {
					  window.setTimeout(function(){
						$this.addClass('animated ' + $this.data('animation'));
					  }, parseInt($this.data('timeout'),10));
					} else {
					  $this.addClass('animated ' + $this.data('animation'));
					}
				  }
				});
				// Hidden...
			   $(".revealOnScroll.animated").each(function (index) {
				  var $this     = $(this),
					  offsetTop = $this.offset().top;
				  if (scrolled + win_height_padded < offsetTop) {
					$(this).removeClass('animated fadeInUp fadeIn flipInX lightSpeedIn')
				  }
				});
			  }

			  revealOnScroll();
			});
			
		/* Isotope */
			/*
			$( function() {
				  // init Isotope
				  var $grid = $('.grid').isotope({
					itemSelector: '.element-item',
					layoutMode: 'fitRows'
				  });
				  // filter functions
				  var filterFns = {
					// show if number is greater than 50
				  };
				  // bind filter button click
				  $('.filters-button-group').on( 'click', 'button', function() {
					var filterValue = $( this ).attr('data-filter');
					// use filterFn if matches value
					filterValue = filterFns[ filterValue ] || filterValue;
					$grid.isotope({ filter: filterValue });
				  });
				  // change is-checked class on buttons
				  $('.button-group').each( function( i, buttonGroup ) {
					var $buttonGroup = $( buttonGroup );
					$buttonGroup.on( 'click', 'button', function() {
					  $buttonGroup.find('.btn-green').removeClass('btn-green').prop('disabled', false);
					  $( this ).addClass('btn-green');
					  $(this).prop('disabled', true);
					});
				  });
			});
			*/
			$(document).ready(function () {
				$('.dugme').on('click', function () {
					$('.pbox:visible').hide();
					$('.pbox[id=' + $(this).attr('data-id') + ']').show();
				})
			});

		/* Tooltips */
			$(function() {
				$('.tooltips').tooltip();
			});
		
		/* Koriscenje tabovi */
			$(document).ready(function() {
				$("div.bhoechie-tab-menu>div.list-group>label").click(function(e) {
					e.preventDefault();
					$(this).siblings('label.active').removeClass("active");
					$(this).addClass("active");
					var index = $(this).index();
					$("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
					$("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
				});
			});
			
		/* Modal Rescue Remedi change picture */			
		/*)	$(function() {
				$('#RescueRemediLink').click(function(e){
					e.preventDefault();
					//$("#RescueRemediContentPicture").removeClass("green-background-sector-rescue-cream").addClass("green-background-sector-rescue-remedi");
						$('#RescueRemediContentPicture').fadeOut(100, function() {
							$("#RescueRemediContentPicture").removeClass("green-background-sector-rescue-cream").addClass("green-background-sector-rescue-remedi");
							$('#RescueRemediContentPicture').fadeIn(100);
						});
				});
				$('#RescueCreamLink').click(function(e){
					e.preventDefault();
					//$("#RescueRemediContentPicture").removeClass("green-background-sector-rescue-remedi").addClass("green-background-sector-rescue-cream");
						$('#RescueRemediContentPicture').fadeOut(100, function() {
							$("#RescueRemediContentPicture").removeClass("green-background-sector-rescue-remedi").addClass("green-background-sector-rescue-cream");
							$('#RescueRemediContentPicture').fadeIn(100);
						});
				});
			});			
		*/
		
		$('#calculate').click(function(e){
			
			var batteryCapacity = 12; // kWh
			var batteryPrice = 6000; // USD
			var sunPerDay = 5; // h
			var panelGeneration = 0.15 // kWh
			var generatePrice = 0.3 // USD/W
			
			var bdInKw = 10; // get from location
			var electricityPrice = 0.12 // USD/kWh
			
			var householdBDs = $('#householdBDs').val();
			var location = $('#location').val();
			
			var consume = householdBDs * bdInKw;
			var batteries = Math.floor(consume / batteryCapacity);
			$('#batteryPacks').val(batteries);
			
			var coverage = Math.floor(batteries * batteryCapacity * 100 / consume);
			$('#coverage').val(coverage);
			
			var generateCapacity = consume / sunPerDay;
			
			var panelSize = generateCapacity / panelGeneration
			$('#panelSize').val(panelSize);
			
			var investment = batteries * batteryPrice + generateCapacity * 1000 * generatePrice;
			$('#investment').val(investment);
			
			var returnOfInvestment = Math.floor(investment / electricityPrice / 24 / 365);
			$('#returnOfInvestment').val(returnOfInvestment + 'years');
		});