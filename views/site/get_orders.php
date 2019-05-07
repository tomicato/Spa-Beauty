<?php

use yii\helpers\Json;
//debug($query2); 
//echo $query2[0]['status'];

$result = [];

foreach($query as $key => $val){
  //  echo $val['products']['img']. "<br>";
  array_push($result,  ['products_id' => $val['products_id'], 'img' => $val['products']['img'], 'name' => $val['name'], 'price' => $val['price'], 'qty_items' => $val['qty_items'], 'sum_items' => $val['sum_items'], 'status' => $query2[0]['status']]);
 
}
echo Json::encode(["orders" => $result]);

?>