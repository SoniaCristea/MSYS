$("li[data-target='#exampleModalCenter']").on('click',function(){
  var infoModal = $('#exampleModalCenter');
  $(".modal-header").html($(this).attr('data-content'));
  htmlData = $(this).find('.profile').html();
  infoModal.find('.modal-body').html(htmlData);
});