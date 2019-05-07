<?php


use app\components\MenuWidget;
use yii\helpers\Url;
use yii\helpers\Html;
use yii\widgets\ListView;
use yii\widgets\Pjax;

?>
<style>
    .best h2 {
        font-weight: 900;
        text-transform: capitalize;
    }
</style>
<!--
================================
  Страница магазина
=================================
 -->
<div class="mainShops">
    <div class="container">
        <center><h2>Лучшие предложения 2018 года лето</h2></center>
        <br>


        <div class="row">
            <div class="col-lg-3">
                <div class="sibeader--layout">
                  <!--  <div class="single--sidaber">
                        <h3 class="sidebar--titile">Поиск</h3>
                        <input type="text" class="form-control" placeholder="Ключевое слово..">
                    </div>-->
                    <!-- end single sidebar -->
                    <div class="single--sidaber">
                        <h3 class="sidebar--titile">Категории продуктов</h3>
                        <ul class="list-group">
                            <?= MenuWidget::widget(['tpl' => 'menu']) ?>
                        </ul>

                    </div>

                    <div class="single--sidaber">
                        <h3 class="sidebar--titile">Высокий рейтинг</h3>

                        <?php foreach ($hits as $key => $item): ?>
                            <?php if ($key >= 3 && $key <= 5): ?>
                                <div class="mini-recent-post">
                                    <div class="mini-post-thumb">
                                        <a href="/shop/single-product/<?= $item['prod_id'] ?>">
                                            <?= Html::img("{$item['img']}", ['alt' => $item['prod_name'], 'class' => 'img-responsive']) ?>
                                        </a>
                                    </div>
                                    <div class="mini-recent--post--text">
                                        <h4>
                                            <a href="/shop/single-product/<?= $item['prod_id'] ?>"><?= $item['prod_name'] ?></a>
                                        </h4>
                                        <p>
                                            <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                            <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                            <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                            <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                            <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                        </p>
                                        <span><del>₽ 300 </del> <?= $item['price'] ?></span>
                                    </div>
                                </div>
                            <?php endif; ?>
                        <?php endforeach; ?>

                    </div>
                    <div class="single--sidaber">
                        <div class="add__img">
                            <img src="/images/product/add1.jpg" class="img-responsive" alt="">
                            <div class="add_hover">
                                <a href="/blog">Больше</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-lg-9 best">

                <div class="row">


                        <?php if (!empty($hits)): ?>

                        <?php foreach ($hits as $item): ?>
                            <div class="col-lg-4 col-md-6 col-12 divs" id="products">
                                <div class="single__shopPage_shp">
                                    <div class="shop-thubPage">
                                        <?= Html::img("{$item['img']}", ['alt' => $item['prod_name']]) ?>
                                        <div class="shp_hover">
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

                                    </div>

                                    <div class="shop__textPage">
                                        <h4>

                                            <?= Html::a($item['prod_name'], ['/rose/single-product/', 'id' => $item['prod_id']]) ?>
                                        </h4>
                                        <h5><span class="price"><?= number_format($item['price'],0,'',' ');?></span> ₽ </h5>
                                    </div>

                                </div>
                            </div>
                        <?php endforeach;
                    else:
                        echo '<h2>В категории "ХИТ ПРОДАЖ" товаров нет.</h2>';
                    endif; ?>



                </div>
            </div>

        </div>
    </div>
</div>



<!--
================================
 Страница магазина
=================================
-->

