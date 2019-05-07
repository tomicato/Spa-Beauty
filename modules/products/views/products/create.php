<?php

use yii\helpers\Html;
$this->title = '';

?>
<div class="products-create container table-responsive">

    <h1><?= Html::encode( 'Добавить продукт') ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
