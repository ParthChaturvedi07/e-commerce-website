<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
   $name = $_POST['username'];
   $email = $_POST['email'];
   $subject = $_POST['subject'];
   $message = $_POST['message'];

$conn = mysqli_connect("localhost","root","","ecommercewebsite" ,3306);

if(!$conn){
   die("Error: " . mysqli_connect_error($conn));
}
else{
   echo "Connection successful!";
   $sql = "insert into `register`(name,email,subject,message)values('$name','$email','$subject','$message')";
   $result = mysqli_query($conn,$sql);
   if($result){
      echo "Data inserted successfully";
   }else{
      die(mysqli_error($conn));
   }
}
}
?>