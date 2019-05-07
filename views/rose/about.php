<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 27.06.2018
 * Time: 22:15
 */
use yii\bootstrap\ActiveForm;
use yii\helpers\Html;
use yii\captcha\Captcha;
?>
<style>
    .img-responsive{
        margin: 10px 10px;
    }
    @media screen and (max-width: 767px){
        .img-responsive{
            margin: 20px auto;
        }
    }
</style>

<div class="why-choose-useP">
    <div class="container">
        <div class="row">

            <div class="col-lg-6 text-center">
                <div class="animation" data-animation="fadeInDown" data-animation-delay="0.1s">
                    <h2 class="section-title">Почему Выбирают Нас</h2>
                    <p>Более 20 лет на рынке салонов красоты. Делаем всё возможное, для обеспечения 100% качества оказания услуг.</p>
                </div>
                <div class="spacer-1"></div>

                <div class="row">
                    <div class="col-md-4 text-center animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                        <img src="/images/icon_img/facei.png" alt="">
                        <h5>Прфессиональный
                            <span>Макияж</span>
                        </h5>
                    </div>

                    <div class="col-md-4 text-center animation" data-animation="fadeInUp" data-animation-delay="0.3s">
                        <img src="/images/icon_img/pata.png" alt="">
                        <h5>100% Натуральная
                            <span>Продукция</span>
                        </h5>
                    </div>

                    <div class="col-md-4 text-center animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                        <img src="/images/icon_img/cup.png" alt="">
                        <h5>20% Скидка меяца
                            <span>Только для Вас</span>
                        </h5>
                    </div>

                </div>
            </div>

            <div class="col-lg-6 col-lg-push-2 text-center">
                <!--about-img<a href="https://www.youtube.com/watch?v=G0dzLanYW1E" class="video-pop">
                    <i class="fa fa-play"></i>
                </a>-->
                <div class="animation" data-animation="fadeInDown" data-animation-delay="0.1s">
                    <h2 class="section-title">Галерея фотографий процедур</h2>
                    <p>Получите представлениие, просмотрев фотографии с прошедших процедур.</p>
                </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <a href="#!"><img src="/images/footer-gallery/gl-1.jpg" class="img-responsive" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <a href="#!"><img src="/images/footer-gallery/gl-2.jpg" class="img-responsive" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <a href="#!"><img src="/images/footer-gallery/gl-3.jpg" class="img-responsive" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></a>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-6>
                            <a href="#!"><img src="/images/footer-gallery/gl-4.jpg" class="img-responsive" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <a href="#!"><img src="/images/footer-gallery/gl-5.jpg" class="img-responsive" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <a href="#!"><img src="/images/footer-gallery/gl-6.jpg" class="img-responsive" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></a>

                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <a href="#!"><img src="/images/footer-gallery/gl-1.jpg" class="img-responsive" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <a href="#!"><img src="/images/footer-gallery/gl-2.jpg" class="img-responsive" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></a>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <a href="#!"><img src="/images/footer-gallery/gl-3.jpg" class="img-responsive" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></a>
                        </div>
                    </div>
                </div>


        </div>

    </div>
</div>

<!--
================================
Почему мы ?
=================================
 -->



<!--
================================
Довольные клиенты
=================================
-->

