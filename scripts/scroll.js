$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	console.log(wScroll);

	/*insert behaviors here*/
	//-----------attempt at adding and removing fixed position---------
	// if(wScroll > $('#work').offset().top - ($(window).height()/1.2)){
	// 	$('#container').css({
	// 		'position': 'relative'
	// 	});
	// }

	// if(wScroll > $('#title').offset().top + 100) {
	// 	$('#title').addClass('animated fadeOutUp');
	// }
	// else{
	// 	$('#container').css({
	// 		'position': 'fixed'
	// 	});
	// }

    // $('#container').css({
    //     'transform': 'translate(0px, '+ (wScroll * -0.5) +'px)'
    // });


});