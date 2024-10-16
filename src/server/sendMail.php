<?php

$email = "dmytro.adamovych@gmail.com";
$subject = 'Test Email';
$message = 'This is a test email.' . $_POST['email'];

$headers = "From: dmytro.adamovych@gmail.com\r\n";
$headers .= "Reply-To: dmytro.adamovych@gmail.com\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Відправити лист
if (mail($email, $subject, $message, $headers)) {
    echo 'Email sent successfully!';
} else {
    echo 'Failed to send email!';
}
?>