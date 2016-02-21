$('#menu-btn').click(function(){
	$('#menu-content').toggleClass('expand')
});

//lightbox function
$('.light').click(function(img) {
	img.preventDefault();
	var imgSrc = $(this).attr("href");
	var lightbox = 
		'<div id="lightbox"><img src="' + imgSrc + '">' + '</div>';
	$(lightbox).appendTo('#wrap');
});

$('body').on("click", '#lightbox', function() {
	$('#lightbox').remove();
});