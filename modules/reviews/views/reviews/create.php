<?php
use yii\helpers\Html;
$this->title = '';
?>
<div class="reviews-create container table-responsive">

    <h1><?= Html::encode('Добавить комментарий') ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
