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
	//¼­ºê¸Þ´ºÅÇ
	$('.contentDetail .tabs a').on('click', function() {
		var activeTab = $(this).attr('rel');
		$('.contentDetail .tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.contentDetail div.tab-content').css('display', 'none');
		$('div#'+ activeTab).css('display', 'block');
	});

});