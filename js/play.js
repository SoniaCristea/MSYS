
  $("li[data-target='#exampleModalCenter']").on('click',function(){
  var infoModal = $('#exampleModalCenter');
  var isPlaying = false;
  // $(".modal-header").html($(this).attr('data-content'));
  // htmlData = $("li[data-content='" + $(this).attr('data-content') + "']").find('.profile').html();
  // infoModal.find('.modal-body').html(htmlData); 
  id = $(this).attr('id');
  song = document.getElementById("myAudio"+id);

  $("#btn").click(function(){
  	
  		if (isPlaying) {

  			song.pause();
       		isPlaying = false;
       	} else{

       		song.play();
       		isPlaying = true;
       	}
       });
});
 