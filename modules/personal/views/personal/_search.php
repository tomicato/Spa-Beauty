<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\PersonalSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="personal-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'img') ?>

    <?= $form->field($model, 'photo_status') ?>

    <?= $form->field($model, 'sex') ?>

    <?= $form->field($model, 'phone') ?>

    <?php // echo $form->field($model, 'fio') ?>

    <?php // echo $form->field($model, 'education') ?>

    <?php // echo $form->field($model, 'experience') ?>

    <?php // echo $form->field($model, 'hobby') ?>

    <?php // echo $form->field($model, 'post') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
