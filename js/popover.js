
$(document).ready(function(){

  $('a[id*="pop"]').popover({
  html: true,
  trigger: 'hover',
  placement: position,

  content: function(){
    var url = $(this).data('full');
    var id = $(this).attr("href");
    if( url != null){
      var src = $("img.pop").attr('src',url);
    }

    var html = $('div[id="' + id + '"]').html();
    return html;
  }
});
  
});

function position(context, source) {

        var position = $(source).position();

        if (position.left > 420) {
            return "left";
        }
        if (position.left < 420) {
            return "right";
        }
        if (position.top < 200){
            return "bottom";
        }
        return "top";
    }