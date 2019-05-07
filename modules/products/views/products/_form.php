<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use app\components\MenuWidget;
use app\models\Categories;
use skeeks\yii2\ckeditor\CKEditorWidget;
use mihaildev\elfinder\ElFinder;
use app\models\Filters;
use yii\helpers\ArrayHelper;
?>

<div class="products-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>
    <div class="col-lg-6">
    <?= $form->field($model, 'image')->fileInput()->label('Фото') ?>
    </div><div class="col-lg-6">
    <?= $form->field($model, 'image_big')->fileInput()->label('Фото увел.') ?>
    </div>
    <?= $form->field($model, 'prod_name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'prod_caption')->textarea(['rows' => 3]) ?>

    <?= $form->field($model, 'full_description')->widget(CKEditorWidget::className(), [
        'clientOptions' => ElFinder::ckeditorOptions(['elfinder',
            'path' => '/images'],
            ['options' => ['rows' => 6], 'preset' => 'full', 'skin' => 'moono_blue',]),]) ?>

    <div class="form-group field-products_categories_id has-success">
        <label class="control-label" for="products_categories_id">Род.категория</label>
        <select id="products_categories_id" class="form-control" name="Products[categories_id]">
            <?= MenuWidget::widget(['tpl' => 'select_product', 'model' => $model])?>
        </select>
    </div>
<div class="col-lg-6">
    <?= $form->field($model, 'new')->checkbox([ '0', '1', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'sale')->checkbox([ '0', '1', ], ['prompt' => '']) ?>
</div><div class="col-lg-6">
    <?= $form->field($model, 'hit')->checkbox([ '0', '1', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'in_stock')->checkbox([ '0', '1', ], ['prompt' => '']) ?>
</div>
   <?/*= $form->field($model, 'f_id')->dropDownList(ArrayHelper::map(Filters::find()->all(),'p_prod_id', 'f_use'),['prompt' => ' ~ Выбор категории ~ ']) */?>

    <?= $form->field($model, 'price')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
