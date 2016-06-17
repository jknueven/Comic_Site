$( document ).ready(function() {
	// Handler for .ready() called.

$("body").on("click", '.clicker',function(e){
  var content = $(this).find('.dropdown').toggle();
});

$.ajax({url: "http://gateway.marvel.com:80/v1/public/characters?apikey=a3d450fd87cce2aeff11efbcc111f789", success: function(result){

	function setImgTable(){
		var characters = result.data.results;

		characters.forEach(function(character){
			var charaThumbnail = character.thumbnail.path+"."+character.thumbnail.extension;
		$(".charaContent").append("<div class='col-md-4 clicker'><img src='"+charaThumbnail+"'><div class='dropdown'></div></div</div>");
		})
		
	}

	setImgTable();
	setInterval(setImage, 5000 );


}});


});