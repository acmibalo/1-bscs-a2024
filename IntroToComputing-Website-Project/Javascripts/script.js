function togglePlayPause(button) {
  const album = button.closest('.album'); // Find the parent album
  const audioElement = album.querySelector('audio'); // Get the audio element for that album
  const tracklist = album.querySelectorAll('.tracklist li'); // Get the tracklist items

  // Get the current index of the track being played, default to 0 if not found
  let currentTrackIndex = parseInt(album.dataset.currentTrackIndex) || 0;

  if (audioElement.paused) {
    // Play the audio
    const trackSrc = tracklist[currentTrackIndex].getAttribute('data-src');
    audioElement.src = trackSrc; // Set the source to the current track
    audioElement.play(); // Play the track
    button.innerHTML = '<i class="fas fa-pause"></i>'; // Change the play button to pause

    // Set up the 'ended' event to play the next track when the current one ends
    audioElement.addEventListener('ended', function() {
      playNextTrack(album, button, tracklist);  // Play the next track when current track ends
    });

    // Store the current track index on the album element
    album.dataset.currentTrackIndex = currentTrackIndex;
  } else {
    // Pause the audio
    audioElement.pause();
    button.innerHTML = '<i class="fas fa-play"></i>'; // Change the button back to play
  }
}

function playNextTrack(album, button, tracklist) {
  // Get the current track index
  let currentTrackIndex = parseInt(album.dataset.currentTrackIndex) || 0;

  // Increment the index to play the next track
  currentTrackIndex++;

  // If the next track exceeds the total number of tracks, loop back to the first track
  if (currentTrackIndex >= tracklist.length) {
    currentTrackIndex = 0; // Reset to the first track
  }

  // Set the new source for the next track
  const trackSrc = tracklist[currentTrackIndex].getAttribute('data-src');
  const audioElement = album.querySelector('audio');
  audioElement.src = trackSrc; // Update the audio source

  // Play the next track
  audioElement.play();

  // Update the button to show the pause icon
  button.innerHTML = '<i class="fas fa-pause"></i>';

  // Update the current track index on the album element
  album.dataset.currentTrackIndex = currentTrackIndex;
}
// Play the next track
function playNextTrack(button) {
  const album = button.closest('.album');
  const audioElement = album.querySelector('audio');
  const tracklist = album.querySelectorAll('.tracklist li');
  
  // Get the current track index from the album's data attribute
  let currentTrackIndex = parseInt(album.dataset.currentTrackIndex) || 0;

  // Increment the track index
  currentTrackIndex++;
  if (currentTrackIndex >= tracklist.length) {
    currentTrackIndex = 0; // Loop back to the first track
  }

  // Get the next track's source and play it
  const trackSrc = tracklist[currentTrackIndex].getAttribute('data-src');
  audioElement.src = trackSrc;
  audioElement.play();

  // Update the play/pause button to reflect that the track is playing
  const playPauseBtn = album.querySelector('.playPauseBtn');
  playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';

  // Update the current track index on the album element
  album.dataset.currentTrackIndex = currentTrackIndex;
}

// Play the previous track
function playPrevTrack(button) {
  const album = button.closest('.album');
  const audioElement = album.querySelector('audio');
  const tracklist = album.querySelectorAll('.tracklist li');
  
  // Get the current track index from the album's data attribute
  let currentTrackIndex = parseInt(album.dataset.currentTrackIndex) || 0;

  // Decrement the track index
  currentTrackIndex--;
  if (currentTrackIndex < 0) {
    currentTrackIndex = tracklist.length - 1; // Loop back to the last track
  }

  // Get the previous track's source and play it
  const trackSrc = tracklist[currentTrackIndex].getAttribute('data-src');
  audioElement.src = trackSrc;
  audioElement.play();

  // Update the play/pause button to reflect that the track is playing
  const playPauseBtn = album.querySelector('.playPauseBtn');
  playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';

  // Update the current track index on the album element
  album.dataset.currentTrackIndex = currentTrackIndex;
}

// Function to toggle the tracklist visibility
function toggleTracklist(button) {
  const album = button.closest('.album'); // Find the parent album
  const tracklist = album.querySelector('.tracklist'); // Get the tracklist for this album
  tracklist.classList.toggle('visible'); // Toggle the 'visible' class to show/hide the tracklist
}