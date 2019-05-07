<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use skeeks\yii2\ckeditor\CKEditorWidget;
use mihaildev\elfinder\ElFinder;
?>

<div class="blog-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 's_name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 's_caption')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 's_description')->widget(CKEditorWidget::className(), [
        'clientOptions' => ElFinder::ckeditorOptions(['elfinder',
            'path' => '/images'],
            ['options' => ['rows' => 6], 'preset' => 'full', 'skin' => 'moono_blue',]),]) ?>

    <?= $form->field($model, 's_img_sm')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 's_img_bg')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'created_at')->textInput()->hint('Заполняется автоматически') ?>

    <?= $form->field($model, 'updated_at')->textInput() ?>

    <?= $form->field($model, 'write_by')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'section')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
