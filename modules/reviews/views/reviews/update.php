<?php
use yii\helpers\Html;
$this->title = '';
?>
<div class="reviews-update container table-responsive">

    <h1><?= Html::encode('Изменить комментарий от: ' . $model->name) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
