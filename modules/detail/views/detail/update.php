<?php
use yii\helpers\Html;
$this->title = '';
?>
<div class="orders-items-update container table-responsive">

    <h1><?= Html::encode('Изменить: ' . $model->name) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
