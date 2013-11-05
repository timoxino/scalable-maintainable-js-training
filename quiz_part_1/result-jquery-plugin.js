$.fn.renderResult = function(points)
{
    $.getJSON("results.json", function(data)
    {
        renderAnswer(points, data)
    });

    function renderAnswer(points, data)
    {
        $.each(data, function(index, value)
        {
            if(points <= value.to)
            {
                $("#resultContainer").append(data[index].status + "(" + points + ")");
                return false;
            }
        });
    }
}