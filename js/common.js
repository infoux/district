$(document).ready(function() {
	$('ul.list-type02 li a').click(function(){
		$(this).toggleClass('checked');
	});

	$('article#filterPopup .close').click(function(){
		$(this).parent().parent().hide();
	});
	$('article#locationPopup .close').click(function(){
		$(this).parent().parent().hide();
	});

	$('body.main article.mapArea h2 a.searchFilter').click(function(){
		$('article#filterPopup').show();
		$('article#filterPopup').css('height',$(document).height());
	});

	$('body.main article.mapArea h2 a.move').click(function(){
		$('article#locationPopup').show();
		$('article#locationPopup').css('height',$(document).height());
	});
	$('header a.menu').click(function(){
		$('nav#mainMenu').show();
	});
	$('nav#mainMenu div.close').click(function(){
		$(this).parent().hide();
	});
	//서브메뉴탭
	$('.contentDetail .tabs a').on('click', function() {
		var activeTab = $(this).attr('rel');
		$('.contentDetail .tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.contentDetail div.tab-content').css('display', 'none');
		$('div#'+ activeTab).css('display', 'block');
	});
	//이미지 상세팝업
	$('section#thumbPopup div.thumbInner div img').css('height',$(document).height() - 240);
	$('body.sub.notice article.contentDetail div.thumbnail-slider div.slider-item a').click(function(){
		$('section#thumbPopup').show();
	});

	//이미지 상세팝업 닫기
	$('section#thumbPopup div.thumbInner div p.close a').click(function(){
		$('section#thumbPopup').hide();
	});

	$('body.sub.storeList article.tab-content ul li a').click(function(){
		$('section#detailPopup').show();
	});

});