<?php
use yii\helpers\Json;

if($success){
    echo Json::encode(["message" => $success]);
}else{
    echo Json::encode(["message" => $error]);
}
?>