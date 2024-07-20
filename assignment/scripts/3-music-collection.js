console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];
console.log('My Collection:', myCollection);

function addToCollection(collection, title, artist, yearPublished) {
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
}
console.log('My collection:', myCollection);

console.log('Add to my Collection;', addToCollection(myCollection, 'Songs in the Key of Life', 'Stevie Wonder', 1976));
console.log('Add to my Collection;', addToCollection(myCollection, 'I Am', 'Earth, Wind & Fire', 1979));
console.log('Add to my Collection;', addToCollection(myCollection, 'Carpenters', 'Carpenters', 1971));
console.log('Add to my Collection;', addToCollection(myCollection, '21', 'Adele', 2011));
console.log('Add to my Collection;', addToCollection(myCollection, 'Willow Creek', 'Marian McPartland', 2006));
console.log('Add to my Collection;', addToCollection(myCollection, 'Songs in A Minor', 'Alicia Keys', 2011));
console.log('My Collection:', myCollection);








// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
