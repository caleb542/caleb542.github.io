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
	  TweenMax.to(logo, 3, {
		display:'block',
		position:'absolute',
		'z-index':4,
		x: '-20px',
		ease:Bounce.easeInOut
			
		})
	
}
$('.site-info').click( function() {

  tw();
});