<div class="happy-clients hapy-2">
    <div class="container">
        <div class="row hayyp-color-2">
            <div class="col-md-3 col-sm-6 col-12 text-center animation" data-animation="rotateInDownLeft" data-animation-delay="0.1s">
                <div class="single--happy-client">
                    <i class="fa fa-smile-o" aria-hidden="true"></i>
                    <h4>Процедур выполнено</h4>
                    <h3>
                        <span class="counter">2000</span>
                    </h3>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 col-12 text-center animation" data-animation="rotateInDownLeft" data-animation-delay="0.3s">
                <div class="single--happy-client">
                    <i class="fa fa-smile-o" aria-hidden="true"></i>
                    <h4>Услуг по уходу за кожей лица</h4>
                    <h3>
                        <span class="counter">6200</span>
                    </h3>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 col-12 text-center animation" data-animation="rotateInDownLeft" data-animation-delay="0.5s">
                <div class="single--happy-client">
                    <i class="fa fa-smile-o" aria-hidden="true"></i>
                    <h4>Довольных клиентов</h4>
                    <h3>
                        <span class="counter">3500</span>
                    </h3>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 col-12 text-center animation" data-animation="rotateInDownLeft" data-animation-delay="0.7s">
                <div class="single--happy-client">
                    <i class="fa fa-smile-o" aria-hidden="true"></i>
                    <h4>Услуги визажистов</h4>
                    <h3>
                        <span class="counter">850</span>
                    </h3>
                </div>
            </div>

        </div>
    </div>
</div>

<!--
================================
Довольные клиенты
=================================
-->



<!--
================================
Наша команда
=================================
 -->
<div class="our__team__area about__page">
    <div class="container">
        <div class="row">
            <div class="col col-12 text-center">
                <h2 class="section-title">Наши специалисты</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
            </div>

        </div>
        <div class="spacer-1"></div>

        <ul class="row team-active group owl-carousel">
            <?php foreach($personal as $k => $v):?>
                <li class=" list-group-item animation" data-animation="fadeInUp" data-animation-delay="<?= $i += 300?>ms">
                    <div class="single-team">
                        <img src="/images/team/<?= $v['img']?>" class="rounded-circle" alt="<?= $v['post']?>" width="130" height="130">
                        <h4><?= $v['fio']?></h4>
                        <h5><?= $v['post']?></h5>
                        <p><?= $v['hobby']?></p>
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-rss"></i></a></li>
                        </ul>
                    </div>
                </li>
            <?php endforeach;?>
        </ul>

    </div>
</div>

<!--
================================
Наша команда
=================================
-->



<!--
================================
Отзывы
=================================
 -->

