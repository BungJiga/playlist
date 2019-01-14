/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Not Irl","Jungle Fury" , "Walking On The Moon", "Fight"  ];
var image_links = ["https://pbs.twimg.com/media/DwgEzEaVAAApULc.jpg"];
var artists = ["Modestep","RIOT","Infected Mushroom","Tokyo Machine" ];
var lengths = ["4:12"];
var links = ["https://www.youtube.com/watch?v=SzQKBrU1YWM"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
for (var i = 0; i < songs.length; i++){
    
 $("#songs").append(songs[i]);
    
    
}
for (var i = 0; i < artists.length; i++){
    
 $("#artists").append(artists[i]);
    
    
}
for (var i = 0; i < image_links.length; i++){
    
console.log(image_links[i]);
  $("#images").html('<img src=" ' + image_links[i] + '">' );  
    
}
for (var i = 0; i < lengths.length; i++){
    
 $("#lengths").append(lengths[i]);
}


}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


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
