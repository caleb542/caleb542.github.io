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
var info = $('.site-info');
var info_h1 = $('.site-info h1');
var nav = $('nav');
function tw(){
	  TweenMax.to(".entry", 2.3, {
	
		textAlign: 'center',
		ease: Power0.easeNone
		})
		
	
}
$('.site-info').click( function() {

  tw();
});
