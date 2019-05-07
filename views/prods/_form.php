<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
?>

<div class="products-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'img')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'prod_name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'prod_caption')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'full_description')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'categories_id')->textInput() ?>

    <?= $form->field($model, 'f_id')->dropDownList(ArrayHelper::map(\app\models\Filters::find()->all(), 'filter_id', 'filter_id'), ['prompt' => ' ~ Область применения ~ ']) ?>


    <?= $form->field($model, 'new')->dropDownList([ '0', '1', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'sale')->dropDownList([ '0', '1', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'hit')->dropDownList([ '0', '1', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'price')->textInput() ?>

    <?= $form->field($model, 'in_stock')->dropDownList([ '0', '1', ], ['prompt' => '']) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
