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
var nav = $('nav');
function tw(){
	  TweenMax.to(nav, 2.3, {
		display:'block',
		position:'relative',
		'z-index':4,
		float:'left',
		ease: Power0.easeNone
		})
		TweenMax.to(info,2, {
		display:'block',
		position:'relative',
		'z-index':4,
		float:'right',
		ease: Power0.easeNone
		})
		
	
}
$('.site-info').click( function() {

  tw();
});
