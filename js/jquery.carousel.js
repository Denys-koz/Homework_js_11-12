;(function($) {
    var defaults = { backgroundColor:'lightgrey' };
    var options;

    $.fn.myCarousel = function(params){

    options = $.extend({}, defaults, options, params);
    var leftBtn = $('.carousel-arrow-left');
    var rightBtn = $('.carousel-arrow-right');
    leftBtn.css('background-color', options.backgroundColor);
    rightBtn.css('background-color', options.backgroundColor);
    var elementsList = $('.carousel-list');
    var element = $('.carousel-element');

    var pixelsOffset = element.width() + parseInt(element.css('margin-right'));
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;
 
    leftBtn.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 225;
            console.log('left', currentLeftValue);
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
 
    rightBtn.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 225;
            console.log('right', currentLeftValue);
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
    return this;
};
})(jQuery);

