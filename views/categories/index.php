<?php


use app\components\MenuWidget;
use yii\helpers\Url;
use yii\helpers\Html;
use yii\widgets\LinkPager;
use yii\widgets\ListView;
use yii\widgets\Pjax;
?>
<style>
    .hov.list-group-item a.active{
		color: #ff73c0;
	}
    .summary{display: none;}
    /*.fil-search-s{display: none};*/
    .block-none{display: none;}
    .pagination{float: left!important;}
</style>
<!--
================================
shop page start
=================================
-->
<div class="mainShops">
	<div class="container">

		<?php Pjax::begin(); ?>

			<div class="col-lg-3">
				<div class="sibeader--layout">
					<!-- <div class="single--sidaber">
						 <h3 class="sidebar--titile">Поиск</h3>
						 <input type="text" class="form-control" placeholder="Ключевое слово..">
					 </div>-->

                    <!--Widget Категории-->
					<!--<div class="single--sidaber">
						<h3 class="sidebar--titile">Категории продуктов</h3>
						<ul class="list-group">
							<?/*= MenuWidget::widget()*/?>
						</ul>

					</div>-->



					<!--Фильтрация по цене ползунок-->
					<!--<p>
						<label for="amount">Макимальная стоимость: &nbsp;₽ </label>
					</p>
					<div id="slider-range-min"></div><br/>
					<label for="price1">
						<input type="text" id="price1" name="price1">
					</label>-->
					<!--/Фильтрация по цене-->

					<div class="single--sidaber fil-search">
						<h3 class="sidebar--titile">Фильты поиска</h3>
						<?php echo $this->render('_search', ['model' => $searchModel]); ?>
					</div>



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

            <!--Основной блок с выбранной категорией-->
			<div class="col-lg-9 col-md-9 col-sm-12 best">

                    <!--Контент категории по которой перешли-->
                    <div class="fil-search-content">
                      <?php /*if(!empty($cat_prod)):*/?>

                            <?php foreach($max as $maximum):?>
                                <?= "<div class='max' style='display: none;'>". $maximum['price']. "</div>"; ?>
                            <?php endforeach;?>

                            <?php foreach ($cat_prod as $key => $item):?>
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

                        /*else:
                            echo '<h2>В категории товаров нет.</h2>';

                        endif; */?>

                        </div>
                <div style="clear: both;"></div>
                    <!--Pjax Widget ListView-->
                    <div class="fil-search-s">

                    <?= $dataProvider->sort->link('price',['class' => 'btn btn-outline-primary']) ?>
                    <?= $dataProvider->sort->link('sale',['class' => 'btn btn-outline-success']) ?>
                    <?= $dataProvider->sort->link('hit',['class' => 'btn btn-outline-info']) ?>
                    <?= $dataProvider->sort->link('new',['class' => 'btn btn-outline-dark']) ?>
                    <?php try {
                        echo ListView::widget( [
                            'dataProvider' => $dataProvider,
                            'itemOptions'  => [ 'class' => 'item' ],
                            'itemView'     => function ( $model, $key, $index, $widget ) {
                                return
                                    '<div class="col-lg-4 col-md-6 col-12 divs" id="products">' .
                                    '<div class="single__shopPage_shp">
                                        <div class="shop-thubPage">'.
                                    "<img src='/images/product/$model->img' class='img-responsive' alt='$model->prod_name' />
                                    <div class='shp_hover'>
                                                <ul>
                                                    <li>
                                                       <a href='/shop/single-product/$model->prod_id' class='tooltipped chnage-clor' data-toggle='tooltip' data-id='$model->prod_name'><i class='fa fa-eye' aria-hidden='true' title='Детальный просмотр' data-placement='top'></i></a>
                                                    </li>
                                                    <li>
                                                        <a href='#!' class='tooltipped chnage-clor bask' data-toggle='tooltip'  data-id='$model->prod_id' data-pjax='0'><i class='fa fa-shopping-basket' aria-hidden='true' title='В корзину' data-placement='top'></i></a>
                                                  
                                                    </li>
                                                    <li>
                                                       <a href='#!' class='tooltipped chnage-clor' data-toggle='tooltip' data-id='$model->prod_name' ><i class='fa fa-heart' aria-hidden='true' title='В избранное' data-placement='top'></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                    <center><h4 style='font-weight: bold'>$model->prod_name </h4>
                                    <h4><span class='price'>".number_format($model->price,0,'',' ') ."</span> ₽ </h4>
                                    </center>".
                                    '</div></div></div>';
                            },

                        ] );
                    } catch ( Exception $e ) {
                    } ?>
                    </div>
                        <?php Pjax::end(); ?>



            </div>

    <!--Пагинация-->
	<?php
	// отображаем ссылки на страницы
	try {
		echo '' . LinkPager::widget([
				'pagination' => $pages,
				//'data-pjax' => '0',
			]);
	} catch (Exception $e) {
	}

	?>
	</div>

</div>
<script>
    $(document).ready(function () {

        var el_y = document.querySelector('.fil-search-s');
        var el_n = document.querySelector('.fil-search-content');
        el_y.classList.add('block-none');

        $(document).on('click', '#sch2', function (e) {
            el_n.classList.add('block-none');
            var pag = document.querySelector('.pagination');
                pag.classList.add('block-none');
        });

        $(document).on('click', '.pagination', function () {
            el_y.classList.add('block-none');
        });

        $(document).on('click', '#reset', function () {

            el_n.classList.remove('block-none');
            el_y.classList.add('block-none');
            document.location.href = 'http://auth/shop/categories/' + '<?= $id?>';
            el_y.classList.add('block-none');
        });

        /*Добавление по клику товара в корзину*/
        $(document).on('click', '.bask', function(e) {
            e.preventDefault();


            var id = $(this).data('id'),
                qty = $('#qty').val();


            if($(this).hasClass('basket-rel')){
                $.ajax({
                    url: '/cart/add',
                    type: 'GET',
                    data: {id: id, qty: 1},
                    success: function (res) {
                        if (!res) alert('Ошибка!');
                        showCart(res);
                    },
                    error: function () {
                        alert('Error!');
                    }
                });
            }else {

                $.ajax({
                    url: '/cart/add',
                    type: 'GET',
                    data: {id: id, qty: qty},
                    success: function (res) {
                        if (!res) alert('Ошибка!');
                        showCart(res);
                    },
                    error: function () {
                        alert('Error!');
                    }
                });
            }
        });
    });
</script>
<!--
================================
shop page end
=================================
-->

