// Task 40




function makeAlbum (artist:any, title:any){
      const dictionaries ={
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: artist.charAt(0).toUpperCase() + title.slice(1),

      }
      return dictionaries;
      
}
let album = makeAlbum("Ali","light")
console.log(album)

let album1 = makeAlbum("Sarim","red wave")
console.log(album1)

let album2 = makeAlbum("Abiyan","Shuraim")
console.log(album2)

