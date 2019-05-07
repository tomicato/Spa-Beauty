<?php

use yii\helpers\Html;

$this->title = '';

?>
 <div class="personal-create container table-responsive">
    <h1><?= Html::encode('Добавить сотрудника') ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
