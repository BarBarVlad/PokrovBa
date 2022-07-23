$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHight:true,
		slidesToShow:1,
		slidesToScroll:1,
		speed:500,
		easing:'ease',
		infinite:true,
		initialSlide:0,
		draggable:false,
		swipe:true,
		touchThreshold:10,
		touchMove:false,
		waitForAnimate:false,
		centerMode:true,
		variableWidth: true
	});
});