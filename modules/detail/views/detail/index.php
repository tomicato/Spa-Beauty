<?php
use yii\helpers\Html;
use yii\widgets\LinkPager;
$this->title = 'Заказы детально';
?>

<style>
    table thead th{
        text-align: center;
    }
    table thead td{
        text-align: center;
    }
    table tbody td{
        text-align: center;
    }

    .table>thead>tr>td:nth-child(2){
        padding: 11px;
        vertical-align: middle;
        width: 100px;
    }
    a.btn.btn-outline-primary {
        background-color: transparent;
        border-color: #e52793;
        color: #e52793;
        border-radius: 0;
    }
    a.btn.btn-outline-primary:hover {
        color: #fff;
        background-color: #e52793;
        border-color: #e52793;
    }
     .table>thead>tr>td{
         border-bottom: 1px solid #776d6d47;
        padding: 11px;
        vertical-align: middle;
    }
    thead.beige:nth-child(even) > tr{
        background-color: beige;
    }
</style>
<div class="orders-items-index container table-responsive">
    <br> <h1><?= Html::encode('Заказы детально ') ?></h1><br>
    <table class="table table-striped" id="sort" >
        <thead style="background-color:#e52793a6; color:#ffffff;">
        <tr>
            <th style="text-align: center;">№ Заказа</th>
            <th style="text-align: center;">Фото</th>
            <th  style="text-align: center;">ID Продукта</th>
            <th style="text-align: center;">Наименование</th>
            <th style="text-align: center;">Цена</th>
            <th style="text-align: center;">Кол-во</th>
            <th style="text-align: center;">Сумма</th>
        </tr>
        </thead>
        <tbody>
        <?php  //debug($items_all);?>
        <?php if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager'){?>

            <?php if(!empty($items_all)): foreach ($items_all as $key):?>
                <thead class="beige" id='<?=$key['id']?>'>
                <tr>
                    <td><?= $key['orders_cart_id']?></td>
                    <td>
                        <a href="/shop/single-product/<?= $key['products']['prod_id']?>">
                            <img src="<?= $key['products']['img']?>" alt="<?= $key['name']?>" width="90" height="110" class="img-responsive">
                        </a>
                    </td>
                    <td><?= $key['products_id']?></td>
                    <td>
                        <a href="/shop/single-product/<?= $key['products']['prod_id']?>">
                        <?= $key['name']?>
                        </a>
                    </td>
                    <td><?= number_format($key['price'],0,'',' ');?> ₽ </td>
                    <td><?= $key['qty_items']?></td>
                    <td><?= number_format($key['sum_items'],0,'',' ');?> ₽ </td>
                </tr>
                </thead>
            <?php endforeach; else: echo '<center><h2>У Вас пока нет заказов</h2></center><br>'; endif; ?>
        <?php }else{?><?php if(!empty($items_order)): foreach ($items_order as $key): ?>
                <thead class="beige" id='<?=$key['id']?>'>
                <tr>
                    <td><?= $key['orders_cart_id']?></td>
                    <td>
                        <a href="/shop/single-product/<?= $key->products['prod_id']?>">
                        <img src="<?= $key->products['img']?>" alt="<?= $key['name']?>" width="90" height="110" class="img-responsive">
                        </a>
                    </td>
                    <td><?= $key['products_id']?></td>
                    <td>
                        <a href="/shop/single-product/<?= $key['products']['prod_id']?>">
                        <?= $key['name']?>
                        </a>
                    </td>
                    <td><?= number_format($key['price'],0,'',' ');?> ₽ </td>
                    <td><?= $key['qty_items']?></td>
                    <td><?= number_format($key['sum_items'],0,'',' ');?> ₽ </td>
                </tr>
                </thead>
        <?php endforeach; else: echo '<center><h2>У Вас пока нет заказов</h2></center><br>'; endif; ?><?php }?>
        </tbody>
    </table><br>
    <?= Html::a('НАЗАД', ['/admin/orders'], ['class' => 'btn btn-outline-primary']); ?>
    <br> <br>
    <?php
    try {
        echo LinkPager::widget([
            'pagination' => $pages,
        ]);
    } catch (Exception $e) {
    }
    ?><br>
</div>
