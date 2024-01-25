// Function to generate a random number within a given range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to generate a random file name
  function generateRandomFileName() {
    return `song_${getRandomNumber(1000, 9999)}.mp3`;
  }
  
  // Array to store 100 songs
   export const songs = [];
  
  // Populate the array with 100 objects
  for (let i = 1; i <= 40; i++) {
    const song = {
      songName: `Song ${i}`,
      artistName: `Artist ${getRandomNumber(1, 10)}`,
      trackNumber: i,
      file: generateRandomFileName()
    };
  
    songs.push(song);
  }
  


  