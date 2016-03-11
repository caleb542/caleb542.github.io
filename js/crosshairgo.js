

$(".crosshair").click(function(e){
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;

  $(this).css({
    'background-position':'0 ' + y + ', ' + x + ' 0'  
  })
}); 
