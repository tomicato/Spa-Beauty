<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use bootui\datetimepicker\Timepicker;
use bootui\datetimepicker\Datepicker;
?>

<div class="order-modal-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>

    <?= $form->field($model, 'image')->fileInput() ?>

    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>



    <?/*= $form->field($model, 'order_date')->textInput(['maxlength' => true]) */?>
    <?= $form->field($model, 'order_d')->widget(Datepicker::className(), [
        'name' => 'date',
        'options' => ['class' => 'form-control'],
        'addon' => ['prepend' => 'Birth Date'],
        'format' => 'YYYY-MM-DD',
    ]); ?>
    <?= $form->field($model, 'order_t')->widget(Timepicker::className(), [
            'name' => 'order_t',
            'options' => ['class' => 'form-control'],
            'addon' => ['prepend' => 'Time'],
            'format' => 'HH:mm:ss',
        ]
    ); ?>

    <?= $form->field($model,'schedule')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'email')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'phone')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
