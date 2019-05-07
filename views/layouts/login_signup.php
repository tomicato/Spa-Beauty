<?php

use yii\helpers\Html;
use app\assets\AppAsset;
AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">
    <link rel="shortcut icon" type="image/x-icon" href="/web/images/logo/fi.jpg">
    <?= Html::csrfMetaTags() ?>

    <title><?= Html::encode(Yii::$app->name) ?></title>
    <!--[if lt IE 9]>
    <script src="http://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="http://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>



<!--
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
</div>-->


<!--
================================
Header Area Start
=================================
 -->
<header class="site-header sticky slideInDown animated">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-4 col-xl-5 col-12">
                <div class="humburger-icon">
                    <a href="#" class="click-humbarger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <!-- end humbugrer icon -->
                <div class="humburger-menu">
                    <ul>
                        <li class="current-menu-item menu-item-has-children">
                            <a href="#"> Home</a>
                            <ul class="sub-menu">
                                <li><a href="index.html">home one</a></li>
                                <li><a href="index-2.html">home two</a></li>
                                <li><a href="index-3.html">home three</a></li>
                                <li><a href="index-4.html">home four</a></li>
                            </ul>
                        </li>
                        <li><a href="about.html"> about</a> </li>
                        <li><a href="services.html"> Services</a> </li>
                        <li class="menu-item-has-children"><a href="#"> Blogs </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="blog.html">blog grid</a>
                                </li>
                                <li>
                                    <a href="blog-list.html">blog list</a>
                                </li>
                                <li>
                                    <a href="blog-single.html">single blog</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#"> Pages </a>
                            <ul class="sub-menu">
                                <li><a href="404.html">404 page</a></li>
                                <li><a href="comming-soon.html">comming soon</a></li>
                                <li><a href="single-product.html">single product</a></li>
                                <li><a href="cart.html">cart page</a></li>
                                <li><a href="checkout.html">checkout page</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="shop.html"> Shop</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- end main menu area -->
            <div class="col-md-4 col-12">
                <div class="logo">
                    <a href="/">
                        <img src="/web/images/logo/logopng.png" alt="">
                    </a>
                </div>
            </div>
            <!-- end logo area -->
            <div class="col-xl-3 col-md-4 col-6 col-12">
                <div class="serar-cart-icon">
                    <ul>
                        <style>

                            .serar-cart-icon button:after {
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 100%;
                                height: 0;
                                border-radius: 0 0 999px 999px;
                                background: #f14091;
                                z-index: -1;
                                content: "";
                                -webkit-transition: all 0.24s ease-in-out;
                                transition: all 0.24s ease-in-out;
                                opacity: 0;
                                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
                                filter: alpha(opacity=0);
                                visibility: hidden;
                            }
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
                        </style>
                        <!--<li><a href="/site/login"><i class="fa fa-book"></i></a></li>-->
                        <?php
                        echo '<li><a href="#" class="search-opt" title="Поиск"><i class="fa fa-search"></i></a></li>';
                        if (Yii::$app->user->isGuest) {


                            echo  '<li><a href="/site/signup" title="Регистрация"><i class="fa fa-id-card" aria-hidden="true"></i></a></li>
                                    <li><a href="/site/login" title="Вход"><i class="fa fa-sign-in" aria-hidden="true"></i></a></li>';

                        }else {
                            echo ' <li><a href="/admin" title="Админка"><i class="fa fa-user-circle" aria-hidden="true"></i></a></li>';
                            echo '<!--<li><a href="/site/logout" title="Logout"><i class="fa fa-sign-out" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="Search"><i class="fa fa-search"></i></a></li>-->
                                    <li><a href="#" class="cart-open" title="Корзина"><i class="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                   ';
                            echo '<li><a href="#" title="Выход">'
                                . Html::beginForm(['/site/logout'], 'post')
                                . '<button><i class="fa fa-sign-out" aria-hidden="true"></i></button>'
                                . Html::endForm()
                                . '</a></li>';

                        }

                        ?>

                    </ul>
                    <div class="shopping-cart">
                        <h4>ITEM IN MY CART</h4>
                        <ul>
                            <li class="sing-cart-list">
                                <div class="cart-img"><img src="/web/images/product/cartl1.jpg" alt="" class="img-thumbnail"></div>
                                <!-- end cart img -->
                                <div class="cart-text">
                                    <p>
                                        <span class="d-block">Massage oil</span>
                                        <span class="d-block"><strong>$150 x 1</strong></span>
                                        <span> <i class="fa fa-star"></i></span>
                                        <span> <i class="fa fa-star"></i></span>
                                        <span> <i class="fa fa-star"></i></span>
                                        <span> <i class="fa fa-star"></i></span>
                                        <span class="cg"> <i class="fa fa-star"></i></span>
                                    </p>


                                </div>
                                <!-- end cart text -->
                                <div class="cart-remove">
                                        <span>
                                        <i class="fa fa-close"></i>
                                    </span>
                                </div>
                                <!-- end remove -->
                            </li>
                            <!-- end single cart list -->
                            <li class="sing-cart-list">
                                <div class="cart-img"><img src="/web/images/product/cartl2.jpg" alt="" class="img-thumbnail"></div>
                                <!-- end cart img -->
                                <div class="cart-text">
                                    <p>
                                        <span class="d-block">Shampoo plus </span>
                                        <span class="d-block"><strong>$150 x 1</strong></span>
                                        <span> <i class="fa fa-star"></i></span>
                                        <span> <i class="fa fa-star"></i></span>
                                        <span> <i class="fa fa-star"></i></span>
                                        <span> <i class="fa fa-star"></i></span>
                                        <span class="cg"> <i class="fa fa-star"></i></span>
                                    </p>

                                </div>
                                <!-- end cart text -->
                                <div class="cart-remove">
                                        <span>
                                        <i class="fa fa-close"></i>
                                    </span>
                                </div>
                                <!-- end remove -->
                            </li>
                            <!-- end single cart list -->
                        </ul>
                        <div class="cart-footer">
                            <div class="Cfooter-top"> <span>total</span> <span>$160</span></div>
                            <div class="Cfooter-bottom"> <a href="cart.html" class="btn-mr xsl pill th-secondary">VIEW CART</a> <a href="checkout.html" class="btn-mr xsl pill th-primary">CHECKOUT</a></div>
                        </div>
                    </div>
                    <!-- end shopping cart -->
                </div>
                <!-- end cart icon -->

            </div>
            <!-- end sear and cart area -->
        </div>
    </div>
