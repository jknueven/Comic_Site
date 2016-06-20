$( document ).ready(function() {
	// Handler for .ready() called.

$("body").on("click", '.clicker',function(e){
  var content = $(this).find('.dropdown').toggle();
});

$.ajax({url: "http://gateway.marvel.com:80/v1/public/comics?apikey=a3d450fd87cce2aeff11efbcc111f789", success: function(result){
    console.log(results);
	function setDataDropdown(){

        var series = comic.series.items;
        var bigString = "";

        series.forEach(function(story){
            series.forEach(function(story){
                var name = story.name;
                bigString += "<div class='row series'><ul>'"+name+"'</ul></div>";
            })
            
        })

        return bigString;
    }

    function setImgTable(){
        var comics = result.data.results;

        comics.forEach(function(comic){
            var dropdown = setDataDropdown(comic);
            var comicThumbnail = comic.images[0].path+"."+comic.images[0].extension;
            var descrip = comic.description;
            $(".comicContent").append("<div class='col-md-4 clicker'><img src='"+comicThumbnail+"'><div class='dropdown'><div class='row description'>'"+descrip+"'</div>"+dropdown+"</div></div>");
        })
        
    }

    setImgTable();

}});


});