<?php

	$name = $_Post['name'];
	$visitor_email = $_Post['email'];
	$message = $_Post['message'];

	$email_from = 'alejandro.acosta@at-techno.com';

	$email_subject = "New Form Submission";


	$email_body = "User Name: $name.\n";
					"User Email: $visitor_email.\n";
						"User Message: $message.\n";

	$to = "aacosta29@icloud.com";
	$headers = "From: $email_from \r\n";

	$headers = "Reply-to: $visitor_email \r\n";

	mail($to,$email_subject,$email_body,$headers);

	header("Location: index.html")


?>