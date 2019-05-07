<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\OrdersItems */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="orders-items-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'orders_cart_id')->textInput() ?>

    <?= $form->field($model, 'products_id')->textInput() ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'price')->textInput() ?>

    <?= $form->field($model, 'qty_items')->textInput() ?>

    <?= $form->field($model, 'sum_items')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
