<?php
use yii\helpers\Html;
$this->title = '';
?>
<div class="categories-create container">

    <h1><?= Html::encode('Новая категория') ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
