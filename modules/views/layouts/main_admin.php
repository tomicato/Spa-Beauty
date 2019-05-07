<?php
use app\assets\AppAsset;
use yii\helpers\Html;
use yii\helpers\Url;
AppAsset::register($this);
$session = Yii::$app->session;
$session->open();

?>
<?php $this->beginPage() ?>

<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">

<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- fonts css -->
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">

    <!-- ==================Start Css Link===================== -->

    <link rel="stylesheet" href="/web/css/multizoom.css" type="text/css">
    <!-- ==================End Css Link===================== -->
    <!-- favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="/images/logo/fi.jpg">
    <?/*= Html::csrfMetaTags() */?>
    <title><?= Html::encode($this->title) ?></title>
    <!-- ==================Start Js Link===================== -->

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script type="text/javascript" src="/web/js/multizoom.js"></script>
    <!--[if lt IE 9]>
    <script src="http://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="http://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->


    <?php $this->head() ?>
</head>

<body>
<?php $this->beginBody() ?>

<!--
================================
Прелоадер
=================================
-->
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
                        <li class="menu-item-has-children">
                            <a href="/services"> услуги</a>

                            <ul class="sub-menu">
                                <li><a href="#!">массаж лица</a></li>
                                <li><a href="#!">Татуаж</a></li>
                                <li><a href="#!">массаж тела</a></li>
                                <li><a href="#!">Физиотерапия</a></li>
                                <li><a href="#!">ароматерапия</a></li>
                            </ul>

                        </li>
                        <li><a href="/blog"> блог </a></li>
                        <li><a href="/cart-view"> Корзина </a></li>
                        <li>
                            <a href="/shop"> Магазин</a>
                        </li>
                        <li>
                            <a href="/contact">Контакты</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
                <div class="logo">
                    <a href="/">
                        <img src="/web/images/logo/logopng.png" alt="">
                    </a>
                </div>
            </div>

            <div class="col-xl-3 col-md-4 col-6 col-12">
                <div class="serar-cart-icon">

                    <ul>
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
                        <?php

                        echo '<li><a href="/services" title="Услуги"><i class="fa fa-heartbeat" aria-hidden="true"></i></a></li>
                                  <li><a href="/shop" title="Магазин"><i class="fa fa-cubes" aria-hidden="true"></i></a></li>';
                        if($_SERVER['REQUEST_URI'] !== '/cart-view')
                            echo '<li><a href="#!" class="cart-open" title="Корзина"><i class="fa fa-shopping-basket" aria-hidden="true"></i></i></a></li>';
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
                                        <div class="cart-img"><img src="/web/images/product/<?= $val['img']?>" alt="<?= $val['name']?>" width="80" height="120" class="img-thumbnail"></div>
                                        <!-- end cart img -->
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
                                </div><br><br>
                            </div>
                        <?php else:?>
                            <h3>Корзина пуста</h3>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
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
Банер
=================================
-->
<div class="banner-area">
    <div class="container">
        <div class="row align-items-center justify-content-center bnheight">
            <div class="col-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item">
                            <a href="/">Главная </a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">  <a href="#!"> <?= Html::encode($this->title) ?>  </a></li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>

<!--
================================
Банер
=================================
-->

<?= $content ?>

<!--
================================
Футер
=================================
-->
<footer class="site-footer secondary--fotter">
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-xl-2 col-md-3 col-sm-3">
                    <div class="single-footer">
                        <h3 class="footer-title">Навигация</h3>
                        <ul class="navigation-links">
                            <li><a href="/">Главная</a></li>
                            <li><a href="/about">О нас</a></li>
                            <li><a href="/services">Услуги</a></li>
                            <li><a href="#!">Бронирование</a></li>
                            <li><a href="/shop">Магазин</a></li>
                            <li><a href="/blog">Блог</a></li>
                            <li><a href="/contact">Контакты</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-6 col-md-5 col-sm-9">
                    <div class="single-footer">
                        <h3 class="footer-title es-1">Уведомление о новостях</h3>
                        <p>Укажите E-mail, чтобы получать свежие новости.</p>
                        <form action="#">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Получатель новостей">
                                <div class="input-group-append">
                                    <button class="btn-mr th-primary" type="submit">Получать новости</button>
                                </div>
                            </div>
                        </form>
                        <ul class="footer-socila">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="single-footer">
                        <h3 class="footer-title">Наша Галерея</h3>
                        <ul class="footer-gallery">
                            <li class="single-gallery">
                                <img src="/images/footer-gallery/gl-1.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>
                            <li class="single-gallery">
                                <img src="/images/footer-gallery/gl-2.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>
                            <li class="single-gallery">
                                <img src="/images/footer-gallery/gl-3.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>
                            <li class="single-gallery">
                                <img src="/images/footer-gallery/gl-4.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>
                            <li class="single-gallery">
                                <img src="/images/footer-gallery/gl-5.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>
                            <li class="single-gallery">
                                <img src="/images/footer-gallery/gl-6.jpg" alt="">
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
                        <p>2018 &copy; <a href="#!">SPA & BEAUTY TOMSK</a>, All rights reserved</p>
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
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
