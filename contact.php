<?php
  if(empty($_POST['name']) || empty($_POST['email']) || 
      empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){

    die( 'Désolé, le message n\' est pas envoyé');
    return false;
  } 
  $name = strip_tags(htmlspecialchars($_POST['name']));
  $email = strip_tags(htmlspecialchars($_POST['email']));
  $message = strip_tags(htmlspecialchars($_POST['message']));
  $subject = strip_tags(htmlspecialchars($_POST['subject']));

  $to = 'kingservices27@gmail.com';

  $email_subject = "King services formulaire de contacte : $name";
  $email_body = "Vous avez réçu un nouveau message depuis le formuaire. \n\n"
            ."Voici les détails : \n\n Name : $name \n\n Email : $email \n\n sujet : $subject \n\n Message : $message";

  $headers = "From : noreply@gmail.com\n";
  $headers .= "Reply-To : $email";
  
  mail($to, $email_subject, $email_body, $headers);
  return true;
?>