var APP = APP || {};

APP.ResultLiteral = (function(APP, $, undefined) {

    return {

        renderResult: function(points) {
            $.getJSON("results.json", function(data) {
                renderAnswer(points, data)
            });

            function renderAnswer(points, data) {
                $.each(data, function(index, value) {
                    if (points <= value.to) {
                        $("#resultContainer").append(data[index].status + "(" + points + ")");
                        return false;
                    }
                });
            }
        }
    };
})(APP, jQuery);

APP.EventBus.bind("showResults", function(points) {
    APP.ResultLiteral.renderResult(points);
});