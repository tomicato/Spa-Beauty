<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 11.06.2018
 * Time: 23:29
 */
use yii\widgets\ActiveForm;
use yii\helpers\Html;
use yii\helpers\Url;
$this->title;
$this->params['breadcrumbs'][] = $this->title;

?>
<style>
    .cupn-margin  h3{
        font-weight: 700!important;
    }
    .cupn-margin  h4{
        font-weight: 700!important;
        color: #5d5d5d;

    }

</style>
<!--
================================
Страница выбранных товаров
=================================
-->
<?php if(empty($session['cart'])):?>
   <center><h3 style="margin-top: 200px">Ваша корзина пуста!</h3></center>
<?php endif;?>

<div class="cart-page-area">
    <div class="container"<?php /*if(empty($session['cart'])) echo 'style="display:none"'; */?>>
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive table-1">
                    <table class="table my-tab-1">
                        <thead>
                        <tr>
                            <th class="produt m-tb-1" colspan="3">Продукт</th>
                            <th class="price m-tb-1">Цена</th>
                            <th class="quantity m-tb-1">Количество</th>
                            <th class="total m-tb-1">Всего</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php if(!empty($session['cart'])):?>
                            <?php foreach($session['cart'] as $key => $val):?>
                            <tr>
                                <th class="icn">
                                    <div class="cart-remove2" data-id="<?= $val['id']?>">
                                        <span><i class="fa fa-close"></i></span>
                                    </div>
                                </th>
                                <th class="td-img">
                                    <a href="/shop/single-product/<?= $val['id']?>">
                                        <img src="<?= $val['img']?>" alt="<?= $val['name']?>" class="img-responsive">
                                    </a>
                                </th>
                                <th class="td-text">
                                    <h5><a href="/shop/single-product/<?=$val['id']?>"><?= $val['name']?></a> </h5>
                                    <?/*= Html::a($val['name'], ['/shop/single-product/', 'id' => $val['id']])*/?>
                                </th>
                                <th class="td-4">₽ <?= number_format($val['price'],0,'',' ');?></th>
                                <th class="td-5">
                                    <?= $val['qty']?><!--<input type="number" min="1" max="9" step="1" value="<?/*= $val['qty']*/?>">-->
                                </th>
                                <th class="td-6">₽ <?= number_format($val['price'] * $val['qty'],0,'',' ');?></th>
                            </tr>
                            <?php endforeach; ?>
                            <?php endif; ?>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>



        <div class="row">
            <div class="col-lg-6 col-md-5 col-12 cupn-margin">
<!--
===========================
Контактные данные
===========================
-->
            <!--    <?php /*if(Yii::$app->session->hasFlash('success')): */?>
                    <button type="button" class="btn btn-outline-success btn-lg btn-block btfl">
                        <?/*=Yii::$app->session->getFlash('success')*/?>
                    </button>
                <?php /*endif;*/?>
                <?php /*if(Yii::$app->session->hasFlash('error')):*/?>
                    <button type="button" class="btn btn-outline-danger btn-lg btn-block">
                        <?/*= Yii::$app->session->getFlash('error')*/?>
                    </button>
               --><?php /*endif;*/?>
                <?php if(Yii::$app->user->isGuest): ?>

                    <h3>Заполните форму с данными или </h3>
                    <h4><a href="http://auth/site/signup">Зарегистрируйтесь, пожалуйста здесь</a></h4>
                    <h4> ~ Регистрация поможет Вам следить за состоянием заказа, посмотреть истрию заказов, отменить заказ. ! ~ </h4>
                <?php else:?>
                <h3>Заполните форму с данными</h3>
                <h4> По желанию, Вы можете дополнить поля <span style="font-weight: 900; color: darkmagenta;">адрес, телефон и место доставки </span>и/или наш менеджер свяжется с Вами для уточнения деталей заказа.</h4>
                <?php endif; ?>

                <?php $form = ActiveForm::begin() ?>
                <?= $form->field($orders, 'name')?>

                <?php if(!Yii::$app->user->isGuest): ?>
                    <?= Html::input('hidden','email',Yii::$app->user->identity->email)?>
                <?php else:?>
                    <?= $form->field($orders, 'email')?>
                <?php endif; ?>

                <?= $form->field($orders, 'phone')?>
                <?= $form->field($orders, 'address')?>

                <a href="<?=Url::to(['/cart/yaform'])?>">
                <?= Html::submitButton('Заказать', ['class' => 'btn btn-outline-primary'])?>
                </a>

                <?php ActiveForm::end() ?>
<!--
===========================
Контактные данные
===========================
-->

            </div>
            <div class="col-lg-6 col-md-7 col-12">
                <h5 class="cart-h">&nbsp;&nbsp;Всего</h5>
                <div class="table-responsive table-2">
                    <table class="table my-tab-2">
                        <tbody>
                        <tr>
                            <th>Количество ( шт. ): </th>
                            <td class="cen-t2"><?= $session['cart.qty']?></td>
                        </tr>
                        <tr>
                            <th>Итого ( ₽ ): </th>
                            <td class="cen-t2"><?= number_format($session['cart.sum'],0,'',' ');?></td>
                        </tr>

                        </tbody>
                    </table>
                    <br><hr>


                        <div class="col-lg-6 col-md-5 col-12 cupn-margin">
                           <div class="cupn">
                                 <h5 class="cart-h">Купоны</h5>
                                 <input type="text" placeholder="Введите номер купона">
                             </div>
                             <a href="#!" class="btn btn-outline-primary">Применить</a>
                        </div>
                </div>


            </div>
        </div>
    </div>
</div>

<!--
===================================
Страница выбранных товаров (конец)
===================================
-->

