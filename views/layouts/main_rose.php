<?php


use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;
use mdm\admin\components\Helper;
use yii\helpers\Url;
//$this->title = 'Салон «SPA»';
AppAsset::register($this);
$session = Yii::$app->session;
$session->open();
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">
    <!--<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">-->

    <link rel="shortcut icon" type="image/x-icon" href="/web/images/logo/fi.jpg">

    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode(Yii::$app->name) ?></title>

    <!--[if lt IE 9]>
    <script src="http://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="http://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <?php $this->head() ?>
    <style>
        .serar-cart-icon ul li a i.fa {
            position: relative;
            top: 15px;
            cursor: pointer;
            color: #f14091

        }
        .serar-cart-icon>ul li a form{
            display: block;
        }
        .serar-cart-icon>ul li a:hover i.fa {
            position: relative;
            top: 15px;
            cursor: pointer;
            color: #fff
        }
        .serar-cart-icon button{
            all: initial;
        }
        #cart-content h3{
            text-align: center;
        }

    </style>
<script>
        function clearCart() {
            $.ajax({
                url: '/cart/clear',
                type: 'GET',
                success: function (res) {
                    if (!res) alert('Ошибка!');
                    showCart(res);
                },
                error: function () {
                    alert('Error!');
                }
            });
        }
        function showCart(cart) {
            $('#cart-content').html(cart);

        }

    </script>
</head>
<body>
<?php $this->beginBody() ?>
<div class="pink-rosepreloder">
    <div class="pink-rosespinner">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
    </div>
</div>


<!--
================================
Хедер
=================================
 -->
<header class="site-header sticky slideInDown animated">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-5 col-md-4 col-12">
                <div class="humburger-icon">
                    <a href="#" class="click-humbarger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>

                <div class="humburger-menu">
                    <ul>
                        <li><a href="/"> Главная</a></li>
                        <li><a href="/about"> о нас</a> </li>
                        <li><a href="/services"> услуги</a></li>
                        <li><a href="/blog"> блог </a></li>
                        <li><a href="/post"> статьи </a></li>
                        <li><a href="/cart-view"> Корзина </a></li>
                        <li><a href="/shop"> Магазин</a></li>
                        <li><a href="/contact">Контакты</a></li>
                    </ul>
                </div>
            </div> <!--Кнопка меню-->

            <div class="col-lg-4 col-md-4 col-12">
                <div class="logo">
                    <a href="/">
                        <img src="/web/images/logo/logopng.png" alt="">
                    </a>
                </div>
            </div> <!--Лого-->

            <div class="col-xl-3 col-md-4 col-6 col-12">
                <div class="serar-cart-icon">
                    <ul>
                        <style>
                            .serar-cart-icon ul li a i.fa {
                                  position: relative;
                                  /*top: 15px;*/
                                  cursor: pointer;
                                  color: #f14091

                              }
                              .serar-cart-icon>ul li a form{
                                  display: block;
                              }
                              .serar-cart-icon>ul li a:hover i.fa {
                                  position: relative;
                                  top: 15px;
                                  cursor: pointer;
                                  color: #fff
                              }
                              .serar-cart-icon button{
                                  all: initial;
                              }
                        </style>
                        <?php
                            echo '<li><a href="/services" title="Услуги"><i class="fa fa-heartbeat" aria-hidden="true"></i></a></li>
                                   <li><a href="#!" class="cart-open" title="Корзина"><i class="fa fa-shopping-basket" aria-hidden="true"></i></i></a></li>
                                   <li><a href="/shop" title="Магазин"><i class="fa fa-cubes" aria-hidden="true"></i></a></li>';
                            if (Yii::$app->user->isGuest) {
                            echo  '<li><a href="/site/signup" title="Регистрация"><i class="fa fa-id-card" aria-hidden="true"></i></a></li>
                                   <li><a href="/site/login" title="Вход"><i class="fa fa-sign-in" aria-hidden="true"></i></a></li>';
                            }else {
                            echo ' <li><a href="/admin" title="Профиль"><i class="fa fa-user-circle" aria-hidden="true"></i></a></li>';
                            echo '<li><a href="#!" title="Выход '. '('. Yii::$app->user->identity->username. ')'.'">'
                                      . Html::beginForm(['/site/logout'], 'post')
                                      . '<button><i class="fa fa-sign-out" aria-hidden="true"></i></button>'
                                      . Html::endForm()
                                      . '</a></li>';
                            }
                        ?>
                    </ul>
                        <div class="shopping-cart" id="cart-content">
                            <h4>Кол-во товаров в корзине</h4>
                            <?php if(!empty($session['cart'])):?>
                                <ul>
                                    <?php foreach($session['cart'] as $key => $val):?>
                                        <li class="sing-cart-list">
                                            <div class="cart-img"><img src="<?= $val['img']?>" alt="<?= $val['name']?>" width="80" height="120" class="img-thumbnail"></div>
                                            <div class="cart-text">
                                                <p>
                                                    <span class="d-block"><?= $val['name']?></span>
                                                    <span class="d-block"><strong>₽ <?= $val['price']?> x <?= $val['qty']?></strong></span>
                                                    <span> <i class="fa fa-star"></i></span>
                                                    <span> <i class="fa fa-star"></i></span>
                                                    <span> <i class="fa fa-star"></i></span>
                                                    <span> <i class="fa fa-star"></i></span>
                                                    <span class="cg"> <i class="fa fa-star"></i></span>
                                                </p>
                                            </div>
                                            <div class="cart-remove" data-id="<?= $val['id']?>"><span><i class="fa fa-close"></i></span></div>
                                        </li><br>
                                    <?php endforeach; ?>
                                </ul>
                                <div class="cart-footer"><br>
                                    <div class="Cfooter-top"> <span>товаров</span> <span> <?= $session['cart.qty']?></span>шт.</div>
                                    <div class="Cfooter-top"> <span>сумма</span> <span> <?= $session['cart.sum']?></span>₽</div><br><hr>
                                    <div class="Cfooter-bottom">
                                        <a href="/cart-view" class="btn-mr xsl pill th-primary-shop">КОРЗИНА</a>
                                        <a href="#!" class="btn-mr xsl pill center-del"  onclick="clearCart()">ОЧИСТИТЬ</a>
                                       <!-- <a href="/cart-checkout" class="btn-mr xsl pill th-primary-shop">ОПЛАТИТЬ</a>-->
                                    </div><br><br>
                                </div>
                            <?php else:?>
                                <h3>Корзина пуста</h3>
                            <?php endif; ?>
                        </div>
                    </div>
            </div> <!--Иконки меню-->
        </div>
    </div>
