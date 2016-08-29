$( document ).ready(function() {
	// Handler for .ready() called.

$("body").on("click", '.clicker',function(e){
  var content = $(this).find('.dropdown').toggle();
});

$.ajax({url: "https://marvelapi.herokuapp.com/characters", success: function(result){

	function setDataDropdown(character){

        var series = character.series.items;
        var bigString = "";
        var counter = 0;

        series.forEach(function(story){
            series.forEach(function(story){
                if(counter <=4){
                var name = story.name;
                bigString += "<p>'"+name+"'</p>";
                counter++;
                }
            });
            
        });

        return bigString;
    }

    function setImgTable(){
        var characters = result.data.results;
        characters.forEach(function(character){
            var dropdown = setDataDropdown(character);
            var charaThumbnail = character.thumbnail.path+"."+character.thumbnail.extension;
            $(".charaContent").append("<div class='col-md-4 clicker'><img src='"+charaThumbnail+"'><div class='dropdown'><h3>"+character.name+"</h3><div class='description'>'"+character.description+"'</div>"+dropdown+"</div></div>");
        });
        
    }

    setImgTable();

}});


});