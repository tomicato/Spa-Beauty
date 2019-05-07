<br><br>
<center><h3><span style="color: #FF8800" class="glyphicon glyphicon-alert" aria-hidden="true"></span>&nbsp;&nbsp;
        Проверьте корректность заполнных данных</h3></center><br>
<form method="post" action="https://money.yandex.ru/quickpay/confirm.xml" id="chout_form">
    <div class="container">
        <input type="hidden" name="receiver" value="410017062691456">
        <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="sum">Сумма к оплате: </label>
            <input type="text" name="sum" value="<?= $o_sum ?>" class="form-control" readonly style="height: 42px;">&nbsp;
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="label">№ Заказа: </label>
            <input type="text" name="label" value="<?= $o_id ?>" class="form-control" readonly style="height: 42px;">&nbsp;
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="targets">Назначение платежа: </label>
            <input type="text" name="targets" value="Оплата товаров Beauty & SPA Tomsk" class="form-control" readonly
                   style="height: 42px;">&nbsp;
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="targets">Оплата заказа: </label>
            <input type="submit" value="Оплатить" class="btn btn-outline-primary btn-sm btn-block">
        </div>
        <input type="hidden" name="quickpay-form" value="shop">
        <input type="hidden" name="successURL" value="http://tomsk-life.pro/cart/success">
    </div>
    <br>
    <div class="container" style="text-align: center">
        <div class="col-lg-4 col-md-4 col-sm-12">
            <label><input type="radio" name="paymentType" value="PC"> Яндекс.Деньгами</label>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <label><input type="radio" name="paymentType" value="AC"> Банковской картой</label>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <label><input type="radio" name="paymentType" value="MC"> С баланса мобильного</label>
        </div>
    </div>
</form>
<br>