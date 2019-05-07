<?php
use yii\helpers\Html;
use yii\helpers\Url;
use yii\widgets\ActiveForm;
use kartik\date\DatePicker;
use kartik\time\TimePicker;

?>

<style>
    .offer-menu ul.custom-tabs li a:hover {
        background-color: transparent;
    }

    .hov.list-group-item a.active {
        color: #ff73c0;
    }
    /*DateTime Picker`s*/
    .input-group-addon:last-child {
        border-left: 0;
        /* float: right; */
        width: 50px;
        padding-top: 10px;
    }
    .input-group .form-control:not(:first-child):not(:last-child),
    .input-group-addon:not(:first-child):not(:last-child),
    .input-group-btn:not(:first-child):not(:last-child) {
        border-radius: 0;
        width: 100px;
    }

    /*Модальные окна*/

    .modal-content{
        background-color: #fc96cd91;
        color: #fff;
    }
    .modal-title{
        color: #fff;
    }

    #order_now, #order_now1, #order_now2, #order_now3, #order_now4{
        margin-top: 300px;
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
        margin: 30px 0;
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
    .try-registration-form.o_modal input {
        background: rgba(255, 255, 255, 0.8);
        width: 100%;
        padding: 20px;
        margin: 0 0!important;
        color: #ff2e59;
        border-left: 3px solid #ef3d4a;
    }
    input#order_modal {
        margin: 30px 0!important;
    }

    .dropdown-menu{
        color: #ffffff;
        text-align: left;
        background-color: #2171ea6b;
        min-width: 18rem;
        padding: 0 0;

    }

    .try-registration-form .modal-body form input, .try-registration-form .modal-body form textarea, .try-registration-form .modal-body form button {
        font-family: 'Poiret One';
        opacity: 1;
        font-size: 18px;
        font-weight: 700!important;
    }
    .table-condensed>tbody>tr>td:hover,
    .table-condensed>tbody>tr>th:hover,
    .table-condensed>tfoot>tr>td:hover,
    .table-condensed>tfoot>tr>th:hover,
    .table-condensed>thead>tr>td:hover,
    .table-condensed>thead>tr>th:hover {
        padding: 5px;
        color: #777;
    }
    .datepicker .datepicker-switch, .datepicker .prev, .datepicker .next, .datepicker tfoot tr th {
        cursor: pointer;
        color: #fff;
    }
    .table-condensed thead tr th.dow {
        color: #fff;
    }
    .table-condensed thead tr th.datepicker-switch:hover{
        color: #777;
    }
    table, thead, tbody, tr, th, td {
        text-align: center;
        min-width: 40px!important;
        border: none!important;
        /*margin-top: 70px!important;*/
    }
    .slide-content  h3 span{
        font-size: 34px;
        font-weight: 700;
        text-shadow: 3px 2px 6px rgba(250, 111, 142, .9);
    }
   @media screen and (max-width: 767px){
       .slide-content  h3 span{
           font-size: 22px!important;
       }
   }
</style>

<!--
================================
Начало слайдера
=================================
 -->
<div class="slider-area">
    <div class="slider-active owl-carousel">
        <div class="single-slider" style="background-image: url(/web/images/slider/slide-3.jpg)"
             data-top-bottom="transform: translateY(300px);" data-bottom-top="transform: translateY(-300px);">
            <div class="slide-content">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-7 col-md-12 col-sm-12">
                            <h3><span>+7(983) 344-76-51</span></h3>
                            <h2>Взрыв Красоты</h2>
                            <p>Дорогие друзья! Сайт находится на стадии разработки.</p>
                            <a href="/services" class="btn-mr th-primary pill"> Услуги</a>
                            <a href="/shop" class="btn-mr th-secondary pill"> Магазин</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end single slider -->
        <div class="single-slider" style="background-image: url(/web/images/slider/slide-1.jpg)"
             data-top-bottom="transform: translateY(300px);" data-bottom-top="transform: translateY(-300px);">
            <div class="slide-content">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-7 col-md-12 col-sm-12">
                            <h3><span>+7(983) 344-76-51</span></h3>
                            <h2>Взрыв Красоты</h2>
                            <p>Дорогие друзья! Сайт находится на стадии разработки.</p>
                            <a href="/services" class="btn-mr th-primary pill"> Услуги</a>
                            <a href="/shop" class="btn-mr th-secondary pill"> Магазин</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end single slider -->
        <div class="single-slider" style="background-image: url(/web/images/slider/slide-2.jpg)"
             data-top-bottom="transform: translateY(300px);" data-bottom-top="transform: translateY(-300px);">
            <div class="slide-content">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-7 col-md-12 col-sm-12">
                            <h3><span>+7(983) 344-76-51</span></h3>
                            <h2>Взрыв Красоты</h2>
                            <p>Дорогие друзья! Сайт находится на стадии разработки.</p>
                            <a href="/services" class="btn-mr th-primary pill"> Услуги</a>
                            <a href="/shop" class="btn-mr th-secondary pill"> Магазин</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end single slider -->
    </div>
