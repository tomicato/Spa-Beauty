<?php

use yii\helpers\Html;

$this->title = '';

?>
 <div class="post-create container table-responsive">
    <h2><?= Html::encode('Сздать новую статью') ?></h2>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
