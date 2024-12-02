        // Basic filter functionality
        function filterSongs() {
            var genre = document.getElementById('genreFilter').value.toLowerCase();
            var songs = document.getElementsByClassName('song');
            for (var i = 0; i < songs.length; i++) {
                var songGenre = songs[i].getAttribute('data-genre').toLowerCase();
                if (genre === '' || songGenre === genre) {
                    songs[i].style.display = 'block';
                } else {
                    songs[i].style.display = 'none';
                }
            }
        }