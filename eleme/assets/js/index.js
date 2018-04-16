$(function(){
	// 头部轮播 start  
	$('.swiper-container').on('swipeLeft',function(){
		$('.swiper-container').find('.one').remove('.active');
		$('.swiper-container').find('.two').addClass('active');   
	})
	$('.swiper-container').on('swipeRight',function(){
		$('.swiper-container').find('.two').remove('.active');
		$('.swiper-container').find('.one').addClass('active');   
	})
	// 头部轮播 end

})
     