<?php

use yii\helpers\Html;
$this->title = '';

?>

<div class="blog-update container table-responsive">
    <h2><?= Html::encode($model->s_name) ?></h2>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
