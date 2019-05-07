<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use app\components\MenuWidget;
/*use yii\helpers\ArrayHelper;
use app\models\Categories;*/
/* @var $this yii\web\View */
/* @var $model app\models\Category */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="category-form">

    <?php $form = ActiveForm::begin(); ?>

    <?/*= $form->field($model, 'id')->textInput() */?>

    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>

    <?/*= $form->field($model, 'parent_id')->dropDownList(ArrayHelper::map(Category::find()->where('parent_id != :id', ['id' => 0])->asArray()->all(), 'id', 'title'), ['prompt' => 'Выбор категории']) */?>

    <div class="form-group field-categories-parent_id has-success">
        <label class="control-label" for="categories-parent_id">Род.категория</label>
        <select id="categories-parent_id" class="form-control" name="Categories[parent_id]">
            <option value="0">Самостоятельная категория</option>
            <?= MenuWidget::widget(['tpl' => 'select', 'model' => $model])?>

        </select>
    </div>
    <?= $form->field($model, 'keywords')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'description')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Создать' : 'Изменить', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
