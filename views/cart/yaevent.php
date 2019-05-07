<?php

use app\models\OrdersCart;
/** Date: 28.06.2018*/

$hash = sha1($_POST['notification_type'].'&'.
    $_POST['operation_id'].'&'.
    $_POST['amount'].'&'.
    $_POST['currency'].'&'.
    $_POST['datetime'].'&'.
    $_POST['sender'].'&'.
    $_POST['codepro'].'&'.
    'MeXqEDx2alf8Hv9iPxKOGSTi'.'&'.
    $_POST['label']);

if($_POST['sha1_hash'] != $hash or $_POST['codepro'] === true ) exit('Error!');

$id = $_POST['label']; debug($id);
$res = OrdersCart::findOne($id);
$res->status = 1;
$res->save();

if($_POST['EajOGoSHqjfACGIrGUmtwUR7']) {

    file_put_contents(dirname(__FILE__) . '/history.php', $_POST['datetime'] . ' на сумму ' . $_POST['amount'] . ' ID Заказа ' . $_POST['label'] . PHP_EOL, FILE_APPEND);


}


?>