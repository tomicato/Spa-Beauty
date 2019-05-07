<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\ProductsSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="products-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'prod_id') ?>

    <?= $form->field($model, 'img') ?>

    <?= $form->field($model, 'img_big') ?>

    <?= $form->field($model, 'prod_name') ?>

    <?= $form->field($model, 'prod_caption') ?>

    <?= $form->field($model, 'full_description') ?>

    <?php // echo $form->field($model, 'categories_id') ?>

    <?php // echo $form->field($model, 'new') ?>

    <?php // echo $form->field($model, 'sale') ?>

    <?php // echo $form->field($model, 'hit') ?>

    <?php // echo $form->field($model, 'price') ?>

    <?php // echo $form->field($model, 'in_stock') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
