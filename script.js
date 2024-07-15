$(document).ready(function(){
    $('#click').click(function(){
     $('#change-img').attr("src",'Assets/1@2x.png');
  });

  $('#click-mid').click(function(){
     $('#change-img').attr("src",'Assets/image@2x.png');
  });

  $('#click-last').click(function(){
     $('#change-img').attr("src",'Assets/2@2x.png');
  });
});

// form script 
$(function() {
    $('[data-popup-open]').on('click', function(e) {
      var targeted_popup_class = $(this).attr('data-popup-open');    
      $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);    
      e.preventDefault();
    });
    
  });

//   chnage image

$(document).ready(function() {
    var box1 = $('.box1');
    $('.box').hover(function() {
        var currentBox = $(this);
        if (!currentBox.is(box1)) {
            // Swap positions
            var temp = $('<div>'); // Temporary placeholder
            box1.before(temp);
            currentBox.before(box1);
            temp.replaceWith(currentBox);
        }
    });
});