<?php

if(isset($_POST['submit'])){
    $firstname = $_POST['firstname'];
    $lastname = $_POST['firstname'];
    $message = $_POST['subject'];

    $text = "Mail from".$firstname." ".$lastname.".\n\n".$message;

    mail("carlo.castro.320401@gmail.com", "contact-website", $text);
    header("Location: contacts.php?mailsent");

    echo'
    <!DOCTYPE html>
    <html>
        <head>
            <title>done</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta charset="UTF-8">
        </head>
        <body>
            <h1>Thanks for messaging</h1>
        </body>
    </html>
    ';

}
?>