(function($) {
    $.fn.extend({
        isChildOf: function(filter_string)
        {
            var parents = $(this).parents().get();

            for (var j = 0; j < parents.length; j++ ) {
                if ($(parents[j]).is(filter_string))
                    return true;
            }

            return false;
        }
    });
})(jQuery);