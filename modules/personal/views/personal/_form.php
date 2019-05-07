<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
?>

<div class="personal-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>

    <?= $form->field($model, 'image')->fileInput()->hint('200x200') ?>

    <?= $form->field($model, 'photo_status')->checkbox(['label' => 'Показывать фото', 'labelOptions' => ['style' => 'padding-left:20px;']]) ?>

    <?= $form->field($model, 'sex')->checkbox(['label' => 'Пол', 'labelOptions' => ['style' => 'padding-left:20px;']])->hint('не отмечено - мужчина, отмечено - женщина') ?>

    <?= $form->field($model, 'phone')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'fio')->textarea(['rows' => 3]) ?>

    <?= $form->field($model, 'education')->textarea(['rows' => 3]) ?>

    <?= $form->field($model, 'experience')->textarea(['rows' => 3]) ?>

    <?= $form->field($model, 'hobby')->textarea(['rows' => 3]) ?>

    <?= $form->field($model, 'post')->textarea(['rows' => 3]) ?>

    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
