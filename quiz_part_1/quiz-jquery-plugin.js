$.fn.renderQuiz = function(data)
{
            var length = data.length;
            var points = 0;
            var index = 0;
            renderQuestion(index);
            handleClick();

            function handleClick()
            {
            $("#next").on("click", function()
            {
                clearContainer();
                if(index == length - 1)
                {
                    hideQuestion();
                    $(document).renderResult(points);
                    return;
                }
                var number = $("input").getAnswerNumber();
                points += data[index].points[number];
                renderQuestion(++index);
            });
            }

            function renderQuestion(index)
            {
                $("#question").append(data[index].question);
                $.each(data[index].answers, function(index, value)
                {
                    $("#answer_text_" + (index)).append(value);
                });
            }

            function clearContainer()
            {
                $("#question").empty();
                $("#answer_text_0").empty();
                $("#answer_text_1").empty();
                $("#answer_text_2").empty();
                $("#answer_0").attr('checked', true);
            }

            function hideQuestion()
            {
                $("#container").hide();
            }
};