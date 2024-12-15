// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Play Buttons
document.addEventListener("DOMContentLoaded", () => {
  const playButtons = document.querySelectorAll(".play-button");

  playButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Pause any currently playing audio
      const currentAudio = document.querySelector("audio");
      if (currentAudio) currentAudio.remove();

      // Get the audio file for this song
      const songDiv = event.target.closest(".song");
      const audioSrc = songDiv.getAttribute("data-audio");

      // Create and play the audio
      const audio = document.createElement("audio");
      audio.src = audioSrc;
      audio.controls = true;
      songDiv.appendChild(audio);
      audio.play();
    });
  });
});

