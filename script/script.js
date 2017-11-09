var slideWidth=458;
var sliderTimer;
$(function(){
$('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
    sliderTimer=setInterval(nextSlide,4000);
    $('.viewport,.but').hover(function(){
        clearInterval(sliderTimer);
    },function(){
        sliderTimer=setInterval(nextSlide,4000);
    });
    $('#next_slide').click(function(){
        clearInterval(sliderTimer);
        nextSlide();
        sliderTimer=setInterval(nextSlide,4000);
    });
    $('#prev_slide').click(function(){
        clearInterval(sliderTimer);
        prevSlide();
        sliderTimer=setInterval(nextSlide,4000);
    });
    $('.but').click(function(){
        $('.but.active').removeClass('active');
        $(this).addClass('active');
        var n=$('.but').index(this);
        certainSlide(n);
    });
});

function nextSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide++;
    if(currentSlide>=$('.slidewrapper').children().size())
    {
        currentSlide=0;
    }
    $('.but.active').removeClass('active');
    $('.but').eq(currentSlide).addClass('active');
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},458).data('current',currentSlide);
}

function prevSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide--;
    if(currentSlide<0)
    {
        currentSlide=$('.slidewrapper').children().size()-1;
    }
    $('.but.active').removeClass('active');
    $('.but').eq(currentSlide).addClass('active');
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},458).data('current',currentSlide);
}

function certainSlide(n){
    var currentSlide=n;
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},458).data('current',currentSlide);
}
