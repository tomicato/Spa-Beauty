<?php

use yii\helpers\Html;
$this->title = '';

?>
<div class="orders-cart-update container table-responsive">

    <h1><?= Html::encode('Изменить заказ №' . $model->id) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
