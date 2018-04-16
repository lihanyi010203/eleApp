$(function(){
/*1.搜索框 js代码 start */
	 $(window).scroll(function(){
	   var scrollTop = $(window).scrollTop();
	    if(scrollTop>=89){
            $('.serch').addClass('addsearch');
	    }else{
	    	$('.serch').removeClass('addsearch');
	    }
	 });
/*搜索框 js代码 end*/
/*2.返回顶部 start */
      $(window).scroll(function(){
      	var scrollTop=$(window).scrollTop();
	    	// console.log(scrollTop);
	    	if(scrollTop>600){
	    		$('.toUp').show();
	    	}else{
	    		$('.toUp').hide();
	    	}
      })
      //点击按钮回到顶部
      $('.toUp').click(function() {
          $('html,body').animate({ scrollTop: '0' }, 600);
      })
/*返回顶部 end */
})

