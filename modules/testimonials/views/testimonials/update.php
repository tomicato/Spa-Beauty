<?php
use yii\helpers\Html;
$this->title = '';
?>
<div class="testimonials-update container table-responsive">

    <h1><?= Html::encode($model->name) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
