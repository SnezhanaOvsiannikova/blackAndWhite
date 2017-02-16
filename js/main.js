
(function() {
	var serchButton = $('.search-button');

	serchButton.on('click', function () {
		var input = $(this).closest('div').find('.search');
		input.focus();
	});
}());