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
var logo = $('.site-avatar');
function tw(){
	  TweenMax.to(logo, 2, {
	
		//	'background-position-x':coordinateX + "px",
		//	'background-position-y': coordinateY + "px",
		float:'right',
		ease:Bounce.easeInOut
			
		})
	
}
$('.site-avatar').click( function() {
 alert('click');
  tw();
});
