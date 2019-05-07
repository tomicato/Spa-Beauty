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
    label {
        display: block;
        cursor: pointer;
    }

    img {
        margin: 15px 0;
    }

    @media screen and (max-width: 768px) {
        .block_img {
            width: 100% !important;
        }
    }

    #checkbox-list label {
        line-height: 28px;
        font-size: 16px;
        color: #666;
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
    }

    .caret {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 1px;
        vertical-align: middle;
        border-top: 1px solid transparent;
        border-bottom: 5px solid #504b4b;
        margin-top: -6px;
        border-left: 5px solid transparent !important;
        border-right: 5px solid transparent;

    }

    .caret-sub {
        display: inline-block !important;
        width: 0 !important;
        height: 0 !important;
        margin-left: 1px !important;
        vertical-align: middle !important;
        border-top: 7px solid #504b4b !important;
        border-left: 1px solid transparent !important;
        border-width: 5px !important;
        border-bottom: 5px solid transparent !important;
        margin-top: 3px !important;
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
                   <!-- <div class="single--sidaber">
                        <h3 class="sidebar--titile">Поиск</h3>
                        <input type="text" class="form-control" placeholder="Ключевое слово..">
                    </div>-->

                    <div class="single--sidaber">
                        <h3 class="sidebar--titile">Категории продуктов</h3>
                        <ul class="list-group">
                            <?= MenuWidget::widget()?>
                        </ul>

                    </div><br><hr>
                    <input class="hidden" type="text" value="<?php $id = $_GET['id']; echo $id;?>" id="post_id">


                    <!--Фильтрация по цене-->
                    <br><p>
                        <label for="amount">Макимальная стоимость: &nbsp;₽ </label>
                    </p>
                    <div id="slider-range-min"></div><br/>
                    <label for="price1">
                        <input type="text" id="price1" name="price1">
                    </label><br><hr>
                    <!--/Фильтрация по цене-->

<!--================================================
=================================================-->

                    <!--Фильтрация по другим параметрам-->

                    <form id="filter">
                        <br>
                        <h2>Продукция</h2>
                        <div id="checkbox-list">
                            <div class="addresses">
                                <a href="#addresses" class="collapsed" data-toggle="collapse"><p><em>По адресу &nbsp;&nbsp;</em><span
                                                class="caret"></span></p></a>
                                <div id="addresses" class="collapse show">
					                <?php foreach ($all as $key => $p): ?>
                                        <label>
							                <?php if(!empty($p->ad_address)): ?>
                                            <input type="checkbox" name="address" value="<?php echo $p->ad_address; ?>"
                                                   data-id="<?= $p->ad_address ?>">
							                <?= $p->ad_address ?>

                                            <span class="cnt"><?= '(' . $p->cnt . ')' ?> </span>
							                <?php endif;?>
                                        </label>
					                <?php endforeach; ?>
                                </div>
                                <br>
                            </div>
                            <div class="named">
                                <a href="#named" class="collapsed" data-toggle="collapse"><p><em>По названию &nbsp;&nbsp;</em><span
                                                class="caret"></span></p></a>
                                <div id="named" class="collapse show">
					                <?php foreach ($all2 as $key => $p): ?>
                                        <label>
							                <?php if(($p->n_id) != 0): ?>
                                                <input type="checkbox" name="names" value="<?= $p->n_id ?>" data-id="<?= $p->n_id ?>">
								                <?= $p->a_name ?>
                                                <span class="cnt"><?= '(' . $p->cnt . ')' ?> </span>
							                <?php endif; ?>
                                        </label>
					                <?php endforeach; ?>
                                </div>
                                <br>
                            </div>
                            <div class="madin">
                                <a href="#madein" class="collapsed" data-toggle="collapse"><p><em>По производителю
                                            &nbsp;&nbsp;</em><span class="caret"></span></p></a>
                                <div id="madein" class="collapse show">
					                <?php foreach ($all3 as $k => $p): ?>
                                        <label>
							                <?php if (!empty($p->fmadein)): ?>
                                                <input type="checkbox" name="fmadein" fmadein value="<?php echo $p->fmadein; ?>"
                                                       data-id="<?= $p->fmadein ?>">
								                <?= $p->fmadein ?>
                                                <span class="cnt"><?= '(' . $p->cnt . ')' ?> </span>
							                <?php endif; ?>
                                        </label>
					                <?php endforeach; ?>
                                </div>
                                <br>
                            </div>
			                <?= Html::button('Поиск',['type' => 'submit', 'value' => 'Отправить', 'class' => 'btn btn-outline-success'])?>
			                <?= Html::button('Сброс',['type' => 'reset', 'value' => 'Сбросить', 'class' => 'btn btn-outline-danger', 'id' => 'reset'])?><br><br>
                        </div>
                    </form><hr><br>

                    <!--/Фильтрация по другим параметрам-->

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

                    </div><br><hr><br>

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

            <!--Контент, полученный через Ajax -->
            <div class="col-lg-9 dubl" id="content-list">
                <div class="row">


                    <?php if(!empty($cat_prod)):?>

                            <?php foreach($max as $maximum):?>
                                <?= "<div class='max' style='display: none;'>". $maximum['price']. "</div>"; ?>
                            <?php endforeach;?>
                        <?php foreach ($cat_prod as $key => $item):?>
                            <div class="col-lg-4 col-md-6 col-12 divs"  id="products">
                                <div class="single__shopPage_shp">
                                    <div class="shop-thubPage">
                                        <img src="<?= $item['img']?>" class="img-responsive" alt="">
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
                        echo '<h2>В категории товаров нет.</h2>';

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


<!--
================================
js for this page filter
=================================
-->
<script>
    $(document).ready(function () {
            var pid = $('#post_id').val();
            //console.log(pid);

            /*Клик по названию фильтра*/
            $('.collapsed').on('click', function () {
                var o_sub = $(this).find('.caret');
                o_sub.toggleClass('caret-sub');
            });

            // Добавить - Удалить атрибут checked
            $('#checkbox-list').on('click', 'input', function (e) {

              //console.log(e.target.value);

            /*Отмечаем или удаляем атрибут checked*/
            if (e.target.hasAttribute('checked')) {
                e.target.removeAttribute('checked');
            } else {
                e.target.setAttribute('checked', 'checked');
            } // Finish else attr checked

            /*Кнопка сброса*/
            $('button[type="reset"]').on('click', function (ev) {
                if (e.target.hasAttribute('checked')) {
                    e.target.removeAttribute('checked');
                    location.reload();
                }
            });


            // Клик по кнопке поиска
            $('button[type="submit"]').on('click', function (event) {
                event.preventDefault();

            /*Удаляет элементы со снятым чекбоксом - сбрасывает все данные*/
            $('#content-list').each(function () {
                return $(this).empty();
            });

            var arr = $('#checkbox-list input[type="checkbox"]'); // Object (array of input)

                var true_arr = [];


            for (var i = 0; i < arr.length; i++) {
                if (arr[i].hasAttribute('checked')) {

                    true_arr.push(arr[i].value);
                }
            }



           //console.log(true_arr);

                /*Формируем Ajax запрос к БД*/
                $.ajax({
                    url: '/rose/category',
                    type: 'POST',
                    data: {val: true_arr, pid: pid},
                    success: function (res) {

                        /*При удачном получении ответа от сервера*/
                        var data = $.parseJSON(res);
                        console.log(data);
                        var check = '';


                        /*Проходимся по массиву и формируем код*/
                        for (var i in data) {

                            check += '<div class="col-lg-4 col-md-6 col-12 divs"  id="products">' +
                                '<div class="single__shopPage_shp">' +
                                '<div class="shop-thubPage">' +
                                '<img class="block_img img-responsive" src="' + data[i].img + '" title="' + data[i].prod_name + '">' +
                                '<div class="shp_hover">' +
                                ' <ul>'+
                                '<li><a href="/cart/add?id='+ data[i].prod_id +'" ' +
                                'class="tooltipped chnage-clor basket" data-toggle="tooltip" ' +
                                'title="В корзину" data-id="'+data[i].prod_id+'" data-placement="top">' +
                                '<i class="fa fa-shopping-basket"></i></a></li>'+
                                '</ul>' +
                                '</div>' +
                                '</div>' +
                                '<div class="shop__textPage"><h4><a href="/shop/single-product/'+ data[i].prod_id +'">'+ data[i].prod_name +'</a></h4>' +
                                '<h5><span class="price">' + data[i].price + '</span> ₽ </h5></div></div></div>';

                        }


                        /*Вставляем содержимое на страницу*/
                        $("#content-list").append('<div class="pro">' + check + '</div>');

                        /*Удаляем дублирующие элементы*/
                        var ar = document.getElementsByClassName('pro');

                        if (ar.length > 1) {
                            for (var i = 0; i < ar.length; i++) {
                                ar[i].remove();
                            }
                        }

                    },
                    error: function () {
                        //alert('Error!');
                    }
                }); // End of Ajax
            });  // End of ButtonSearch on Click
        });  // End of CheckBoxList Click

    }); // End DocumentReady
</script>
