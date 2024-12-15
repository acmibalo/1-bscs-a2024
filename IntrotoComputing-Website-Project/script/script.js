document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Toggle the 'active' class
    });
});

document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    const name = document.getElementById('username').value.trim();
    const greetingElement = document.getElementById('greeting');
    const optionsContainer = document.getElementById('optionsContainer'); // Reference the options container

    if (name) {
        greetingElement.textContent = `Hello, ${name}! Welcome to the website! Please select your mood for today`;

        // Clear any existing options before adding new ones
        optionsContainer.innerHTML = '';

        // Function to open a new tab with custom content
        function openNewTab(content, song1, song2, backgroundImage1, backgroundImage2) {
            const newWindow = window.open('', '_blank');
            newWindow.document.write(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Your Mood</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            text-align: center;
                            margin: 0;
                            padding: 20px;
                            background-color: #F5F5F5;
                            color: #333;
                            height: 100vh;
                            background-size: cover;
                            background-position: center;
                        }
                        #navbar {
                            background-color: white;
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
                            z-index: 10;
                            padding: 10px 20px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                        #hamburger {
                            display: flex;
                            flex-direction: column;
                            cursor: pointer;
                        }
                        #hamburger div {
                            width: 25px;
                            height: 3px;
                            background-color: #333;
                            margin: 4px 0;
                        }
                        #menu {
                            display: none;
                            position: absolute;
                            top: 50px;
                            left: 10px;
                            background-color: white;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                        }
                        #menu a {
                            display: block;
                            padding: 10px 20px;
                            text-decoration: none;
                            color: #333;
                            font-size: 1em;
                        }
                        #menu a:hover {
                            background-color: #ddd;
                        }
                        h1 {
                            color: #4CAF50;
                            font-size: 3em;
                            margin-top: 100px;
                        }
                        p {
                            font-size: 2em;
                            line-height: 3;
                        }
                        button {
                            padding: 10px 20px;
                            font-size: 1em;
                            margin: 10px;
                            background-color: #E9D7C0;
                            color: #92ADA4;
                            border: none;
                            border-radius: 5px;
                            cursor: pointer;
                        }
                        button:hover {
                            background-color: #E9D7C0;
                        }
                    </style>
                </head>
                <body>
                    <nav id="navbar">
                        <div id="hamburger">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div id="menu">
                            <a href="index.html">Home</a>
                        </div>
                    </nav>
                    <h1>${content}</h1>
                    <button id="pushMeButton">Push Me</button>
                    <div id="songButtons" style="display: none;">
                        <button id="song1Button">Play Song 1</button>
                        <button id="song2Button">Play Song 2</button>
                    </div>
                    <script>
                        const hamburger = document.getElementById('hamburger');
                        const menu = document.getElementById('menu');
        
                        hamburger.addEventListener('click', function() {
                            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                        });
        
                        document.getElementById('pushMeButton').addEventListener('click', function() {
                            document.getElementById('songButtons').style.display = 'block';
                        });
        
                        document.getElementById('song1Button').addEventListener('click', function() {
                            const audio1 = new Audio('${song1}');
                            audio1.play();
                            document.body.style.backgroundImage = 'url("${backgroundImage1}")';
                        });
        
                        document.getElementById('song2Button').addEventListener('click', function() {
                            const audio2 = new Audio('${song2}');
                            audio2.play();
                            document.body.style.backgroundImage = 'url("${backgroundImage2}")';
                        });
                    </script>
                </body>
                </html>`);
            newWindow.document.close();
        }
        
        
        // Example of mood buttons
        const buttonOptions = [
            {
                label: 'Happy',
                content: `
                    <div style="background-color: rgba(255, 255, 255, 0.5); padding: 20px; border-radius: 10px; font-size: 10px; color: #333;">
                        <h1 style="font-size: 1.8em; margin-top: 0; color: #FED8A6;">Happy Mood 😊</h1>
                        <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                        Hey there, ${name}!
                        </p>
                        <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                            Your happiness is a beautiful thing, like a warm light that radiates from within and touches everyone around you. 
                            That smile of yours? It’s magic—it can brighten a cloudy day, lift spirits, and even remind people of all the good that exists in the world.
                        </p>
                        <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                            Life has its ups and downs, and we all face challenges that test our strength. 
                            But look at you—you’ve already come so far, overcoming obstacles and proving your resilience time and time again. 
                            Your ability to hold onto your happiness and wear that smile is not just a sign of joy; it’s a testament to your strength, courage, and determination.
                        </p>
                        <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                            Happiness isn’t about never facing problems—it’s about having the mindset and heart to rise above them. 
                            Your smile shows that you understand this, that you’re ready to tackle whatever comes next with grace and optimism.
                        </p>
                        <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                            So, don’t ever stop smiling. Let that joy of yours shine even brighter. 
                            Keep chasing your dreams, living boldly, and finding reasons to laugh every single day. 
                            With your positivity and determination, there’s no mountain too high or problem too big for you to conquer.
                        </p>
                        <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                            You’re not just surviving—you’re thriving. And the world is truly better with your energy in it. 
                            Keep being the incredible person you are, spreading happiness and light wherever you go.
                        </p>
                        <p style="margin-top: 20px; font-size: 1.5em;">
                            You’ve got this, and nothing can stop you! 🌟😊
                        </p>
                    </div>
                `,
                song1: 'script/music/Duvet.mp3',
                song2: 'script/music/SMH.mp3',
                backgroundImage1: 'script/img/happy.gif',
                backgroundImage2: 'script/img/joyful.gif'
            },
    
                {
                    label: 'Sad',
                    content: `
                        <div style="background-color: rgba(255, 255, 255, 0.5); padding: 20px; border-radius: 10px; font-size: 10px; color: #333;">
                            <h1 style="font-size: 1.8em; margin-top: 0; color: #FED8A6;">Sad Mood 😔</h1>
                            <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                            Hey there, ${name}!
                            </p>
                            <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                                I know things feel heavy right now, and it’s okay to feel this way. Life can be overwhelming sometimes, and sadness is a natural part of the journey. But I want you to remember one thing—this moment, no matter how tough it seems, will pass.
                            </p>
                            <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                                You’re stronger than you realize, even on days when it feels like the weight of the world is too much to bear. Each tear, each moment of doubt, is shaping you into a more resilient, more compassionate version of yourself. Even when it’s hard to see it, you are growing through this.
                            </p>
                            <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                                Take it one step at a time, one breath at a time. There’s no rush to feel okay—healing isn’t a race. But believe this: brighter days are ahead. The sun always returns after the storm, and so will your joy.
                            </p>
                            <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                                When you feel ready, try to focus on small things that bring you comfort—a warm cup of tea, a kind word, a favorite song. Surround yourself with people who uplift you, and don’t hesitate to reach out if you need support. You don’t have to go through this alone.
                            </p>
                            <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                                Your sadness doesn’t define you—it’s just a part of your story, not the whole book. You are capable of so much love, hope, and happiness, even if it feels distant right now. Hold on, because the best chapters of your life are still being written.
                            </p>
                            <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                                You are loved, you are valued, and you are never truly alone. Keep going—you’ve got this. 🌈
                            </p>
                        </div>
                    `,
                    song1: 'script/music/SDITD.mp3',
                    song2: 'script/music/GH.mp3',
                    backgroundImage1: 'script/img/sad.gif',
                    backgroundImage2: 'script/img/comfort.gif'
                },
    
                    {
                        label: 'Energetic',
                        content: `
                            <div style="background-color: rgba(255, 255, 255, 0.5); padding: 20px; border-radius: 10px; font-size: 10px; color: #333;">
                                <h1 style="font-size: 1.8em; margin-top: 0; color: #FED8A6;">Energetic Mood 💪</h1>
                                <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                                Hey there, ${name}!
                                </p>
                                <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                                    Your energy is contagious—it’s like a wildfire of positivity and enthusiasm that lights up every room you walk into! 
                                    That spark inside you is something special, and it’s what makes you unstoppable.
                                </p>
                                <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                                    With all that energy, you have the power to take on challenges, inspire those around you, and chase your dreams with relentless passion. 
                                    You’re the kind of person who turns “maybe” into “definitely” and “someday” into “right now.”
                                </p>
                                <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                                    Remember, your energy is a gift, but even the brightest flames need fuel. Make sure you take moments to recharge, reflect, and realign so you can keep showing up at your best.
                                </p>
                                <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                                    Keep running toward your goals, keep spreading that fire, and keep being the dynamic, unstoppable force that you are. The world is yours for the taking, 
                                    and with your energy, there’s nothing you can’t achieve.
                                </p>
                                <p style="margin-top: 20px; line-height: 1.6; font-size: 1.5em;">
                                    You’re a trailblazer—keep charging forward, and never stop being the incredible person you are. Let your energy move mountains! 🌟🚀
                                </p>
                            </div>
                        `,
                        song1: 'script/music/SW.mp3',
                        song2: 'script/music/YDAB.mp3',
                        backgroundImage1: 'script/img/energetic.gif',
                        backgroundImage2: 'script/img/vibrant.gif'
                    }
                
        ];
        
        // Add buttons dynamically
        buttonOptions.forEach(function(option) {
            const button = document.createElement('button');
            button.textContent = option.label;
            button.addEventListener('click', function() {
                openNewTab(option.content, option.song1, option.song2, option.backgroundImage1, option.backgroundImage2);
            });
            optionsContainer.appendChild(button);
        });
    } else {
        greetingElement.textContent = 'Please enter your name to get started.';
    }
});

// About Button functionality to open a new tab
// About Button functionality to open a new tab
document.getElementById('aboutButton').addEventListener('click', function () {
    const newTab = window.open('', '_blank');
    newTab.document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> ABOUT </title> 
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(to top right, #DAA38F, #E9D7C0); /* Roasted Peach and Whole Wheat Gradient */
            color: #333;
            margin: 0;
            padding: 20px;
            padding-top: 60px;
        }

        h1 {
            color: #92ADA4;
            font-size: 3em;
            margin-bottom: 20px;
            text-align: center;
        }

        p {
            font-size: 1.2em;
            line-height: 1.8;
            margin-bottom: 20px;
            text-align: center;
        }

        .mood-list {
            padding-left: 20px;
            font-size: 1.1em;
            background: linear-gradient(to top right, #DAA38F, #E9D7C0); /* Roasted Peach and Whole Wheat Gradient */
            border: 2px solid #DAA38F;
            border-radius: 8px;
            padding: 15px;
            background-color: #fff;
            margin: 0 auto;
            max-width: 600px;
        }

        .mood-list li {
            margin-bottom: 15px;
            line-height: 1.6;
        }

        #navbar-popup {
            background-color: white;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 250px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 10;
            display: none;
            border-radius: 8px;
        }

        #navbar-popup ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        #navbar-popup ul li {
            margin: 15px 0;
        }

        #navbar-popup ul li a {
            text-decoration: none;
            color: #333;
            font-size: 1.5em;
            padding: 12px;
            display: block;
            transition: background-color 0.3s ease;
            border-radius: 5px;
        }

        #navbar-popup ul li a.home {
            background-color: #92ADA4;
        }

        #navbar-popup ul li a.contact {
            background-color: #92ADA4;
        }

        #navbar-popup ul li a:hover {
            background-color: #ddd;
            color: black;
        }

        #menu-icon {
            font-size: 35px;
            cursor: pointer;
            background-color: #E9D7C0;
            color: white;
            padding: 12px;
            border-radius: 5px;
            position: fixed;
            top: 10px;
            left: 10px;
            z-index: 20;
        }

        #close-btn {
            font-size: 22px;
            cursor: pointer;
            background-color: #92ADA4;
            color: white;
            padding: 6px 12px;
            border-radius: 5px;
            position: absolute;
            top: 10px;
            right: 10px;
        }

        .author-name {
            text-decoration: underline;
            cursor: pointer;
            color: #9B7D61;
        }

        #bio-popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #E9D7C0;
    padding: 15px;
    border: 2px solid #9B7D61;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    z-index: 100;
    max-width: 90vw; /* Maximum width is 90% of the viewport width */
    max-height: 90vh; /* Maximum height is 90% of the viewport height */
    overflow-y: auto; /* Allow scrolling if content overflows */
}

#bio-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px; /* Space between the photo and other content */
}

#bio-close-btn {
    background-color: #9B7D61;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px; /* Adds spacing between button and content */
}

#bio-close-btn:hover {
    background-color: #9B7D61;
}

    </style>
</head>
<body>
    <div id="menu-icon">&#9776; Menu</div>

    <div id="navbar-popup">
        <div id="close-btn">&#10005;</div>
        <ul>
            <li><a href="index.html" class="home">Home</a></li>
        </ul>
    </div>

    <div class="content">
        <h1>About This Website</h1>
        <p>Welcome to our interactive space where <strong>mood meets music and visuals</strong>!</p>
        <p>This website was designed to bring a little joy and excitement to your day by helping you express how you're feeling. Whether you're feeling happy, sad, or energetic, we've got the perfect playlist and background to match your mood.</p>
        <p>Here’s what you can expect:</p>
        <ul class="mood-list">
            <li><strong>Personalized Greetings</strong>: Enter your name, and we'll greet you with a warm welcome!</li>
            <li><strong>Mood Selection</strong>: Choose your mood for the day, and we’ll play music that fits the vibe.</li>
            <li><strong>Interactive Fun</strong>: Each mood comes with unique visuals and sounds to make the experience more immersive.</li>
            <li><strong>Background Music</strong>: Every mood is paired with songs that match the emotion, making your time here even more enjoyable.</li>
            <li><strong>Feel-Good Vibes</strong>: Whether you need a boost of energy or a moment of calm, this site is here to set the mood!</li>
        </ul>
        <p>Designed with you in mind, this platform offers a dynamic, engaging experience to brighten your day, one mood at a time.</p>
        <p><span class="author-name" id="author-name">Created by JM MARVIE E. BRIZUELA</span></p>
    </div>

    <div id="bio-popup">
        <img src="script/img/bio.jpg" alt="Author Photo" id="bio-photo">
        <p><strong>CREATOR</strong></p>
        <p>JM MARVIE E. BRIZUELA</p>
        <p>18 years old</p>
        <p>Born: December 16, 2005</p>
        <p>Currently a student at the University of Southern Mindanao with a Course of Bachelor of Science in Computer Science</p>
        <button id="bio-close-btn">Close</button>
    </div>

    <footer>
        <p>&copy; 2024 Whispers of Marvie. All rights reserved.</p>
    </footer>

    <script>
        document.getElementById('menu-icon').addEventListener('click', function () {
            document.getElementById('navbar-popup').style.display = 'block';
        });

        document.getElementById('close-btn').addEventListener('click', function () {
            document.getElementById('navbar-popup').style.display = 'none';
        });

        document.getElementById('author-name').addEventListener('click', function () {
            document.getElementById('bio-popup').style.display = 'block';
        });

        document.getElementById('bio-close-btn').addEventListener('click', function () {
            document.getElementById('bio-popup').style.display = 'none';
        });
    </script>
</body>
</html>

    `);
    newTab.document.close();
});

// Add a Contacts popup
// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add a Contacts popup
    const contactButton = document.getElementById('contactButton');
    if (contactButton) {
        contactButton.addEventListener('click', function () {
            // Create the popup container
            const popup = document.createElement('div');
            popup.id = 'contactsPopup';
            popup.style = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 300px;
                background-color: white;
                border: 2px solid #4CAF50;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                z-index: 1000;
            `;

            // Add contact info content
            popup.innerHTML = `
                <h2>Contact Us</h2>
                <p>If you need to get in touch, you can contact the website owner through:</p>
                <ul>
                    <li>Email: <a href="mailto:jmmarvieb@gmail.com">jmmarvieb@gmail.com</a></li>
                    <li>Phone: +63 9971437827</li>
                </ul>
                <button type="button" id="closePopup" style="background-color: red; color: white; padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer;">Close</button>
            `;

            // Append the popup to the body
            document.body.appendChild(popup);

            // Close the popup when "Close" button is clicked
            document.getElementById('closePopup').addEventListener('click', function () {
                document.body.removeChild(popup);
            });
        });
    }
});
