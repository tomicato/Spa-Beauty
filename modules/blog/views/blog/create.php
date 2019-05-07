<?php

use yii\helpers\Html;
$this->title = '';

?>
<div class="blog-create container table-responsive">
    <h1><?= Html::encode('Создать пост') ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
