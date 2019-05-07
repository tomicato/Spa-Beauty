<?php
use yii\helpers\Html;
use yii\helpers\Url;
?>

<script src="/js/multizoom.js"></script>
<script type="text/javascript">

    jQuery(document).ready(function($){

        //zoom_single
        //var zoom_img = document.querySelector('#image1').getAttribute("src").substr(16);
var zoom_img = document.querySelector('#image1').getAttribute("src");
        //console.log(zoom_img);

        $('#image1').addimagezoom({
             zoomrange: [2, 4],
            magnifiersize: [500,420],
            magnifierpos: 'left',
            cursorshade: true,
            largeimage: zoom_img,
        });

    });
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


<!--
================================
Страница одного товара
=================================
-->


<div class="blog-single--page sing__pp">
    <div class="container sp_add_to_basket">
        <div class="row">

            <?php if(!empty($prod_single)):?>
            <div class="col-lg-6">
                <div class="single__product__images text-center zoom">
                    <img src="<?= $prod_single->img ?>" alt="<?= $prod_single->prod_name?>" id="image1">
                </div>
            </div>

            <div class="col-lg-6 align-self-center">
                <div class="sing__prodcot_biO">
                    <h3><?= $prod_single->prod_name ?></h3>
                    <h4><span class="cus-badge">5<i class="fa fa-star" aria-hidden="true"></i></span> ( 03 Reviews )</h4>
                    <h5><del>₽ 2000</del><?=$prod_single->price?> ₽</h5>
                    <p><?= $prod_single->prod_caption ?></p>
                    <p>
                        <input type="number" min="0" max="1000000000" step="1" value="1" id="qty">
                        <a href="<?= Url::to(['cart/add', 'id' => $prod_single->prod_id])?>" data-id="<?= $prod_single->prod_id?>" class="btn-mr th-primary pill basket" >Добавить</a>
                        <a href="/cart-view" class="btn-mr th-primary pill">перейти в корзину</a>
                    </p>
                </div>
            </div>
            <?php endif; ?>

        </div>
    </div>
</div>

<!--
================================
Страница одного товара
=================================
-->



<!--
================================
Страница одного товара - описание
=================================
-->
<div class="product__description">
    <div class="container">
        <div class="row">
            <?php if(!empty($prod_single)):?>
            <div class="col-lg-12">
                <ul class="nav d_tabP" id="productTbas" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="ptab1-tab" data-toggle="tab" href="#ptab1" role="tab" aria-controls="ptab1" aria-selected="true">Описание </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="ptab2-tab" data-toggle="tab" href="#ptab2" role="tab" aria-controls="ptab2" aria-selected="false">Отзывы (03)</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="ptab1" role="tabpanel" aria-labelledby="ptab1-tab">
                        <div class="des_cription">
                            <p><?= $prod_single->full_description?></p>
                            <ul>
                                <li>Duis vitae orci in urna commodo mollis.</li>
                                <li>Ut sit amet sem ut dui bibendum blandit non finibus enim.</li>
                                <li>Cras convallis tellus ultrices, dictum nisl in, suscipit neque.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="ptab2" role="tabpanel" aria-labelledby="ptab2-tab">
                        <div class="single-rivew-item">
                            <h4>mahedi amin</h4>
                            <h5> <span>01/07/2017</span></h5>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio.</p>
                        </div>
                        <div class="single-rivew-item">
                            <h4>mahedi amin</h4>
                            <h5> <span>01/07/2017</span></h5>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio.</p>
                        </div>
                    </div>

                </div>
            </div>
            <?php endif;?>
        </div>
    </div>
</div>
<!--
================================
Страница одного товара - описание
================================
-->

<!--
==================================
Сопутствующие товары
==================================
-->
<div class="ralated__product">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3>Похожие товары</h3>
                <div class="rlt_product_active owl-carousel">
                    <?php foreach($prod_related as $prod):?>
                    <div class="single__shopPage_shp">
                        <div class="shop-thubPage">
                            <img src="<?= $prod['img']?>" id="zoom_single" alt="<?= $prod['prod_name']?>">
                            <div class="shp_hover">
                                <ul>
                                    <li>
                                        <?= Html::a('<i class="fa fa-eye" aria-hidden="true"></i>', Url::to(['/rose/single-product/', 'id' => $prod['prod_id']]), ['class' => 'tooltipped chnage-clor', 'data-toggle' => 'tooltip', 'title' => 'Детальный просмотр', 'data-id' => $prod['prod_name'], 'data-placement' => 'top'])?>
                                    </li>
                                    <li>
                                        <?= Html::a('<i class="fa fa-shopping-basket"></i>', Url::to(['cart/add', 'id' => $prod['prod_id']]), ['class' => 'tooltipped chnage-clor basket basket-rel', 'data-toggle' => 'tooltip', 'title' => 'В корзину', 'data-id' => $prod['prod_id'], 'data-placement' => 'top'])?>
                                    </li>
                                    <li>
                                        <?= Html::a('<i class="fa fa-heart"></i>', '#', ['class' => 'tooltipped chnage-clor', 'data-toggle' => 'tooltip', 'title' => 'В избранное', 'data-id' => $prod['prod_name'], 'data-placement' => 'top'])?>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="shop__textPage">
                            <h4> <?= Html::a($prod['prod_name'], ['/rose/single-product/', 'id' => $prod['prod_id']])?></h4>
                            <h5>₽ <?= $prod['price']?></h5>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</div>
<!--
=========================
Сопутствующие товары
=========================
-->