</div>

<!--
================================
Конец слайдера
=================================
 -->

<!--
================================
Раздел Услуги (начало)
=================================
 -->
<div class="services-area">
    <div class="container">
        <div class="row">
            <div class="col col-12 text-center">
                <h2 class="section-title">SPA & BEAUTY TOMSK</h2><br>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. </p>
            </div>
            <!-- end section tiitle -->
        </div>
        <div class="spacer-1"></div>
        <!-- end spacer -->

        <div class="row">
            <div class="col-md-4 col-12 text-center animation" data-animation="bounceInUp" data-animation-delay="0.1s">
                <div class="single__services">
                    <img src="/web/images/services/s-1.png" alt="" class="rounded-circle" id="kv-btn-2">
                    <h3><a href="#">Природный SPA</a></h3>
                    <p>Lorem ipsum dolor sit amet, consetetur elitr sed diam nonumy eirmod tempor.</p>
                </div>
            </div>
            <!-- end single services -->
            <div class="col-md-4 col-12 text-center animation" data-animation="bounceInUp" data-animation-delay="0.3s">
                <div class="single__services">
                    <img src="/web/images/services/s-2.png" alt="" class="rounded-circle">
                    <h3><a href="#">Лечебный Массаж</a></h3>
                    <p>Lorem ipsum dolor sit amet, consetetur elitr sed diam nonumy eirmod tempor.</p>
                </div>
            </div>
            <!-- end single services -->
            <div class="col-md-4 col-12 text-center animation" data-animation="bounceInUp" data-animation-delay="0.6s">
                <div class="single__services">
                    <img src="/web/images/services/s-3.png" alt="" class="rounded-circle">
                    <h3><a href="#">Макияж & Уход за Кожей</a></h3>
                    <p>Lorem ipsum dolor sit amet, consetetur elitr sed diam nonumy eirmod tempor.</p>
                </div>
            </div>
            <!-- end single services -->
        </div>
    </div>
</div>
<!--
================================
Услуги конец
=================================
 -->


<!--
================================
Amazing feature start
=================================
 -->

