var APP = (function($, APP) {
	APP.init = function() {
		$.getJSON("questions.json", function(data) {
			new APP.QuizClass(data);
		});
	}
	return APP;
})(jQuery, APP || {});