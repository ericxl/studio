$(".show_search").on("click", function(event){
    event.preventDefault();

    $(".search_area").empty();

    $(".search_area").html(
        '<form class="form-inline">' + 
            '<div class="form-group mb-2">' +
                '<label for="staticEmail2" class="sr-only">Email</label>' +
                '<input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Search for tutorials: ">' +
            '</div>' + 
            '<div class="form-group mx-sm-3 mb-2">' +
                '<label for="inputPassword2" class="sr-only"></label>' +
                '<input class="form-control artist" id="inputPassword2" placeholder="Artist">' +
            '</div>' + 
            '<div class="form-group mx-sm-3 mb-2">' + 
                '<label for="inputPassword2" class="sr-only"></label>' +
                '<input class="form-control songName" id="inputPassword2" placeholder="Track Name">' +
            '</div>' +
            '<button type="submit" class="btn btn-primary mb-2 search_btn">Search</button>' +
        '<form>'
    );

    $(".search_btn").on("click", function(event){
        event.preventDefault();
    
        search();
    
    })

});

function search() {
    $("#results").html("");

    var songName = $(".songName").val().trim();
    var artist = $(".artist").val().trim();
    var count = 0;

    console.log(artist === "");

    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: "snippet, id",
            q: artist + " " + songName + " piano tutorial",
            type: "video",
            maxResults: 5,
            videoSyndicated: true,
            videoEmbeddable: true,
            key: "AIzaSyCDHzzlaYYZ23WOUIkyFB4qVqcgoXu7T1s"
        }, function(data){
            console.log(data);

            $.each(data.items, function(i, item){

                var vidInfo = {
                    videoID: item.id.videoId,
                    videoTitle: item.snippet.title,
                    thumb: item.snippet.thumbnails.high.url,
                    description: item.snippet.description
                }
                
                $("#results").append("<div class='tutorial hello" + count + "' val='" + vidInfo.videoID + "'><img src= " + vidInfo.thumb + " class='image'><p class='title'>" + vidInfo.videoTitle + "</p><p class='description'>" + vidInfo.description + "</p></div>");
                $(".hello"+count).data(vidInfo);
                count++;

                $(".tutorial").on("click", function(event){
                    console.log($(this).data());
                    var tutVid = $(this).data();
                    $(".video").html("<iframe class='tutorial_video' val='" + tutVid.videoID + "' width='800' height='500' src='https://www.youtube.com/embed/" + tutVid.videoID + "' frameborder = '0' allow='autoplay; encrypted media' allowfullscreen></iframe>");
                    
                })
            });
            
        }
    )

    $.ajax({
        type: "GET",
        data: {
            apikey:"dc323e0e3f23c8b4bab30839be7c790f",
            q_track: songName,
            q_artist: artist,
            f_has_lyrics: 1,
            format:"jsonp",
            callback:"jsonp_callback"
        },
        url: "http://api.musixmatch.com/ws/1.1/track.search",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',
        success: function(data) {
            var track = data.message.body.track_list[0].track;
            console.log(track);
            $(".album_art").html(
                "<div class='song_info'>" + 
                    "<div class='artist_name'>" + track.artist_name + "</div>" + 
                    "<div class='album_name'>" + track.album_name + "</div>" +
                    '<a href="' + track.track_share_url + '" target="_blank"><button class="btn btn-primary mb-2 search_btn">Lyrics</button></a>' + 
                "</div>"
            );
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $(".album_art").empty();
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }    
      });

      

}

// $.get(
//     "http://api.musixmatch.com/ws/1.1/track.search?apikey=dc323e0e3f23c8b4bab30839be7c790f", {
//         q_track: "Let her go",
//         q_artist: "passenger"
//     }, function(data){
//         console.log(data);
//     }
// );

// $.ajax({
//     type: "GET",
//     data: {
//         apikey:"dc323e0e3f23c8b4bab30839be7c790f",
//         q_track:"let her go",
//         q_artist:"passenger",
//         f_has_lyrics: 1,
//         format:"jsonp",
//         callback:"jsonp_callback"
//     },
//     url: "http://api.musixmatch.com/ws/1.1/track.search",
//     dataType: "jsonp",
//     jsonpCallback: 'jsonp_callback',
//     contentType: 'application/json',
//     success: function(data) {
//         console.log(data); 
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//         console.log(jqXHR);
//         console.log(textStatus);
//         console.log(errorThrown);
//     }    
//   });