<div class="amazing-feature">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-lg-push-1">

                    <div class="offer-main-thumb-img animation" data-animation="slideInLeft"
                         data-animation-delay="0.1s">
                        <img src="/images/services-pro/pro-1.jpg" alt="" class="rounded-circle">
                        <div class="tab-content">
                            <div class="tab-pane  show active" id="pills-home" role="tabpanel"
                                 aria-labelledby="pills-home-tab">
                                <div class="offer-main-promo">
                                    <h3>Подтяжка лица</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor.</p>
                                    <a href="/blog-single/7">узнать больше</a>
                                </div>
                            </div>

                            <div class="tab-pane" id="pills-profile" role="tabpanel"
                                 aria-labelledby="pills-profile-tab">
                                <div class="offer-main-promo">
                                    <h3>Уход за волосами</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor.</p>
                                    <a href="/blog-single/4">узнать больше</a>
                                </div>
                            </div>

                            <div class="tab-pane" id="pills-contact" role="tabpanel"
                                 aria-labelledby="pills-contact-tab">
                                <div class="offer-main-promo">
                                    <h3>Массаж Тела</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor.</p>
                                    <a href="/blog-single/2">узнать больше</a>
                                </div>
                            </div>

                            <div class="tab-pane" id="pills-contact2" role="tabpanel"
                                 aria-labelledby="pills-contact-tab">
                                <div class="offer-main-promo">
                                    <h3>Массаж Лица</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor.</p>
                                    <a href="/blog-single/1">узнать большеe</a>
                                </div>
                            </div>

                            <div class="tab-pane" id="pills-contact3" role="tabpanel"
                                 aria-labelledby="pills-contact-tab">
                                <div class="offer-main-promo">
                                    <h3>Массаж Шеи</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor.</p>
                                    <a href="/blog-single/5">узнать больше</a>
                                </div>
                            </div>
                            <div class="tab-pane" id="pills-contact4" role="tabpanel"
                                 aria-labelledby="pills-contact-tab">
                                <div class="offer-main-promo">
                                    <h3>Антицеллюлит</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor.</p>
                                    <a href="/blog-single/6">узнать больше</a>
                                </div>
                            </div>
                            <div class="tab-pane" id="pills-contact5" role="tabpanel"
                                 aria-labelledby="pills-contact-tab">
                                <div class="offer-main-promo">
                                    <h3>Макияж</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor.</p>
                                    <a href="/blog-single/3">узнать больше</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="offer-menu">
                        <ul class="nav custom-tabs" role="tablist">
                            <li class="nav-item animation" data-animation="slideInRight" data-animation-delay="0.2s">
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                                   role="tab" aria-controls="pills-home" aria-selected="true"> <img
                                            src="/images/services-pro/01.jpg" alt="" class="rounded-circle">
                                    <div class="offer-price">
                                        <span>₽ 1500</span>
                                    </div>
                                </a>
                            </li>

                            <li class="nav-item animation" data-animation="slideInRight" data-animation-delay="0.1s">
                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                                   role="tab" aria-controls="pills-profile" aria-selected="false"> <img
                                            src="/images/services-pro/pro-thumbjpg.jpg" alt="" class="rounded-circle">
                                    <div class="offer-price">
                                        <span>₽ 1300</span>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item animation" data-animation="slideInRight" data-animation-delay="0.2s">
                                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
                                   role="tab" aria-controls="pills-contact" aria-selected="false"> <img
                                            src="/images/services-pro/03.jpg" alt="" class="rounded-circle">
                                    <div class="offer-price">
                                        <span>₽ 1000</span>
                                    </div>
                                </a>

                            </li>
                            <li class="nav-item animation" data-animation="slideInRight" data-animation-delay="0.3s">
                                <a class="nav-link" id="pills-contact-tab2" data-toggle="pill" href="#pills-contact2"
                                   role="tab" aria-controls="pills-contact" aria-selected="false"> <img
                                            src="/images/services-pro/04.jpg" alt="" class="rounded-circle">
                                    <div class="offer-price">
                                        <span>₽ 800</span>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item animation" data-animation="slideInRight" data-animation-delay="0.4s">
                                <a class="nav-link" id="pills-contact-tab3" data-toggle="pill" href="#pills-contact3"
                                   role="tab" aria-controls="pills-contact" aria-selected="false"> <img
                                            src="/images/services-pro/05.jpg" alt="" class="rounded-circle">
                                    <div class="offer-price">
                                        <span>₽ 200</span>
                                    </div>
                                </a>
                            </li>
                            <!--<li class="nav-item animation" data-animation="slideInRight" data-animation-delay="0.5s">
                                <a class="nav-link" id="pills-contact-tab3" data-toggle="pill" href="#pills-contact4"
                                   role="tab" aria-controls="pills-contact" aria-selected="false"> <img
                                            src="/images/services-pro/03.jpg" alt="" class="rounded-circle">
                                    <div class="offer-price">
                                        <span>₽ 700</span>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item animation" data-animation="slideInRight" data-animation-delay="0.6s">
                                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact5"
                                   role="tab" aria-controls="pills-contact" aria-selected="false"> <img
                                            src="/images/services-pro/05.jpg" alt="" class="rounded-circle">
                                    <div class="offer-price">
                                        <span>₽ 1000</span>
                                    </div>
                                </a>
                            </li>-->
                        </ul>
                    </div>

            </div>

            <div class="col-lg-6 col-md-12 col-sm-12 but">
                <div class="amazing-feature-title">
                    <div class="col col-12 txt-c">
                        <h2 class="section-title">Омолаживающие Процедуры</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat. </p>
                    </div>

                    <div class="spacer-1"></div>

                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-lg-3">
                            <ul class="services-list">
                                <li><a href="/blog-single/1">МАССАЖ ЛИЦА</a></li>
                                <li><a href="/blog-single/2">МАССАЖ ТЕЛА</a></li>
                                <li><a href="/blog-single/3">МАКИЯЖ</a></li>
                                <li><a href="/blog-single/4">УХОД ЗА ВОЛОСАМИ</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <ul class="services-list">
                                <li><a href="/blog-single/5">МАССАЖ ШЕИ</a></li>
                                <li><a href="/blog-single/6">АНТИЦЕЛЛЮЛИТ</a></li>
                                <li><a href="/blog-single/7">ПОДТЯЖКА ЛИЦА</a></li>

                            </ul>
                        </div>
                    </div>

                    <div class="text-left but-left">
                        <a href="/blog" class="btn-mr pill th-primary">Подробнее...</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--
