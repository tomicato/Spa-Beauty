<?php


use app\components\MenuWidget;
use yii\helpers\Url;
use yii\helpers\Html;
use yii\widgets\LinkPager;
?>
<style>

    .hov.list-group-item a.active{
        color: #ff73c0;
    }
    .text-center-nothing{
        text-align: center;
        font-size: 24px;
        text-transform: capitalize;
        border-radius: 0;
        padding: 8px 30px;
        font-weight: 400;
        /*color: #e52793;*/
        background-color: transparent;
        border: 1px solid #e52793;
    }
</style>
<!--
================================
shop page start
=================================
-->
<div class="mainShops">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="sibeader--layout">
                 <!--   <div class="single--sidaber">
                        <h3 class="sidebar--titile">Поиск</h3>
                        <input type="text" class="form-control" placeholder="Ключевое слово..">
                    </div>-->

                    <div class="single--sidaber">
                        <h3 class="sidebar--titile">Категории продуктов</h3>
                        <ul class="list-group">
                            <?= MenuWidget::widget()?>
                        </ul>

                    </div>



                    <!--Фильтрация по цене-->
                    <p>
                        <label for="amount">Макимальная стоимость: &nbsp;₽ </label>
                    </p>
                    <div id="slider-range-min"></div><br/>
                    <label for="price1">
                        <input type="text" id="price1" name="price1">
                    </label>
                    <!--/Фильтрация по цене-->





                    <div class="single--sidaber">
                        <h3 class="sidebar--titile">Высокий рейтинг</h3>

                        <div class="mini-recent-post">
                            <div class="mini-post-thumb">
                                <img src="/images/blog/mp1.jpg" class="img-responsive" alt="">
                            </div>

                            <div class="mini-recent--post--text">
                                <h4><a href="#">Перманентный макияж</a></h4>
                                <p>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                </p>
                                <span><del>₽ 300 </del> 200</span>
                            </div>

                        </div>

                        <div class="mini-recent-post">
                            <div class="mini-post-thumb">
                                <img src="/images/blog/mp2.jpg" class="img-responsive" alt="">
                            </div>

                            <div class="mini-recent--post--text">
                                <h4><a href="#">Приятное лицо</a></h4>
                                <p>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                </p>
                                <span><del>₽ 300 </del> 200</span>
                            </div>

                        </div>

                        <div class="mini-recent-post">
                            <div class="mini-post-thumb">
                                <img src="/images/blog/mp3.jpg" class="img-responsive" alt="">
                            </div>

                            <div class="mini-recent--post--text">
                                <h4><a href="#">Бодрое тело</a></h4>
                                <p>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                    <span class="star"><i class="fa fa-star" aria-hidden="true"></i></span>
                                </p>
                                <span><del>₽ 300 </del> 200</span>
                            </div>

                        </div>

                    </div>

                    <div class="single--sidaber">
                        <div class="add__img">
                            <img src="/images/product/add1.jpg" class="img-responsive" alt="">
                            <div class="add_hover">
                                <a href="#">Больше</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div class="col-lg-9">
                <div class="row">


                    <?php if(!empty($q_prod)):?>

                        <?php foreach($max as $maximum):?>
                            <?= "<div class='max' style='display: none;'>". $maximum['price']. "</div>"; ?>
                        <?php endforeach;?>
                        <?php foreach ($q_prod as $key => $item):?>
                            <div class="col-lg-4 col-md-6 col-12 divs"  id="products">
                                <div class="single__shopPage_shp">
                                    <div class="shop-thubPage">
                                        <img src="/images/product/<?= $item['img']?>" class="img-responsive" alt="">
                                        <div class="shp_hover">
                                            <ul>
                                                <li>
                                                    <?= Html::a('<i class="fa fa-eye" aria-hidden="true"></i>', Url::to(['/rose/single-product/', 'id' => $item['prod_id']]), ['class' => 'tooltipped chnage-clor', 'data-toggle' => 'tooltip', 'title' => 'Детальный просмотр', 'data-id' => $item['prod_name'], 'data-placement' => 'top'])?>
                                                </li>
                                                <li>
                                                    <?= Html::a('<i class="fa fa-shopping-basket"></i>', Url::to(['cart/add', 'id' => $item['prod_id']]), ['class' => 'tooltipped chnage-clor basket', 'data-toggle' => 'tooltip', 'title' => 'В корзину', 'data-id' => $item['prod_id'], 'data-placement' => 'top'])?>
                                                </li>
                                                <li>
                                                    <?= Html::a('<i class="fa fa-heart"></i>', '#', ['class' => 'tooltipped chnage-clor', 'data-toggle' => 'tooltip', 'title' => 'В избранное', 'data-id' => $item['prod_name'], 'data-placement' => 'top'])?>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div class="shop__textPage">
                                        <h4><a href="<?= Url::toRoute(['/rose/single-product', 'id' => $item['prod_id']])?>"><?= $item['prod_name']?></a></h4>
                                        <h5><span class="price"><?= $item['price']?> </span> ₽ </h5>
                                    </div>

                                </div>
                            </div>

                        <?php  endforeach;

                    else:
                        echo '<h2 class="text-center-nothing">По запросу <strong>'.$q.'</strong> ничего не найдено.</h2>';

                    endif; ?>


                </div>
                <?php
                // отображаем ссылки на страницы
                try {
                    echo LinkPager::widget([
                        'pagination' => $pages,
                    ]);
                } catch (Exception $e) {
                }
                ?>
            </div>

        </div>
    </div>
</div>

<!--
================================
shop page end
=================================
-->

