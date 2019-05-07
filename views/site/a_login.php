<?php
echo json_encode(["success" => $result]);
/*if ($_SERVER['REQUEST_METHOD'] == "POST") {

    $email = $_POST['email']; // // "norton@yahoo.con"; 
    $password = $_POST['password']; // // "123456";
    
   
    require_once 'init.php';

    $sql = "SELECT * FROM user WHERE email='$email' ";
    $response = mysqli_query($connect, $sql);

    $result = array();
    $result['login'] = array();
    
    if ( mysqli_num_rows($response) === 1 ) {
        
        $row = mysqli_fetch_assoc($response);

        if ( password_verify($password, $row['password_hash']) ) {
            
            $index['name'] = $row['username'];
            $index['email'] = $row['email'];
            $index['id'] = $row['id'];

           array_push($result['login'], $index);

            $result['success'] = "1";
            $result['message'] = "success";
            echo json_encode($result);

            mysqli_close($connect);

        } else {

            $result['success'] = "0";
            $result['message'] = "error";
            echo json_encode($result);

            mysqli_close($connect);

        }

    }

}*/

?>