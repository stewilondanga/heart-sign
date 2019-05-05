/*var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

function re(elm) {
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
}
