<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use skeeks\yii2\ckeditor\CKEditorWidget;
use mihaildev\elfinder\ElFinder;
?>

<div class="post-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>

    <?= $form->field($model, 'title')->textInput(['maxlength' => true])->label('Заголовок') ?>

    <div class="col-lg-6">
        <?= $form->field($model, 'image')->fileInput()->label('Фото') ?>
    </div><div class="col-lg-6">
        <?= $form->field($model, 'image_big')->fileInput()->label('Фото увел.') ?>
    </div>

    <?= $form->field($model, 'description')->textarea(['rows' => 3])->label('Описание (Не более 60-и знаков)') ?>

    <?= $form->field($model,'content')->widget(CKEditorWidget::className(), [
        'clientOptions' => ElFinder::ckeditorOptions(['elfinder',
            'path' => '/images'],
            ['options' => ['rows' => 6], 'preset' => 'full', 'skin' => 'moono_blue',]),]) ?>

    <?= $form->field($model, 'created_at')->textInput(['maxlength' => true])->label('Создано') ?>

    <?= $form->field($model, 'updated_at')->textInput(['maxlength' => true])->label('Изменено') ?>

    <?= $form->field($model, 'writed_by')->textInput(['maxlength' => true])->label('Автор') ?>



		<div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Создать' : 'Изменить', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
