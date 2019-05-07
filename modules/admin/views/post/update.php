<?php

use yii\helpers\Html;

$this->title = '';

?>
<div class="post-update container table-responsive">
    <h1><?= Html::encode($model->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
