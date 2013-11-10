var APP = (function($, APP) {

	APP.init = function() {
		$.getJSON("questions.json", function(data) {
			new APP.QuizClass(data);
		});
		$.getJSON("results.json", function(data) {
			APP.ResultLiteral.init(data);
		});
	}

	return APP;

})(jQuery, APP || {});