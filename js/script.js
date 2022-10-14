$('.portfolio button').click(function(){

	$('.portfolio button.active').removeClass('active');
	$(this).addClass('active');
   
   const dataValue = $(this).attr('data');

   if(dataValue == 'all') {
   	$('.portfolio .row > div').show();
   } else {

   // tìm data được chọn và cho hiện lên
   $(`.portfolio .row > div[data=${dataValue}]`).show();
  // ẩn đi data ko được chọn
   $('.portfolio .row > div').not(`[data=${dataValue}]`).hide();

   }
});

// scroll là vị trí thanh cuộn của trang web thay đổi vị trí
$(window).scroll(function(){

	// vị trí top của window so với tài liệu
	// console.log($(window).scrollTop());

	// .offset().top là vị trí của portfolio so với trên cùng của document
	// console.log($('#portfolio').offset().top);

	if ($(window).scrollTop() >= $('#portfolio').offset().top) {
		// fixed-top là class có sẵn trong bootstrap
		$('header .navbar').addClass('fixed-top');
		$('header').addClass('dummy-padding-top');

	} else {
		$('header .navbar').removeClass('fixed-top')
		$('header').removeClass('dummy-padding-top');

	}

});