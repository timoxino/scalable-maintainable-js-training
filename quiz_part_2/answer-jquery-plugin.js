$.fn.getAnswerNumber = function()
{
    var result = 0;
    this.each(function(index, value)
    {
        if($(this).is(':checked'))
        {
            result = index;
        }
    });
    return result;
}