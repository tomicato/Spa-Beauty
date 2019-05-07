<?php

use yii\helpers\Html;
use yii\widgets\ListView;
use yii\widgets\Pjax;
use yii\helpers\Url;

$this->title = '';
//$this->params['breadcrumbs'][] = $this->title;
?>


<div class="products-index container" style="padding: 50px 0;">
    <p><?/*= Html::a('Create Products', ['create'], ['class' => 'btn btn-success']) */?></p>


    <?php Pjax::begin(); ?>
        <div class="col-lg-3 col-md-3 col-sm-12">
            <div class="single--sidaber">
                <h3 class="sidebar--titile">Поиск</h3>
                <?php echo $this->render('_search', ['model' => $searchModel]); ?>
            </div>


        </div>
        <div class="col-lg-9 col-md-9 col-sm-12 best">

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
            <?php Pjax::end(); ?>
        </div>

   <?php /*foreach($prod as $key => $val):*/?>
	    <?php ?>
    <?php /*endforeach;*/?>
</div>

<script>
$(document).ready(function () {
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