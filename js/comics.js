$( document ).ready(function() {
	// Handler for .ready() called.

$("body").on("click", '.clicker',function(e){
  var content = $(this).find('.dropdown').toggle();
});

$.ajax({
    url: "https://marvelapi.herokuapp.com/comics", 
    success: function(result){


    function setImgTable(){
        var comics = result.data.results;

        comics.forEach(function(comic){
            var comicThumbnail = comic.images[0].path+"."+comic.images[0].extension;
            $(".comicContent").append("<div class='col-md-4 clicker'><img src='"+comicThumbnail+"'><div class='dropdown'><h3>"+comic.title+"</h3><div class='description'>'"+comic.description+"'</div> $"+comic.prices[0].price+"</div></div>");
        });
        
    }

    setImgTable();

}});


});