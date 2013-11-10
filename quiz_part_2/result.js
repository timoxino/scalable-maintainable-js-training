var APP = APP || {};

APP.ResultLiteral = (function(APP, $, undefined) {

    function renderAnswer(points, data) {
        $.each(data, function(index, value) {
            if (points <= value.to) {
                $("#resultContainer").append(data[index].status + "(" + points + ")");
                return false;
            }
        });
    }

    return {
        init: function(data) {
            APP.EventBus.bind("showResults", function(points) {
                renderAnswer(points, data);
            });
        }
    };

})(APP, jQuery);