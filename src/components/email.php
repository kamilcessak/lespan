<?php

    error_reporting(-1);
    ini_set('display_errors', 'On');
    set_error_handler("var_dump");

    if(isset($_POST['submit'])){
        $to = "kamilcessak0@gmail.com";
        $fname = $_POST['firstName'];
        $lname = $_POST['lastName'];
        $from = $_POST['email'];
        $message = $_POST['message'];
        $subject = "Wiadomość z Lespan.pl";

        $msg = $fname . " " . $lname . " " . $from . " " . $message . ":)";

        $headers = "From:" .$from;

        $success = mail($to,$subject,$msg,$headers);

        if($success){
        print("T");
        }
        else{
        print("F");
        } 
    }
?>