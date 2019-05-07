<?php
use yii\helpers\Html;
$this->title = '';
?>
<div class="testimonials-create container table-responsive">

    <h1><?= Html::encode('Написать отзыв') ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
