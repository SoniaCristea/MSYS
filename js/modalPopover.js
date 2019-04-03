$(document).ready(function(){
  $('a[rel=popover]').popover({

    html: true,
    trigger: 'hover',
    placement: position,
    content: function(){
      var id = $(this).attr("href");
      var html = $('div[id="' + id + '"]').html();
      return html;
    }
  });
});


function position(context, source) {

  var position = $(source).position();

  if (position.left > 200) {
      return "left";
  }
  if (position.left < 200) {
      return "right";
  }
  if (position.top < 200){
      return "bottom";
  }
  return "top";
}