================================
Amazing feature End
=================================
 -->


<!--
================================
Продукция каталог
=================================
 -->
<style>
    article {
        display: none;
        padding: 10px;
        border-width: 0 1px 1px 0;
        border-style: solid;
        border-color: #fff;
        box-shadow: 0 1px 1px #ccc;
        margin-bottom: 5px;
        background-color: #f1f1f1;
        /*padding: 120px 10px;*/
    }
    .product__price{
        padding-top: 30px;
    }
</style>
<div class="product-area">
    <div class="container">
        <div class="row">
            <div class="col col-12 text-center">
                <h2 class="section-title">Наши продукты</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. </p>
            </div>
            <!-- end section tiitle -->
        </div>
        <div class="spacer-1"></div>
        <!-- end spacer -->
        <ul class="group row product-parent" id="our_product">
            <article>

                <?php foreach ($products as $key => $item): ?>
                    <?php if ($key <= 3): ?>

                        <li class="col-md-3 col-lg-3 col-sm-6 list-group-item animation" data-animation="fadeInDown"
                            data-animation-delay="<?= $i += 0.2?>s">

                            <div class="single--product">
                                <img src="<?= $item['img'] ?>" alt="<?= $item['prod_name'] ?>">
                                <div class="product--hover">
                                    <h4 class="product__titile"><a href="<?= Url::to(['/rose/single-product/', 'id' => $item['prod_id']])?>"><?= $item['prod_name'] ?></a></h4>
                                    <h5 class="product__price">₽ <?= number_format($item['price'],0,'',' ');?></h5>
                                    <ul class="hover-cart">
                                        <div class="shp_hover" style="margin-left: -30px;">
                                            <ul>
                                                <li>
                                                    <?= Html::a('<i class="fa fa-eye" aria-hidden="true"></i>', Url::to(['/rose/single-product/', 'id' => $item['prod_id']]), ['class' => 'tooltipped chnage-clor', 'data-toggle' => 'tooltip', 'title' => 'Детальный просмотр', 'data-id' => $item['prod_name'], 'data-placement' => 'top']) ?>
                                                </li>
                                                <li>
                                                    <?= Html::a('<i class="fa fa-shopping-basket"></i>', Url::to(['cart/add', 'id' => $item['prod_id']]), ['class' => 'tooltipped chnage-clor basket', 'data-toggle' => 'tooltip', 'title' => 'В корзину', 'data-id' => $item['prod_id'], 'data-placement' => 'top']) ?>
                                                </li>
                                                <li>
                                                    <?= Html::a('<i class="fa fa-heart"></i>', '#', ['class' => 'tooltipped chnage-clor', 'data-toggle' => 'tooltip', 'title' => 'В избранное', 'data-id' => $item['prod_name'], 'data-placement' => 'top']) ?>
                                                </li>
                                            </ul>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
            </article>
            <article>
                <?php foreach ($products as $key => $item): ?>
                    <?php if ($key >= 3 && $key <= 6): ?>
                        <li class="col-md-3 col-lg-3 col-sm-6 list-group-item animation" data-animation="fadeInDown"
                            data-animation-delay="<?= $i += 0.2?>s">

                            <div class="single--product">
                                <img src="<?= $item['img'] ?>" alt="<?= $item['prod_name'] ?>">
                                <div class="product--hover">
                                    <h4 class="product__titile"><a href="<?= Url::to(['/rose/single-product/', 'id' => $item['prod_id']])?>"><?= $item['prod_name'] ?></a></h4>
                                    <h5 class="product__price">₽ <?= number_format($item['price'],0,'',' ');?></h5>
                                    <ul class="hover-cart">
                                        <div class="shp_hover" style="margin-left: -30px;">
                                            <ul>
                                                <li>
                                                    <?= Html::a('<i class="fa fa-eye" aria-hidden="true"></i>', Url::to(['/rose/single-product/', 'id' => $item['prod_id']]), ['class' => 'tooltipped chnage-clor', 'data-toggle' => 'tooltip', 'title' => 'Детальный просмотр', 'data-id' => $item['prod_name'], 'data-placement' => 'top']) ?>
                                                </li>
                                                <li>
                                                    <?= Html::a('<i class="fa fa-shopping-basket"></i>', Url::to(['cart/add', 'id' => $item['prod_id']]), ['class' => 'tooltipped chnage-clor basket', 'data-toggle' => 'tooltip', 'title' => 'В корзину', 'data-id' => $item['prod_id'], 'data-placement' => 'top']) ?>
                                                </li>
                                                <li>
                                                    <?= Html::a('<i class="fa fa-heart"></i>', '#', ['class' => 'tooltipped chnage-clor', 'data-toggle' => 'tooltip', 'title' => 'В избранное', 'data-id' => $item['prod_name'], 'data-placement' => 'top']) ?>
                                                </li>
                                            </ul>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
            </article>
            <article>
                <?php foreach ($products as $key => $item): ?>
                    <?php if ($key >= 6 && $key <= 9): ?>
                        <li class="col-md-3 col-lg-3 col-sm-6 list-group-item animation" data-animation="fadeInDown"
                            data-animation-delay="<?= $i += 0.2?>s">

                            <div class="single--product">
                                <img src="<?= $item['img'] ?>" alt="<?= $item['prod_name'] ?>">
                                <div class="product--hover">
                                    <h4 class="product__titile"><a href="<?= Url::to(['/rose/single-product/', 'id' => $item['prod_id']])?>"><?= $item['prod_name'] ?></a></h4>
                                    <h5 class="product__price">₽ <?= number_format($item['price'],0,'',' ');?></h5>
                                    <ul class="hover-cart">
                                        <div class="shp_hover" style="margin-left: -30px;">
                                            <ul>
                                                <li>
                                                    <?= Html::a('<i class="fa fa-eye" aria-hidden="true"></i>', Url::to(['/rose/single-product/', 'id' => $item['prod_id']]), ['class' => 'tooltipped chnage-clor', 'data-toggle' => 'tooltip', 'title' => 'Детальный просмотр', 'data-id' => $item['prod_name'], 'data-placement' => 'top']) ?>
                                                </li>
                                                <li>
                                                    <?= Html::a('<i class="fa fa-shopping-basket"></i>', Url::to(['cart/add', 'id' => $item['prod_id']]), ['class' => 'tooltipped chnage-clor basket', 'data-toggle' => 'tooltip', 'title' => 'В корзину', 'data-id' => $item['prod_id'], 'data-placement' => 'top']) ?>
                                                </li>
                                                <li>
                                                    <?= Html::a('<i class="fa fa-heart"></i>', '#', ['class' => 'tooltipped chnage-clor', 'data-toggle' => 'tooltip', 'title' => 'В избранное', 'data-id' => $item['prod_name'], 'data-placement' => 'top']) ?>
                                                </li>
                                            </ul>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
            </article>

            <!-- end single product -->
        </ul>
        <!-- end row -->
        <div class="spacer-1"></div>
        <!-- end spacer -->
        <div class="row">
            <div class="col-12 text-center animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                <a href="#" class="btn-mr th-primary pill" id="loadMore">Показать ещё</a>
            </div>
        </div>
    </div>
