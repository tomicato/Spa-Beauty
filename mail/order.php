<?php
use yii\helpers\Html;
use yii\helpers\Url;
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>
<body>
    <table id='adap-table' style="width: 800px;border:1px solid #cecece;border-collapse: collapse;" class="table table-bordered table-striped">
        <thead style="background: #ff6ab7;color:#fff;">
        <tr>
            <th>Продукт</th>
            <th>Цена</th>
            <th>Кол-во</th>
            <th style="width: 90px;">Сумма</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach($session['cart'] as $key => $val):?>
        <tr>
            <td data-label="Продукт" class="active" style="text-align: center;border: 1px solid #cecece;">
                <h5>
                    <a href="<?= Url::to('/shop/single-product/'.$val['id'],true)?>"><?= $val['name']?></a>
                </h5>
            </td>
            <td data-label="Цена" style="text-align: center;border: 1px solid #cecece;">₽ <?= $val['price']?></td>
            <td data-label="Кол-во" style="text-align: center;border: 1px solid #cecece;"><?= $val['qty']?></td>
            <td data-label="Сумма" style="text-align: center;border: 1px solid #cecece;">₽ <?= $val['price'] * $val['qty'] ?></td>
        </tr>
        <?php endforeach; ?>
        </tbody>

    </table>
    <table id='adap-table' style="width: 800px;border:1px solid #cecece;border-collapse: collapse;" class="table table-bordered table-striped">
        <thead style="background: #ff6ab7;color:#fff;">
        <tr>
          <th>Количество всего ( шт. )</th>
          <th>Итого ( ₽ )</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td data-label="Количество всего ( шт. )" style="text-align: center;font-weight: 600;font-size: 22px;font-family: 'Poiret One';color: forestgreen;"><?= $session['cart.qty']?></td>
            <td data-label="Итого ( ₽ )" style="text-align: center;font-weight: 600;font-size: 22px;font-family: 'Poiret One';color: forestgreen;"><?= $session['cart.sum']?></td>
        </tr>
        </tbody>
    </table>
</body>
</html>
