<?php
  if(empty($_POST['name']) || empty($_POST['email']) || 
      empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){

    die( 'Désolé, le message n\' est pas envoyé');
    header('Location: index.html');
  } 
  $name = strip_tags(htmlspecialchars($_POST['nom']));
  $email = strip_tags(htmlspecialchars($_POST['email']));
  $message = strip_tags(htmlspecialchars($_POST['message']));
  $objet = strip_tags(htmlspecialchars($_POST['objet']));

  $to = 'geedookanda06@@gmail.com';

  $email_subject = "site officiel d'Optmus corp: $name";
  $email_body = "Vous avez réçu un nouveau message depuis le site. \n\n"
            ."Voici les détails : \n\n Name : $name \n\n Email : $email \n\n sujet : $objet \n\n Message : $message";

  $headers = "From : noreply@gmail.com\n";
  $headers .= "Reply-To : $email";
  
  mail($to, $email_subject, $email_body, $headers);
  header('Location: index.html');
?>