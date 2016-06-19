$( document ).ready(function() {
	// Handler for .ready() called.

$("body").on("click", '.clicker',function(e){
  var content = $(this).find('.dropdown').toggle();
});

$.ajax({url: "http://gateway.marvel.com:80/v1/public/characters?apikey=a3d450fd87cce2aeff11efbcc111f789", success: function(result){

	function setDataDropdown(){
		var info = result.data.results;

		info.forEach(function(character){
			var description = series.description;
			var series = series.name;
			$('.dropdown').append("<div class='row series'>'"+series+"'</div><div class='row description'>'"+description+"'</div>");
		})
	}

	function setImgTable(){
		var characters = result.data.results;

		characters.forEach(function(character){
			var charaThumbnail = character.thumbnail.path+"."+character.thumbnail.extension;
		$(".charaContent").append("<div class='col-md-4 clicker'><img src='"+charaThumbnail+"'><div class='dropdown'></div></div</div>");
		})
		
	}

	setImgTable();
	setDataDropdown();


}});


});