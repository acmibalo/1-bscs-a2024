<?php

if(isset($_POST['submit'])){
    $firstname = $_POST['firstname'];
    $lastname = $_POST['firstname'];
    $message = $_POST['subject'];

    $text = "Mail from".$firstname." ".$lastname.".\n\n".$message;

    mail("carlo.castro.320401@gmail.com", "contact-website", $text);
    header("Location: contacts.php?mailsent");
}
