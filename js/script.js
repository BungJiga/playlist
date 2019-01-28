/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Not Irl","Jungle Fury" , "Walking On The Moon", "Fight"  ];
var image_links = ["https://pbs.twimg.com/media/DwgEzEaVAAApULc.jpg" , "https://f4.bcbits.com/img/a4272051150_10.jpg" , "https://images.genius.com/2f97138abde711240af43d0e5d015d13.1000x1000x1.jpg", "https://vignette.wikia.nocookie.net/monstercat/images/4/40/Tokyo_Machine_-_FIGHT.jpg/revision/latest?cb=20161021172627"];
var artists = ["Modestep","RIOT","Infected Mushroom","Tokyo Machine" ];
var lengths = ["4:12","5:11","5:36","3:36"];
var links = ["https://www.youtube.com/watch?v=SzQKBrU1YWM" , "https://www.youtube.com/watch?v=mype6RcMMmY" , "https://www.youtube.com/watch?v=U4hMQtcKfQo" , "https://www.youtube.com/watch?v=qvBlHBHUTMs"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
  $("#songs").append('<p  class="one">' + "Songs" + '</p>');
for (var i = 0; i < songs.length; i++){

 $("#songs").append('<p>' + songs[i] + '</p>');
    
    
}
 $("#artists").append('<p  class="one">' + "Artists" + '</p>');   
for (var i = 0; i < artists.length; i++){

 $("#artists").append('<p>' + artists[i] + '</p>');
    
    
}
   $("#images").append('<p  class="one">' + "Images" + '</p>'); 
for (var i = 0; i < image_links.length; i++){
    
  
  $("#images").append('<img src=" ' + image_links[i] + '">' );  
    
}
 $("#lengths").append('<p  class="one">' + "Length" + '</p>'); 
for (var i = 0; i < lengths.length; i++){
 

 $("#lengths").append('<p>' + lengths[i] + '</p>');
}

 $("#links").append('<p  class="one">' + "Link" + '</p>'); 

links.forEach(function(link){
 
 $("#links").append('<a  href="' + link + '" target="_blank">' + 'Listen' + '</a>');
 
 
});


}

function emptySongInfo(){
    $("#songs").empty();
    $("#artists").empty();
    $("#images").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
