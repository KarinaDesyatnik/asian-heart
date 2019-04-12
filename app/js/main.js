$(function(){
$("#top").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

$('.btn_menu').click(function(){
		$('.menu ul').toggleClass('active');
		$('.btn_menu').toggleClass('active');
	})
});

$(".recomend-post .wrapper .tab").click(function() {
	$(".recomend-post .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".recomend-post .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
