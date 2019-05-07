<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use app\assets\AppAsset;
AppAsset::register($this);
$this->title = 'Регистрация';
//$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container site-signup" style="margin-top: 200px;margin-bottom: 200px;">

    <?= Html::errorSummary($model)?>
		<div class="row">
				<div class="col-lg-6 col-lg-push-3 col-md-8 col-md-push-3 col-sm-12">
                    <h1><?= Html::encode($this->title) ?></h1>

                    <p>Пожалуйста, заполните поля для регистрации:</p>
            <?php $form = ActiveForm::begin(['id' => 'form-signup']); ?>
            <?= $form->field($model, 'username')->label('Имя') ?>
            <?= $form->field($model, 'email')->label('E-mail') ?>
            <?= $form->field($model, 'password')->passwordInput()->label('Пароль') ?>
						<div class="form-group">
                <?= Html::submitButton('Регистрация', ['class' => 'btn btn-outline-primary', 'name' => 'signup-button']) ?>
						</div>
            <?php ActiveForm::end(); ?>
				</div>
		</div>
</div>