<!--Style for Testimonials-->
<style>
    #testls label{color:#fff;font-style: italic;}
    #testls .help-block{color: #72ff50;font-style: italic;}
    #testimonialsform-image_file{color: #72ff50;font-style: italic;}
    #testimonials{
        /*background: rgba(255, 31, 144, 0.52);*/
    background-image: url('/web/images/testimonials/tes2bg.jpg');
        background-origin: border-box;
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        height: 500px;
        position: relative;
        /* background: #f14091;*/
        /* opacity: 0.5;*/

        z-index:1;
        padding: 100px 0;
    }

    #testimonials:after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        content: "";
        background: #ec5baa;
        z-index: -1;
        opacity: .9;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
        filter: alpha(opacity=90);
    }
    .test_al p{
        color: #fff;
        font-size: 20px;
        letter-spacing: 1.2px;
        font-weight: 900;
        margin-left: 5%;
        margin-top: 30px;
    }
    .test_al{
        margin-top: 0;
    }
    .test_al span{
        text-transform: none;
        letter-spacing: 1px;
        font-weight: 500;
        font-size: 16px;
        /*display: flex;
        flex-flow: row nowrap;
        justify-content: center;*/
        display: inline-block;
        margin-left: 40%;
        color:#fff;
    }
    .two2{
        position: absolute;
        margin-top: -4%;
        margin-left: 19.5%;


    }
    @-moz-document url-prefix() {
        .two2 {
            position:absolute;
            margin-top: -3%;
            margin-left: 19.5%;
        }
    }
    .test_al span img{
        border-radius: 50%;
        width: 50px;
        float: left;
        margin-right: 20px;
        margin-top: -10px
    }
    .test_al em{
        color:#fff!important;
        margin-left: 25px!important;

        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;


        flex-flow: row nowrap;
        -webkit-flex-flow: row nowrap;
        -ms-flex-flow: row nowrap;

        justify-content: space-between;
        -webkit-justify-content: space-between;
        -ms-justify-content: space-between;

        -webkit-box-pack: justify;
        -ms-flex-pack: justify;

        align-items: center
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
    }
    .slide1{
        display: none;
        opacity:0;
        transform: scale(0);
    }
    .slide2{
        display: none;
        opacity:0;
        transform: scale(0);
    }
    .slide3{
        display: none;
        opacity:0;
        transform: scale(0);
    }
    .modal-header h3{
        color:#fff!important;
        font-weight: 600;
    }
    @media all and (max-width: 1200px) {
        .test_al span{
            font-size: 16px!important;
            margin-left: 30%!important;
        }
        .test_al p{
            font-size: 16px!important;
            margin-left: 5%!important;
            /*margin-top: 10px;*/
        }
        .two2{
            margin-top: -6%!important;
            margin-left: 4%;
        }
        #testimonials .icon-quotes-right{
            font-size: 20px!important;
            margin-right: 6%;
        }

        #items3 {
            outline: none;
            border: none;
            background: none;
            margin-top: -47px!important;
            margin-bottom: 0px!important;
            cursor: pointer;
        }

    }
    @media all and (max-width:769px){
        .two2{
            margin-top: -9%!important;
            margin-left: 3%;
        }

    }
    @media all and (max-width:420px){
        .two2{
            margin-top: -25%!important;
            margin-left: 16%;
        }

    }

    .ic{
        color: rgb(255, 255, 255);
        font-size: 22px!important;
    }
    #items3 {
        outline: none;
        border: none;
        background: none;
        margin-top: -60px!important;
        margin-bottom: 15px!important;
        cursor: pointer;
    }
    #items3 .more_listing_btn2 {
        text-decoration: none;
        padding: 10px 20px;
        border: 2px solid #bfd9f1;
        border-radius: 30px;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        -o-border-radius: 30px;
        color: #fff;
        font-family: "lato-regular", Helvetica, Arial, sans-serif;
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-align: center;
        transition: all .2s linear;
        -webkit-transition: all .2s linear;
        -moz-transition: all .2s linear;
        -o-transition: all .2s linear;
    }
    /*Модальные окна*/

    .modal-content{
        background-color: #fc96cd91;
        color: #fff;
    }
    .modal-title{
        color: #fff;
    }

    .close{
        float: right;
        opacity: .9;
        transition: 0.5s;
        width: 30px;
        background: url(../../web/images/logo/closex.png) no-repeat;
    }
    .try-registration-form .modal-body form input,
    .try-registration-form .modal-body form textarea,
    .try-registration-form .modal-body form button{
        font-family: 'Poiret One';
        opacity: 1;
        font-size: 18px;
    }
    .try-registration-form input{
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        padding: 20px;
        margin: 30px 0 0 0;
        color: #fff;
        border-left: 3px solid #ef3d4a;
    }
    .try-registration-form textarea {
        width: 100%;
        margin-bottom: 25px;
        height: 100px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 0;
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
        box-shadow: inherit;
        -webkit-background-clip: padding-box;
        -moz-background-clip: padding;
        background-clip: padding-box;
        border: 1px solid rgba(26, 198, 255, 0.4);
        border-left: 3px solid #ef3d4a;
    }
    .modal-header{
        border-bottom: none;
    }
    .btnxs h3{
        color:#fff;
    }
    #testls{
        margin-top: 150px;
    }

    .test_al p {
        color: #fff;
        font-size: 20px;
        letter-spacing: 1.2px;
        font-weight: 900;
        margin-left: 5%;
        margin-top: 30px;
    }
    #testimonials p{
        color: #fff;
        font-size: 20px;
        letter-spacing: 1.2px;
        font-weight: 900;
        margin-left: 5%;
        margin-top: 30px;
        font-family: 'Poiret One', Sans-Serif;
    }
    #testimonials span em{
        font-family: 'Poiret One', Sans-Serif;
    }
