$(".show_search").on("click", function(event){
    event.preventDefault();

    $(".search_area").empty();

    $(".search_area").html('<form class="form-inline"><div class="form-group mb-2"><label for="staticEmail2" class="sr-only">Email</label><input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Search for tutorials: "></div><div class="form-group mx-sm-3 mb-2"><label for="inputPassword2" class="sr-only"></label><input class="form-control" id="inputPassword2" placeholder=" "></div><button type="submit" class="btn btn-primary mb-2 search_btn">Search</button></form>');

    console.log("hello");
    $(".search_btn").on("click", function(event){
        event.preventDefault();
    
        search();
    
        console.log('goodbye');
    
    })

});

function search() {
    $("#results").html("");

    var search = $(".form-control").val().trim();

    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet, id",
            q: search + " piano tutorial",
            type: "video",
            maxResults: 5,
            key: "AIzaSyCDHzzlaYYZ23WOUIkyFB4qVqcgoXu7T1s"
        }, function(data){
            console.log(data);

            $.each(data.items, function(i, item){
                console.log(item);

                var videoID = item.id.videoId;
                var videoTitle = item.snippet.title;
                var thumb = item.snippet.thumbnails.medium.url;
                var description = item.snippet.description;

                console.log(videoID);
                // $("#results").append("<button onclick='location.href='http://google.com';'><img src= " + thumb + "> " + videoTitle + " " + description + "</button>");

                $("#results").append("<iframe class='tutorial' val='" + videoID + "' width='560' height='315' src='https://www.youtube.com/embed/" + videoID + "' frameborder = '0' allow='autoplay; encrypted media' allowfullscreen></iframe>");
                
            });
        }
    )

}
