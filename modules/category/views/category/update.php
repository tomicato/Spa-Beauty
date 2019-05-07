<?php

use yii\helpers\Html;


$this->title = ''
?>
<br/><br/><div class="category-update container">

    <h1><?= Html::encode('Изменить') ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
        [
            'attribute' => 'parent_id',
            'value' => $model->categories->title ? $model->categories->title : 'Самостоятельная категория',

        ],

    ]) ?>

</div>