</header>
<!--
================================
Header Area End
=================================
 -->

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
            <div class="col-lg-6 col-lg-push-3 col-md-8 col-md-push-3">
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





<?= $content ?>



<!--
================================
Footer Area Start
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
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Меню</a></li>
                            <li><a href="#">Бронирование</a></li>
                            <li><a href="#">Советы</a></li>
                            <li><a href="#">Блог</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </div>
                </div>
                <!-- end single footer -->
                <div class="col-xl-6 col-md-5 col-sm-9">
                    <div class="single-footer">
                        <h3 class="footer-title es-1">Подписка на новости</h3>
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
                <!-- end single footer -->
                <div class="col-md-4 col-sm-12">
                    <div class="single-footer">
                        <h3 class="footer-title">Наша Галерея</h3>
                        <ul class="footer-gallery">
                            <li class="single-gallery">
                                <img src="/images/footer-gallery/gl-1.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>
                            <!-- end footer gallery -->
                            <li class="single-gallery">
                                <img src="/images/footer-gallery/gl-2.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>
                            <!-- end footer gallery -->
                            <li class="single-gallery">
                                <img src="/images/footer-gallery/gl-3.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>
                            <!-- end footer gallery -->
                            <li class="single-gallery">
                                <img src="/images/footer-gallery/gl-4.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>
                            <!-- end footer gallery -->
                            <li class="single-gallery">
                                <img src="/images/footer-gallery/gl-5.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>
                            <!-- end footer gallery -->
                            <li class="single-gallery">
                                <img src="/images/footer-gallery/gl-6.jpg" alt="">
                                <a href="#"> <i class="fa fa-link"></i></a>
                            </li>
                            <!-- end footer gallery -->
                        </ul>
                    </div>
                </div>
                <!-- end single footer -->
            </div>
        </div>
    </div>
    <!-- end footer top -->
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="footer-copyright">
                        <p>2018 &copy; <a href="#">SPA & BEAUTY</a>, All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end footer bottom -->
</footer>

<!--
================================
Footer Area End
=================================
-->

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>

