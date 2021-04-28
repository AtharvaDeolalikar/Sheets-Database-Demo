$(window).scroll(function(){
    if($(this).scrollTop() > 50) {
       $('#search-bar').addClass('after-scroll');
    }else{
       $('#search-bar').removeClass('after-scroll');
    }
});