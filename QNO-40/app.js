"use strict";
// Task 40
function makeAlbum(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: artist.charAt(0).toUpperCase() + title.slice(1),
    };
    return dictionaries;
}
let album = makeAlbum("ali", "light");
console.log(album);
let album1 = makeAlbum("ali", "red wave");
console.log(album1);
let album2 = makeAlbum("ali", "Shuraim");
console.log(album2);