</div>

<!--
================================
Продукция каталог
=================================
 -->
<!--
================================
Уникальное предложение
=================================
 -->
<div class="special-offer">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-xl-8 col-md-12">
                <div class="offer-content animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                    <h2>Предложение месяца</h2>
                    <h3>Закажи сеанс SPA и получи скидку 25% для друга!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor
                        tellus sollicitudin squ ad litora torquent per conubia.</p>
                    <a href="#!" class="btn-mr pill th-secondary tlg" data-toggle="modal" data-target="#order_now">ЗАКАЗАТЬ СЕАНС СЕЙЧАС</a>

                </div>
            </div>
        </div>
    </div>
</div>

<!--
================================
Уникальное предложение
=================================
 -->


<!--
=========================
Модальные окна
=========================
-->
<div class="modal fade" id="order_now" tabindex="-1" role="dialog" aria-labelledby="order_service" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <br><div class="modal-header">
                <h3 class="modal-title" id="order_service">Сеанс SPA + 25% OFF для друга</h3>
                <span  class="close" data-dismiss="modal" aria-hidden="true" style="cursor:pointer;"></span>
            </div>
<div class="try-registration-form">
            <div class="modal-body">
                <form action="https://formspree.io/bej0j88@yandex.ru" id="home-contactform" method="POST">
                    <input class="form-control" id="names" name="names" placeholder="Ваше имя" type="text" />
                    <input class="form-control" id="emails" name="emails" placeholder="Ваш E-mail" type="email" />
                    <input class="form-control" id="tel" name="tel" placeholder="Контактный номер телефона" type="tel" />
                    <textarea class="form-control" id="message-text" name="messages" placeholder="Сеанс SPA + 25% OFF для друга" rows="15"></textarea>
                    <button class="btn btn-outline-primary btn-md btnxs center-block btn-block  <!--animated pulse infinite-->" data-loading-text="Отправка..." id="submit" type="submit"><h3>Заказать</h3>
                    </button>
                </form>
            </div><br>
