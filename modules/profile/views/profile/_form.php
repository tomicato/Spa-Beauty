<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use bootui\datetimepicker\Datepicker;
?>

<div class="profile-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>

    <?= $form->field($model, 'image')->fileInput() ?>

    <?= $form->field($model, 'nik')->textInput(['maxlength' => true, 'readOnly' => true]) ?>

    <?= $form->field($model, 'first_name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'second_name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'middle_name')->textInput(['maxlength' => true]) ?>

   <!-- --><?/*= $form->field($model, 'burthday')->textInput() */?>

    <?= $form->field($model, 'burthday')->widget(Datepicker::className(), [
        //'name' => 'burthday',
        'options' => ['class' => 'form-control'],
        'addon' => ['prepend' => 'Birth Date'],
        'format' => 'YYYY-MM-DD',
    ]); ?>

    <?= $form->field($model, 'gender')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
