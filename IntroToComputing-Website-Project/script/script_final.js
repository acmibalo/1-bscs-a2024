// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    adjustVideoPlayback();
    initializeTimeUpdate();
    populateBloomTrackerTable();
    addSearchIconClickListener();
    addMousemoveListener();
});

// Adjust the video playback speed
function adjustVideoPlayback() {
    var video = document.getElementById("backgroundVideo");
    if (video) {
        video.playbackRate = 0.5; // Slow down the video playback to half speed

        video.addEventListener('ended', function() {
            video.pause(); // Pause the video when it ends
            setTimeout(function() {
                video.currentTime = 0; // Rewind to the start
                video.play(); // Play the video again
            }, 1000); // Adjust the delay as needed
        });
    }
}

// Initialize time update every second
function initializeTimeUpdate() {
    updateTime();
    setInterval(updateTime, 1000); // Update every second
}

// Populate the bloom tracker table
function populateBloomTrackerTable() {
    const bloomData = [
        { location: "Tokyo, Japan", bloom: "75%" },
        { location: "Kyoto, Japan", bloom: "60%" },
        { location: "Osaka, Japan", bloom: "80%" },
        { location: "Washington DC, USA", bloom: "70%" },
        { location: "Seoul, South Korea", bloom: "85%" },
        { location: "Beijing, China", bloom: "65%" },
        { location: "Vancouver, Canada", bloom: "50%" },
        { location: "Taipei, Taiwan", bloom: "55%" },
        { location: "Paris, France", bloom: "40%" },
        { location: "Berlin, Germany", bloom: "45%" }
    ];
    
    const tableBody = document.getElementById('bloom-table');
    if (tableBody) {
        bloomData.forEach(data => {
            const row = document.createElement('tr');
            
            const locationCell = document.createElement('td');
            locationCell.textContent = data.location;
            row.appendChild(locationCell);
            
            const bloomCell = document.createElement('td');
            bloomCell.textContent = data.bloom;
            row.appendChild(bloomCell);
        
            tableBody.appendChild(row);
        });
    }
}

// Add click listener for the search icon
function addSearchIconClickListener() {
    const searchIcon = document.getElementById('searchIcon');
    if (searchIcon) {
        searchIcon.addEventListener('click', toggleSearchBar);
    }
}

// Download a photo
function downloadPhoto(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cherry-blossom.jpg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Toggle the dropdown menu
function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown-content');
    if (dropdown) {
        dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    }
}

// Toggle the search bar
function toggleSearchBar() {
    var searchBar = document.querySelector('.search-bar');
    if (searchBar) {
        searchBar.style.display = (searchBar.style.display === 'block') ? 'none' : 'block';
    }
}

// Update the time display
function updateTime() {
    var now = new Date();
    var formattedTime = now.toLocaleString();
    var trackerElement = document.getElementById('real-time-tracker');
    if (trackerElement) {
        trackerElement.innerHTML = formattedTime;
        trackerElement.style.color = '#371111'; // Set the text color
        trackerElement.style.textShadow = '1px 1px 2px #FF1694'; // Add shadow
    }
}

// Add mouse move listener to create particles
function addMousemoveListener() {
    document.addEventListener('mousemove', function(e) {
        createParticle(e.clientX, e.clientY);
    });
}

// Create a particle effect at the given coordinates
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    // Random color for each particle
    const colors = ['#FFC0CB', '#FF69B4', '#FF1493', '#DB7093', '#C71585'];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(particle);

    particle.addEventListener('animationend', function() {
        particle.remove();
    });
}

// Show a popup alert
function showPopup() {
    alert("Upload button function is coming soon!");
}

// Open a video in a popup
function openVideo(src) {
    document.getElementById('video-popup').style.display = 'flex';
    document.getElementById('popup-video').src = src;
}

// Close the video popup
function closeVideo() {
    document.getElementById('video-popup').style.display = 'none';
    document.getElementById('popup-video').src = '';
}

// Scroll to the bloom tracker table
function scrollToBloomTracker() {
    document.getElementById('bloom-tracker-table').scrollIntoView({ behavior: 'smooth' });
}

// Scroll to a specific section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
