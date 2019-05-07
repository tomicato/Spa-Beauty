<?php

//require 'init.php';
//print_r(json_encode($result));
	echo json_encode(["response" => $result]);
//debug($model->name);
/*$name = $_POST["name"]; 
$email = $_POST["email"];
$password = $_POST["password"];
$password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "select * from users where email like '".$email."'; ";
    $result = mysqli_query($connect, $sql);
    $response = array();
    
    if(mysqli_num_rows($result) > 0){
        $code = "reg_fail";
        $message = "This E-mail alredy exist!";
        array_push($response, array("code" => $code, "message" => $message));
        print_r(json_encode($response));
        mysqli_close($connect);
    }else{
        $sql = "INSERT INTO users  (name, email, password) VALUES ('".$name."', '".$email."', '".$password."')";
        $result = mysqli_query($connect, $sql);
        $code = "code_success";
        $message = "Successfully registred Alex!";
        array_push($response, array("code" => $code, "message" => $message));
        print_r(json_encode($response));
        mysqli_close($connect);
    }

	mysqli_close($connect);*/

?>