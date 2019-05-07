<br><br>
<?php
use yii\widgets\ActiveForm;
use yii\helpers\Html;
?>

<div class="login-box-body container table-responsive">
    <h2>Изменить Пароль</h2><br><br>
    <?php $form = ActiveForm::begin(['id' => 'login-form', 'enableClientValidation' => false]); ?>

    <?= $form->field($user, 'username')->textInput(['readOnly' => true]) ?>

    <?= $form->field($user, 'new_pwd')->passwordInput() ?>

    <?= $form->field($user, 'confirm_pwd')->passwordInput() ?>


        <?= Html::submitButton('Изменить', ['class' => 'btn btn-primary btn-block', 'style' => 'width:200px;']) ?>


    <?php ActiveForm::end(); ?>
</div><br><br>