</style>
<?php
$str0 = $item_test[0]->content;
$str1 = $item_test[1]->content;
$str2 = $item_test[2]->content;


$rest0 = mb_substr($item_test[0]->content, 0,250).'...&nbsp;<a href="/test-ls" target="_blank" style="color:#fff; font-size: small; border-bottom: 1px dashed #fff;"> Читать полостью</a>';
$rest1 = mb_substr($item_test[1]->content, 0,250).'...&nbsp;<a href="/test-ls" target="_blank" style="color:#fff; font-size: small; border-bottom: 1px dashed #fff;"> Читать полостью</a>';
$rest2 = mb_substr($item_test[2]->content, 0,250).'...&nbsp;<a href="/test-ls" target="_blank" style="color:#fff; font-size: small; border-bottom: 1px dashed #fff;"> Читать полостью</a>';
Yii::$app->formatter->timeZone = 'UTC';
?>



<!--Testimonials-->
<section id="testimonials">

    <div class="container">

        <div class="slide1 test_al">
            <em><?= Yii::$app->formatter->asDate($item_test[0]->created_at, 'long') ?>
                <span class="icon-quotes-right ic"></span>
            </em><br>
            <p><?php if(strlen($str0) > 250){echo $rest0;} else{echo $item_test[0]->content;} ?></p><br>
            <span>
        <img src="/images/testimonials/<?= $item_test[0]->img?>" alt="">
        <em> - <?= $item_test[0]->name?>&nbsp;&nbsp;&nbsp;<?= $item_test[0]->last_name?></em>
</span>
        </div>
        <div class="slide2 test_al">
            <em><?= Yii::$app->formatter->asDate($item_test[1]->created_at, 'long') ?>
                <span class="icon-quotes-right ic"></span>
            </em><br>
            <p><?php if(strlen($str1) > 250){echo $rest1;} else{echo $item_test[1]->content;} ?></p><br>
            <span>
        <img src="/images/testimonials/<?= $item_test[1]->img?>" alt="">
        <em> - <?= $item_test[1]->name?>&nbsp;&nbsp;&nbsp;<?= $item_test[1]->last_name?></em>
</span>
        </div>
        <div class="slide3 test_al">
            <em><?= Yii::$app->formatter->asDate($item_test[2]->created_at, 'long') ?>
                <span class="icon-quotes-right ic"></span>
            </em><br>
            <p><?php if(strlen($str2) > 250){echo $rest2;} else{echo $item_test[2]->content;} ?></p><br>
            <span>
        <img src="/images/testimonials/<?= $item_test[2]->img?>" alt="">
        <em> - <?= $item_test[2]->name?>&nbsp;&nbsp;&nbsp;<?= $item_test[2]->last_name?></em>
</span>
        </div>
    </div>
</section>

                        <!--Modal-->
                        <div class="modal fade" id="testls" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <br><div class="modal-header">
                                        <h3 class="modal-title" id="myModalLabel">Оставить отзыв</h3>
                                        <span  class="close" data-dismiss="modal" aria-hidden="true" style="cursor:pointer;color:#fff; font-size: 20px;"></span>
                                    </div>
                                    <div class="try-registration-form">
                                    <div class="modal-body">
                                        <?php
                                        $form2 = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]);

                                        echo  $form2->field($model2, 'name_form')
                                            ->textInput(['placeholder'=>'Ваше Имя *','class'=>'form-control', 'style' => 'font-weight:600'])->label('');

                                        echo  $form2->field($model2, 'last_name_form')
                                            ->textInput(['placeholder'=>'Ваша Фамилия (необязательно)','class'=>'form-control', 'style' => 'font-weight:600'])->label('');

                                        echo $form2->field($model2, 'content_form')->textarea(['placeholder'=>'Оставить отзыв *','class'=>'form-control', 'style' => 'font-weight:600', 'rows' => 10, 'cols' => 5])->label('');

                                        echo $form2->field($model2, 'image_file')->fileInput();


                                        echo Html::submitButton('Отправить', ['class' => 'btn btn-danger', 'style' => 'font-weight:600']);

                                        ActiveForm::end();
                                        ?>
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!-- Button trigger modal -->
                        <center>
                            <div >

                            </div>
                        </center>
                        <!--/Modal-->
                        <br/><br/>
