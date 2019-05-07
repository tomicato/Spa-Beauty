<?php

use yii\helpers\Html;


$this->title = '';

$this->params['breadcrumbs'][] = 'Update';
?>
<div class="personal-update container table-responsive">
    <h1><?= Html::encode($model->fio) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
