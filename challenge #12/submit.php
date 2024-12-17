
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Email address where the form data will be sent
    $to = "youremail@example.com";  // Replace with your email
    $subject = "New Contact Form Submission: " . $subject;
    
    // Email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Subject: $subject\n";
    $body .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us. We'll get back to you shortly.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}

@media (max-width: 768px) {
    .logo {
        font-size: 2rem;
    }

    nav ul {
        flex-direction: column;
        padding: 10px 0;
    }

    nav ul li {
        margin: 10px 0;
    }

    section img {
        height: auto;
    }

    .artist h3, .artwork h3 {
        font-size: 1.5em;
    }

    .artist p {
        font-size: 1em;
    }

    #artist-section, #artwork-section {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    footer {
        padding: 10px;
    }

@media (max-width: 600px) {
    .logo {
        font-size: 1.5rem;
    }

    nav ul li a {
        font-size: 1em;
    }

    section h2 {
        font-size: 1.5em;
    }

    .artist h3, .artwork h3 {
        font-size: 1.2em;
    }

    .artist p {
        font-size: 0.9em;
    }

    #artist-section, #artwork-section {
        grid-template-columns: 1fr;
    }

    footer p {
        font-size: 0.9em;
    }
