<?php
use mdm\admin\models\User;

   $con = mysqli_connect("localhost","root","","spa");

   if (mysqli_connect_errno($con)) {
	   echo "Failed to connect to MySQL: " . mysqli_connect_error();
   }



   $username = 'Admin';//$_POST['username'];
   $password = 123123;//$_POST['password'];

   $result = mysqli_query($con,"SELECT email FROM `user` where username='$username'");
  while($row = mysqli_fetch_array($result)){
	  $data = $row[0];
	  echo $data;
  }

//where username='$username' and password='$password'

   mysqli_close($con);



