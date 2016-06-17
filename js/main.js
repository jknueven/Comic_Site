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

$.ajax({url: "http://gateway.marvel.com:80/v1/public/comics?apikey=a3d450fd87cce2aeff11efbcc111f789", success: function(result)
	{
		console.log(result)

		function randomGenerator(e) {
			return Math.floor(Math.random() * e) + 1;
		}


		function setImage(){
			var comics = result.data.results;
			var random = randomGenerator(comics.length);

			var comic = comics[random];
			console.log(comic);
			var comicThumbnail = comic.images[0].path+"."+comic.images[0].extension;

			$(".comicIMGone").html("<img src='"+comicThumbnail+"'>");
		}

		setImage();
		setInterval(setImage, 5000 );


		// console.log(character);
	}
});



});