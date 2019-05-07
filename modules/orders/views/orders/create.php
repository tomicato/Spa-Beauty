<?php
use yii\helpers\Html;
$this->title = '';
?>
<div class="orders-cart-create container table-responsive">

    <h1><?= Html::encode('Добавить новый заказ') ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
