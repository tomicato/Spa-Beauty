<?php

use yii\helpers\Html;
$this->title = '';
/*$this->params['breadcrumbs'][] = ['label' => 'Order Modals', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;*/
?>
<div class="order-modal-create container table-responsive">

    <h1><?= Html::encode( 'Добавить новый заказ') ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
