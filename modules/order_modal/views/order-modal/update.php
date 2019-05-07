<?php
use yii\helpers\Html;
$this->title = '';
?>
<div class="order-modal-update container table-responsive">

    <h1><?= Html::encode('Редактировать: ' .$model->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