</div>
        </div>
    </div>
</div>

<?php $i = 0; foreach ($om as $item):?>
<div class="modal fade " id="order_now<?= $i += 1;?>" tabindex="-1" role="dialog" aria-labelledby="order_service" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <br><div class="modal-header">
                <h3 class="modal-title" id="order_service"><?= $item['title']?> </h3>
                <span  class="close" data-dismiss="modal" aria-hidden="true" style="cursor:pointer;"></span>
            </div>

            <div class="try-registration-form o_modal">
                <div class="modal-body">
                    <?php $form = ActiveForm::begin(['method' => 'post', 'action' => '/rose/index']); ?>

                        <input type="hidden" name="title" value="<?= $item['title']?>" >

                    <?= $form->field($model, 'name')->label('')->textInput(['placeholder' => 'Имя']) ?>

                    <?= $form->field($model, 'email')->label('')->textInput(['placeholder' => 'E-mail'])?>

                    <?= $form->field($model, 'phone')->label('')->textInput(['placeholder' => 'Телефон'])?><br>

                        <!--<input type="text" name="order_d" value="<?/*= $item['order_d']*/?>" readonly>  <br>

                        <input type="text" name="order_t" value="<?/*= $item['order_t']*/?>" readonly>  <br>-->

               <?php try {
                  echo DatePicker::widget([
                       'name' => 'order_d',
                       'type' => DatePicker :: TYPE_INPUT,
                       'value' => date('Y-m-d', strtotime('+2 days')),
                       'options' => ['placeholder' => 'Вберите дату'],
                       'pluginOptions' => [
                           'format' => 'yyyy-mm-dd',
                           'todayHighlight' => true
                       ]
                   ]);
               } catch (Exception $e) {
               } ?>

                    <br>
                <?php try {
                   echo TimePicker::widget([
                        'name' => 'order_t',
                        'pluginOptions' => [
                            'showSeconds' => true,
                            'showMeridian' => false,
                            'minuteStep' => 15,
                            'secondStep' => 60,
                        ]
                    ]);
                } catch (Exception $e) {
                }
                ?>



                    <br><button class="btn btn-outline-primary btn-md btnxs center-block btn-block" data-loading-text="Отправка..." id="submit" type="submit"><h3>Заказать</h3>
                    </button>
                    <?php ActiveForm::end(); ?>
                </div><br>
            </div>
        </div>
    </div>
</div>
<?php endforeach;?>
<!--
=========================
Модальные окна
=========================
-->
<!--
================================
Наша команда
=================================
 -->
<div class="our__team__area">
    <div class="container">
        <div class="row">
            <div class="col col-12 text-center">
                <h2 class="section-title">Наши Косметологи, Эксперты</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. </p>
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
Курсы
=================================
 -->

