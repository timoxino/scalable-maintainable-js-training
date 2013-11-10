var APP = APP || {};

APP.QuizClass = (function(APP, $, undefined) {

    return function(data) {

        var length = data.length;
        var points = 0;
        var index = 0;

        this.clearContainer = function() {
            $("#question").empty();
            $("#answer_text_0").empty();
            $("#answer_text_1").empty();
            $("#answer_text_2").empty();
            $("#answer_0").attr('checked', true);
        };

        this.handleClick = function() {
            var self = this;
            $("#next").on("click", function() {
                self.clearContainer();
                if (index == length - 1) {
                    self.hideQuestion();
                    APP.EventBus.trigger("showResults", points)
                    return;
                }
                var number = $("input").getAnswerNumber();
                points += data[index].points[number];
                self.renderQuestion(++index);
            });
        };

        this.renderQuestion = function(index) {
            $("#question").append(data[index].question);
            $.each(data[index].answers, function(index, value) {
                $("#answer_text_" + (index)).append(value);
            });
        };

        this.hideQuestion = function() {
            $("#container").hide();
        };

        this.renderQuestion(index);
        this.handleClick();
    };
}(APP, jQuery));