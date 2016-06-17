$( document ).ready(function() {
  // Handler for .ready() called.

$.ajax({url: "http://gateway.marvel.com:80/v1/public/characters?apikey=a3d450fd87cce2aeff11efbcc111f789", success: function(result)
	{

		function randomGenerator(e) {
			return Math.floor(Math.random() * e) + 1;
		}


		function setImage(){
			var characters = result.data.results;
			var random = randomGenerator(characters.length);

			var character = characters[random];

			var charaThumbnail = character.thumbnail.path+"."+character.thumbnail.extension;

			$(".charaIMGone").html("<img src='"+charaThumbnail+"'>");
		}

		setImage();
		setInterval(setImage, 5000 );


		// console.log(character);
	}
});



});