<div class="our__course">
    <div class="container">
        <div class="row">
            <div class="col col-12 text-center">
                <h2 class="section-title">Наши Услуги</h2>
                <p> Здесь преставлены наиболее популярные виды услуг, оказываемых нашим салоном.
                    Для заказа услуги, выберите дату и время, на которое хотели бы записаться.
                    В течении часа наш менеджер свяжется с Вами для согласования времени оказания услуги.<br> <span class="text-uppercase">Спасибо Вам  за доверие!</span></p>
            </div>

        </div>
        <div class="spacer-1"></div>
    </div>

    <ul class="course-gallery">
    <?php $i = 0; foreach($om as $val):?>
        <li class="single__course">
            <img src="/web/images/orders_modal/<?= $val['img']?>" alt="<?= $val['title']?>">
            <div class="couse-hover">
                <h4><?= $val['title']?></h4>
                <h5><?= $val['schedule']?></h5>
                <a href="#!" class="btn-mr th-secondary pill" data-toggle="modal" data-target="#order_now<?= $i += 1;?>">Заказать</a>
            </div>
        </li>
    <?php endforeach;?>
    </ul>
</div>


<!--
================================
Курсы
=================================
 -->

<!--
================================
Отзывы
=================================
 -->
<div class="customer-review">
    <div class="container">
        <div class="row">
            <div class="col col-12 text-center">
                <h2 class="section-title">Обзор процедур</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. </p>
            </div>

        </div>
        <div class="spacer-1"></div>
        <!-- end spacer -->
        <div class="row">
            <div class="col-12">
                <div class="owl-carousel test-active">
                    <div class="customer__review--rapper">
                        <div class="review-box">
                            <div class="single--itm">
                                <div class="author-box">
                                    <div class="author-thumb">
                                        <img src="/web/images/customr-review/tes.jpg" alt="" class="img-thumbnail ">
                                    </div>

                                    <div class="author-text">
                                        <h3>Mehjabin Rumi</h3>
                                        <i class="fa fa-quote-right"></i>
                                    </div>

                                </div>

                                <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            </div>

                        </div>

                        <div class="video--play-box align-items-center">
                            <img src="/web/images/customr-review/cus-1.jpg" alt="">
                            <a href="../../../www.youtube.com/watch2540.html?v=G0dzLanYW1E" class="video-pop"><i
                                        class="fa fa-play"></i></a>
                        </div>

                    </div>

                    <div class="customer__review--rapper">
                        <div class="review-box">
                            <div class="single--itm">
                                <div class="author-box">
                                    <div class="author-thumb">
                                        <img src="/web/images/customr-review/tes.jpg" alt="" class="img-thumbnail ">
                                    </div>

                                    <div class="author-text">
                                        <h3>Mehjabin Rumi</h3>
                                        <i class="fa fa-quote-right"></i>
                                    </div>

                                </div>

                                <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            </div>

                        </div>

                        <div class="video--play-box align-items-center">
                            <img src="/web/images/customr-review/cus-1.jpg" alt="">
                            <a href="../../../www.youtube.com/watch2540.html?v=G0dzLanYW1E" class="video-pop"><i
                                        class="fa fa-play"></i></a>
                        </div>

                    </div>

                    <div class="customer__review--rapper">
                        <div class="review-box">
                            <div class="single--itm">
                                <div class="author-box">
                                    <div class="author-thumb">
                                        <img src="/web/images/customr-review/tes.jpg" alt="" class="img-thumbnail ">
                                    </div>

                                    <div class="author-text">
                                        <h3>Mehjabin Rumi</h3>
                                        <i class="fa fa-quote-right"></i>
                                    </div>

                                </div>

                                <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            </div>

                        </div>

                        <div class="video--play-box align-items-center">
                            <img src="/web/images/customr-review/piling.jpg" alt="" class="img-responsive">
                            <a href="../../../www.youtube.com/watch?v=0WKxtTn0Qpk" class="video-pop"><i
                                        class="fa fa-play"></i></a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<!--
================================
Отзывы
=================================
 -->


<!--
================================
Довольные клиенты
=================================
 -->

