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
	  TweenMax.to(nav, 2.3, {
		display:'block',
		position:'relative',
		'z-index':4,
		float:'left',
		ease: Power0.easeNone
		})
	tl.to(info_h1, 4, {scrambleText:{text:"Caleb G Hamilton,", chars:"0123456789",  ease:Linear.easeNone}})
		
	
}
$('.site-info').click( function() {

  tw();
});
