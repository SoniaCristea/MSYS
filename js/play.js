  $("li[data-target='#exampleModalCenter']").on('click',function(){
  var infoModal = $('#exampleModalCenter');
  var isPlaying = false;

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

  $('body').on('hidden.bs.modal', '.modal', function () {
    $('audio').trigger('pause');
  });

});
 