</header>
<!--
================================
Хедер
=================================
 -->


<!--
================================
Область поиска
=================================
 -->
<div class="hidden-search-rapper">
        <span class="close-search">
            <i class="fa fa-times" aria-hidden="true"></i>
        </span>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-lg-push-3 col-md-8 col-md-push-3 col-sm-12">
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
<!--
================================
Область поиска
=================================
 -->

        <?= $content ?>

<!--
================================
Футер
=================================
 -->
<footer class="site-footer">
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-xl-2 col-md-3 col-sm-3 animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                    <div class="single-footer">
                        <h3 class="footer-title">Навигация</h3>
                        <ul class="navigation-links">
                            <li><a href="/"> Главная</a></li>
                            <li><a href="/about"> О нас</a> </li>
                            <li><a href="/services"> Услуги</a></li>
                            <li><a href="/blog"> Блог </a></li>
                            <li><a href="/post"> Статьи </a></li>
                            <li><a href="/cart-view"> Корзина </a></li>
                            <li><a href="/shop"> Магазин</a></li>
                            <li><a href="/contact">Контакты</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-6 col-md-5 col-sm-9 animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                    <div class="single-footer">
                        <h3 class="footer-title es-1">Уведомление о новостях</h3>

                        <p>Укажите Ваш E-mail, чтобы быть в курсе новостей.</p>
                        <form action="#">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Получатель новостей">
                                <div class="input-group-append">
                                    <button class="btn-mr th-primary" type="submit">Получать Новости</button>
                                </div>
                            </div>
                        </form>
                        <style>
                            .address_block address i.fa {
                                color: #f14091;
                                margin-bottom: 15px;
                                font-size: 20px;
                            }
                        </style>
                        <div class="address_block" style="margin: 60px 0;">
                            <div class="col-md-4">
                                <address>
                                    <div class="single--getIntouch">
                                        <div class="text-center">
                                            <i class="fa fa-home" aria-hidden="true"></i>
                                            <p>г.Томск, улица Пушкина 69</p>
                                        </div>

                                    </div>
                                </address>
                            </div>
                            <div class="col-md-4">
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
                            <div class="col-md-4">
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
<!--
===================
Галерея в Футере
===================
-->
                <div class="col-md-4 col-sm-12 animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                    <div class="single-footer">
                        <h3 class="footer-title">Наша Галерея</h3>
                        <ul class="footer-gallery">
                            <li class="single-gallery">
                                <img src="/web/images/footer-gallery/gl-1.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>

                            <li class="single-gallery">
                                <img src="/web/images/footer-gallery/gl-2.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>

                            <li class="single-gallery">
                                <img src="/web/images/footer-gallery/gl-3.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>

                            <li class="single-gallery">
                                <img src="/web/images/footer-gallery/gl-4.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>

                            <li class="single-gallery">
                                <img src="/web/images/footer-gallery/gl-5.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>

                            <li class="single-gallery">
                                <img src="/web/images/footer-gallery/gl-6.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="footer-copyright">
                        <p>2018 &copy; <a href="#">SPA & BEAUTY Tomsk</a>, All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</footer>

<!--
================================
Футер
=================================
 -->


<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>

