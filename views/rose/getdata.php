<?php

use yii\helpers\Json;

$array = [];

	foreach($json_array as $val){
		array_push($array,['id' => $val['prod_id'], 'img' => $val['img'], 'prod_name' => $val['prod_name'], 'full_description' => $val['full_description'], 'price' => $val['price'], 'in_stock' => $val['in_stock']]);
	}

	echo Json::encode(["server_response" => $array]);