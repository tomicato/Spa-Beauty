<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\BlogSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="blog-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 's_name') ?>

    <?= $form->field($model, 's_caption') ?>

    <?= $form->field($model, 's_description') ?>

    <?= $form->field($model, 's_img_sm') ?>

    <?php // echo $form->field($model, 's_img_bg') ?>

    <?php // echo $form->field($model, 'created_at') ?>

    <?php // echo $form->field($model, 'updated_at') ?>

    <?php // echo $form->field($model, 'write_by') ?>

    <?php // echo $form->field($model, 'section') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
