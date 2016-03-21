/*function jquerytest(){
  var ww = $(window).width();
  if(ww<0){
    alert("This window is impossibly small");
  }else{
    alert("This is a jquery test.  Would you like your " + ww + " pixel window washed?");
  }
  return ww;
};

*/
function tw(){
	  TweenMax.to(.site-avatar, 2, {
	
		//	'background-position-x':coordinateX + "px",
		//	'background-position-y': coordinateY + "px",
		 backgroundPosition:coordinateX + "px " + coordinateY + "px",
			ease:Bounce.easeInOut
			
		})
	
}
$('.site-avatar').click( function() {
 alert('click');
  tw();
});
