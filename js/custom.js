$(function(){
	$('.toggle a').click(function(e){
		$('.mynav').addClass('show-menu');
		$('.body-inactive').fadeIn(250);
		e.preventDefault();
	});
	$('.body-inactive, .close-menu').click(function(e){
		$('.mynav').removeClass('show-menu');
		$('.body-inactive').fadeOut(250);
		e.preventDefault();
	});
	// scrollbar js initialization
	$(".nano").nanoScroller();


	$('.sfcc-owl-list').owlCarousel({
		loop:true,
		autoWidth:false,
		margin:35,
		nav:false,
		dots: true,
		autoplay:true,
		responsive:{
			0:{
				items:2
			},
			400:{
				items:2
			},
			600:{
				items: 3
			},
			1000:{
				items:4
			}
		}
	})
	$('.schc-owl-list').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		navText: ["<img src='images/cr-left-arrow.png'>","<img src='images/cr-right-arrow.png'>"],
		dots: false,
		autoplay:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	$('.stcc-owl-list').owlCarousel({
		loop:true,
		autoWidth:false,
		margin:20,
		nav:false,
		dots: true,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			700:{
				items:2
			}
		}
	})
})