<center>
<button type="submit" class="btn btn-outline-primary" data-toggle="modal" data-target="#testls">Отправить отзыв</button>
<a href="/test-ls" target="_blank"><button type="submit" class="btn btn-outline-primary">Читать все отзывы</button></a>
</center>
                        <!--Button All Rewiews-->
                       <br/><br/>

                        <!--/Button All Rewiews-->
                        <!--/Testimonials-->

                        <!--Script TweenlineMax-->
                        <script>
                            $(document).ready(function(){

                                var tm =  new TimelineMax({repeat: -1, repeatDelay: 0});

                                tm.to(".slide1", 3, {scale:1, autoAlpha : 1 , display:'block',  delay:0.2, ease: Linear.easeNone, force3D:true}, 1)
                                    .to(".slide1", 2, {scale:0, autoAlpha : 0 , display : 'none', delay:15, ease: Linear.easeNone, force3D:true})

                                    .to(".slide2", 3, {scale:1, rotation:'360deg', autoAlpha : 1, display: 'block', delay: 20, ease: Linear.easeNone, force3D:true}, 1)
                                    .to(".slide2", 2, {scale:0, rotation:'-360deg', autoAlpha : 0, display: 'none', delay:15, ease: Linear.easeNone, force3D:true})

                                    .to(".slide3", 3, {scale:1, autoAlpha : 1, display: 'block', delay: 40, ease: Linear.easeNone, force3D:true}, 1)
                                    .to(".slide3", 2, {scale:0, autoAlpha : 0, display: 'none', delay:15, ease: Linear.easeNone, force3D:true});


                                $('.main, .scroll_down, .con').on('click','a', function (e) {

                                    //забираем идентификатор бока с атрибута href
                                    var id = $(this).attr('href').split('/'),

                                        changeStr = id[1],

                                        //узнаем высоту от начала страницы до блока на который ссылается якорь
                                        top = $(changeStr).offset().top;

                                    //анимируем переход на расстояние - top за 2500 мс
                                    $('body,html').animate({scrollTop: top}, 2500);

                                });
                            });
                        </script>
                        <!--/Script TweenlineMax-->
                        <br/><br/>




<!--
================================
Отзывы
=================================
 -->

<!--
=================================
Контактная форма и карта
=================================
-->
<div class="get--inTouchArea">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="GetInBox animation" data-animation="zoomIn" data-animation-delay="0.1s">
                    <h3 class="get--touctitle">Заполните форму</h3>
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

                    <div class="row">

                        <div class="col-md-4 col-lg-2 col-sm-4">
                            <address>
                            <div class="single--getIntouch">
                                <div class="text-center">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <p>info123@gmail.com</p>
                                <p>www.inforname.com</p>
                            </div>
                        </address>
                        </div>

                        <div class="col-md-4 col-lg-3 offset-lg-2 col-sm-4">
                            <address>
                            <div class="single--getIntouch">
                                <div class="text-center">
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                    <p>г.Томск, улица Пушкина 69</p>
                                </div>

                            </div>
                        </address>
                        </div>

                        <div class="col-md-4 col-lg-3 offset-lg-2 col-sm-4">
                            <address>
                            <div class="single--getIntouch">
                                <div class="text-center">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <p>+22-555-888-12</p>
                                    <p>+88-8888-255-23</p>
                                </div>
                            </div>
                            </address>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
    <div id="googleMap"><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3AIhV5WM45UmcncACTayg9b9bykMXh20Tb&amp;source=constructor" width="100%" height="550" frameborder="0" style="margin-top: -200px;"></iframe></div>
</div>
