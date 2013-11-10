$(document).ready(function() {
    $.getJSON("questions.json", function(data) {
        new APP.QuizClass(data);
    })
});