function showVideo(type) {
    document.querySelectorAll('.video-container').forEach(container => {
        container.classList.remove('active');
    });

    if (type === 'local') {
        document.getElementById('localVideo').classList.add('active');
    } else if (type === 'youtube') {
        document.getElementById('youtubeVideo').classList.add('active');
    }
}