const audioPlayer = document.getElementById("audio-player");
const availableSongsSection = document.getElementById("available-songs-section");
const playlistSection = document.getElementById("playlist-section");
const availableSongs = document.getElementById("available-songs");
const playlist = document.getElementById("playlist");

let currentSongIndex = 0;
const allSongs = [];
const playlistSongs = [];

// Initialize all available songs
for (let i = 1; i <= 20; i++) {
  const songPath = `music/music${i}.mp3`;
  allSongs.push({ name: `Music ${i}`, path: songPath });
  
  const listItem = document.createElement("li");
  listItem.textContent = `Music ${i}`;
  
  const addButton = document.createElement("button");
  addButton.textContent = "Add";
  addButton.onclick = () => addSongToPlaylist(i - 1);
  
  listItem.appendChild(addButton);
  availableSongs.appendChild(listItem);
}

// Add selected song to playlist
function addSongToPlaylist(index) {
  const song = allSongs[index];
  if (!playlistSongs.includes(song)) {
    playlistSongs.push(song);
    
    const listItem = document.createElement("li");
    listItem.textContent = song.name;
    playlist.appendChild(listItem);
  }
}

// Show the playlist section
function showPlaylist() {
  availableSongsSection.style.display = "none";
  playlistSection.style.display = "block";
}

// Show available songs to add more songs
function showAvailableSongs() {
  availableSongsSection.style.display = "block";
  playlistSection.style.display = "none";
}

// Play the playlist from the beginning
function playPlaylist() {
  if (playlistSongs.length > 0) {
    currentSongIndex = 0;
    playSong(currentSongIndex);
  }
}

// Play a specific song from the playlist
function playSong(index) {
  if (playlistSongs[index]) {
    audioPlayer.src = playlistSongs[index].path;
    audioPlayer.play();
    currentSongIndex = index;
  }
}

// Toggle play/pause
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

// Play the next song in the playlist
function nextSong() {
  if (currentSongIndex < playlistSongs.length - 1) {
    currentSongIndex++;
  } else {
    currentSongIndex = 0; // Loop back to the beginning
  }
  playSong(currentSongIndex);
}

// Play the previous song in the playlist
function previousSong() {
  if (currentSongIndex > 0) {
    currentSongIndex--;
  } else {
    currentSongIndex = playlistSongs.length - 1; // Loop to the last song
  }
  playSong(currentSongIndex);
}
