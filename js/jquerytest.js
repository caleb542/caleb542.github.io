function jquerytest(){
  var ww = $(window).width();
  if(ww<0){

    alert("This window is impossibly small");

  }else{
    alert("This is a jquery test.  Would you like your " + ww + " pixel window washed?");
  }
  
}

$('.site-avatar').click(){
  
  jquerytest();
}
