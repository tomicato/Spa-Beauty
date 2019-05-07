<?php
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \mdm\admin\models\form\Login */
use app\assets\AppAsset;
AppAsset::register($this);
$this->title = 'Вход';
//$this->params['breadcrumbs'][] = $this->title;

?>

<div class="container site-login" style="margin-top: 200px;margin-bottom: 200px;">


		<div class="row">
				<div class="col-lg-6 col-lg-push-3 col-md-8 col-md-push-3 col-sm-12">
                    <h1><?= Html::encode($this->title) ?></h1>

                    <p>Пожалуйста, заполните поля для входа:</p>
            <?php $form = ActiveForm::begin(['id' => 'login-form']); ?>
            <?= $form->field($model, 'username')->label('Имя') ?>
            <?= $form->field($model, 'password')->passwordInput()->label('Пароль') ?>
            <?= $form->field($model, 'rememberMe')->checkbox()->label('Запомнить') ?>
						<div style="color:#999;margin:1em 0">
								Забыли пароль? <?= Html::a('восстановить', ['user/request-password-reset']) ?>.
								Вы новый пользовател <?= Html::a('регистрация', ['user/signup']) ?>.
						</div>
						<div class="form-group">
                <?= Html::submitButton('Вход', ['class' => 'btn btn-outline-primary', 'name' => 'login-button']) ?>
						</div>
            <?php ActiveForm::end(); ?>
				</div>
		</div>

    <!--
================================
Hidden search option
=================================
 -->
    <div class="hidden-search-rapper">
        <span class="close-search">
            <i class="fa fa-times" aria-hidden="true"></i>
        </span>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-lg-push-3 col-md-8 col-md-push-3 col-sm-8">
                    <div class="search-box">
                        <form action="#">
                            <input type="text" placeholder="искать...">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="serach-overlay"></div>
    <!-- end search overlay -->
    <!--
    ================================
    Hidden search option
    =================================
     -->
</div>