<div class="happy-clients">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6 col-12 text-center animation" data-animation="rotateInDownLeft"
                 data-animation-delay="0.1s">
                <div class="single--happy-client">
                    <img src="/web/images/happy-clients/hp-1.png" alt="" class="rounded-circle">
                    <h4>Услуг выполнено</h4>
                    <h3><span class="counter">2000</span></h3>
                </div>
            </div>
            <!-- end single counter -->
            <div class="col-md-3 col-sm-6 col-12 text-center animation" data-animation="rotateInDownLeft"
                 data-animation-delay="0.3s">
                <div class="single--happy-client">
                    <img src="/web/images/happy-clients/hp-2.png" alt="" class="rounded-circle">
                    <h4>Процедур SPA</h4>
                    <h3><span class="counter">1200</span></h3>
                </div>
            </div>
            <!-- end single counter -->
            <div class="col-md-3 col-sm-6 col-12 text-center animation" data-animation="rotateInDownLeft"
                 data-animation-delay="0.5s">
                <div class="single--happy-client">
                    <img src="/web/images/happy-clients/hp-3.png" alt="" class="rounded-circle">
                    <h4>Довольных клиентов</h4>
                    <h3><span class="counter">3500</span></h3>
                </div>
            </div>
            <!-- end single counter -->
            <div class="col-md-3 col-sm-6 col-12 text-center animation" data-animation="rotateInDownLeft"
                 data-animation-delay="0.7s">
                <div class="single--happy-client">
                    <img src="/web/images/happy-clients/hp-3.png" alt="" class="rounded-circle">
                    <h4>Прблем кожи решено</h4>
                    <h3><span class="counter">850</span></h3>
                </div>
            </div>
            <!-- end single counter -->
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
Блог
=================================
 -->

<div class="blog-section section-padding">
    <div class="container">
        <div class="row">
            <div class="col col-12 text-center">
                <h2 class="section-title">Последние Новости</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. </p>
            </div>

        </div>
        <div class="spacer-1"></div>

        <div class="row">
            <?php foreach($post as $val):?>
            <div class="col-md-6 col-12">
                <div class="single__blog">
                    <div class="blog-thumb animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                        <a href="/full-post/<?= $val['id']?>">
                        <img src="/web/images/posts/<?= $val['img']?>" alt="<?= $val['title']?>">
                        </a>
                    </div>

                    <div class="blog-text animation" data-animation="fadeInDown" data-animation-delay="0.1s">
                        <h2><a href="/full-post/<?= $val['id']?>"><?= $val['title']?></a></h2>
                        <p><?= $val['description']?>...</p>
                        <a href="/full-post/<?= $val['id']?>" class="read-more-link">ДАЛЬШЕ...</a>
                        <ul class="blog-meta-data">
                            <li><a href="#!"><i class="fa fa-calendar"></i><?= Yii::$app->formatter->asDate($val['updated_at'], 'long');?></a></li>
                            <li><a href="#!"><i class="fa fa-user"></i>От <?= $val['writed_by']?></a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <?php endforeach;?>
        </div>
    </div>
</div>

<!--
================================
Блог
=================================
 -->


<!--
================================
Часы работы
=================================
 -->
<div class="openaing-our ">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-3 col-md-3 col-sm-6 col-12 animation" data-animation="flipInX"
                 data-animation-delay="0.1s">
                <h2 class="open-heading-1">Часы Работы: </h2>
            </div>

            <div class="col-xl-3 col-md-3 col-sm-6 col-12 animation" data-animation="flipInX"
                 data-animation-delay="0.1s">
                <div class="SingleOpeningHour">
                    <h2 class="open-heading-2">с Понедельника по Пятницу</h2>
                    <h3 class="open-heading-3">с 10:00 до 22:00</h3>
                </div>
            </div>

            <div class="col-xl-3 col-md-3 col-sm-6 col-12 animation" data-animation="flipInX"
                 data-animation-delay="0.1s">
                <div class="SingleOpeningHour">
                    <h2 class="open-heading-2">в Субботу и Восресенье</h2>
                    <h3 class="open-heading-3">с 09:00 до 23:00</h3>
                </div>
            </div>

            <div class="col-xl-3 col-md-3 col-sm-6 col-12 animation" data-animation="flipInX"
                 data-animation-delay="0.1s">
                <div class="SingleOpeningHour">
                    <img src="/web/images/open-img/op-1.jpg" alt="" class="rounded">
                </div>
            </div>
            <style>
               .footer-socila .fa-facebook:before {
                    content: "\f09a";
                    color: #fff;
                }
               .footer-socila .fa-twitter:before{
                    color: #fff;
                }
               .footer-socila .fa-google-plus:before{
                    color: #fff;
                }
            </style>
            <div class="single-footer">
            <ul class="footer-socila">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
            </div>
        </div>
    </div>
</div>
<!--
================================
Часы работы
=================================
 -->


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

<script>

    $(function () {
        $("article").slice(0, 1).show();
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $("article:hidden").slice(0, 1).slideDown();
            if ($("article:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: ($(this).offset().top - 200 + 'px')
            }, 1500);
        });
    });
</script>

