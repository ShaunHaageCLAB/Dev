var carousel = $("#carousel").waterwheelCarousel({
     flankingItems: 2,
	 separation:200,
	 sizeMultiplier:0.8,
	 separationMultiplier:0.9,
	 speed:250,
 });

 $("#carousel").swipe( {
	swipeStatus:function(event, phase, direction, distance)
	{
		if (phase=="end"){
			if(direction == "right") {
				carousel.prev();
			}
			else if(direction =="left") {
				carousel.next();
			}else { return false;}
		}
	},
	triggerOnTouchEnd:false,
	threshold:100
});
$('#prev').on('click', function (){
	carousel.prev();
	return false;
});
$('#next').on('click', function (){
	carousel.next();
	return false;
});
