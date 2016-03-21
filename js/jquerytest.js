function jquerytest(){
  var ww = $(window).width();
  if(ww<0){
    alert("This window is impossibly small");
  }else{
    alert("This is a jquery test.  Would you like your " + ww + " pixel window washed?");
  }
  return ww;
};


$('.site-avatar').click( function() {
  //jquerytest('ww');
  TweenMax.to(crosshairs, .5, {
	
		//	'background-position-x':coordinateX + "px",
		//	'background-position-y': coordinateY + "px",
		 backgroundPosition:coordinateX + "px " + coordinateY + "px",
			ease:Bounce.easeInOut
			
		})
});
