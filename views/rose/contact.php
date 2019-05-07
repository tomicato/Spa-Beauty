<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 27.06.2018
 * Time: 20:49
 */
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use yii\helpers\Html;
?>

<div class="get--inTouchArea">
    <div id="googleMap"><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3AIhV5WM45UmcncACTayg9b9bykMXh20Tb&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe></div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="GetInBox contact-page animation" data-animation="zoomIn" data-animation-delay="0.1s">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="single--getIntouch contact-page">
                                <div class="text-center">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <p>support@tomsk-life.pro</p>
                                    <p>www.tomsk-life.pro</p>
                                </div>

                            </div>
                        </div>
                        <!-- end single column -->
                        <div class="col-md-4">
                            <div class="single--getIntouch contact-page">
                                <div class="text-center">
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                    <p>г.Томск, улица Пушкина 69</p>
                                </div>

                            </div>
                        </div>
                        <!-- end single column -->
                        <div class="col-md-4">
                            <div class="single--getIntouch contact-page">
                                <div class="text-center">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <p>+22-555-888-12</p>
                                    <p>+88-8888-255-23</p>
                                </div>
                            </div>
                        </div>
                        <!-- end single column -->
                    </div>
<!--
==================
Форма сообщения
==================
-->
                    <h3 class="get--touctitle">Заполните форму</h3>

                    <?php /*if (Yii::$app->session->hasFlash('success')): */?><!--

                    <div class="alert alert-success">
                      <?php /*Yii::$app->session->getFlash('success','Спасибо за обращение! Всегда рады Вам помочь.')*/?>
                    </div>
                    --><?php /*endif;*/?>

                    <div class="form-row">
                    <?php $form = ActiveForm::begin(['id' => 'contact-us', 'options' => ['class' => ' col-lg-12']]); ?>
                    <div class="col-md-4">
                    <?= $form->field($model, 'name')->textInput(['autofocus' => true])->label('Имя')  ?>
                    </div><div class="col-md-4">
                    <?= $form->field($model, 'email')->label('E-mail') ?>
                    </div><div class="col-md-4">
                    <?= $form->field($model, 'phone')->label('Телефон')  ?>
                    </div><div class="col-md-12">
                    <?= $form->field($model, 'body')->textarea(['rows' => 3])->label('Собщение')  ?>

                    <?= $form->field($model, 'verifyCode')->widget(Captcha::className(), [
                        'template' => '<div class="row"><div class="col-lg-3">{image}</div><div class="col-lg-6">{input}</div></div>',
                    ])->label('Тест Тьюринга')  ?>

                    <div class="form-group">
                        <?= Html::submitButton('Отправить', ['class' => 'btn btn-outline-primary', 'name' => 'contact-button']) ?>
                    </div>
                        </div>
                    <?php ActiveForm::end(); ?>

                </div>

<!--
==================
Форма сообщения
==================
-->

                </div>
        </div>
    </div>
</div>
