<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
?>

<div class="reviews-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>

    <?= $form->field($model, 'image')->fileInput()->label('Аватар') ?>

    <?= $form->field($model, 'content')->textarea(['rows' => 3]) ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'email')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'created_at')->textInput()->hint('<br>Заполняется автоматически') ?>

    <?= $form->field($model, 'request_uri')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'status')->checkbox() ?>

    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
