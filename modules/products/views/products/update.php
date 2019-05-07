<?php

use yii\helpers\Html;

$this->title = '';

?>
<div class="products-update container table-responsive">

    <h1><?= Html::encode($model->prod_name) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
