<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
?>

<script src="http://code.jquery.com/jquery-2.2.4.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/titatoggle/1.2.11/titatoggle-dist-min.css">
<div class="testimonials-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'last_name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'content')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'img')->textInput() ?>

	<?= $form->field($model, 'vis')
		->checkbox([
		'label' => 'Отображать на главной',
		'labelOptions' => [
		'style' => 'padding-left:0px;'
		],
		'disabled' => false
		]); ?>

		<?= $form->field($model, 'created_at')->textInput() ?>

    <?= $form->field($model, 'updated_at')->textInput() ?>

	 <?= $form->field($model, 'active')
        ->checkbox([
            'label' => 'Активно(√) / Неактивно',
            'labelOptions' => [
                'style' => 'padding-left:0px;'
            ],
            'disabled' => false
        ]); ?>
	
    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Создать' : 'Изменить', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
