function openSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.workout-section');
    sections.forEach(section => section.style.display = 'none');

    // Remove active class from tabs
    const tabs = document.querySelectorAll('.workout-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Add active class to the clicked tab
    event.target.classList.add('active');
}

function showWorkoutImage(imageUrl) {
    const imageContainer = document.getElementById('imageContainer');
    const imagePopup = document.getElementById('imagePopup');

    imagePopup.src = imageUrl;
    imageContainer.style.display = 'flex';
}

function closeImagePopup() {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.style.display = 'none';
}


function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('program-overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('program-overlay').style.display = 'none';
}



function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Redirect to a new tab with the "See You Soon!" message
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>See You Soon</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-family: Arial, sans-serif;
                    background-color: #f5f5f5;
                    color: #333;
                }
                h1 {
                    font-size: 3rem;
                }
            </style>
        </head>
        <body>
            <h1>See You Soon!</h1>
        </body>
        </html>
    `);
    newWindow.document.close();
}
