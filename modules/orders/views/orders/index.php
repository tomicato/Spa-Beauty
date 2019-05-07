<?php

use yii\helpers\Html;
use yii\helpers\Url;
use app\models\User;
$this->title = 'Заказы суммарно';
//$this->params['breadcrumbs'][] = $this->title;
?>

<style>
    table thead th{
        text-align: center;
    }
    table tbody td{
        text-align: center;
    }
    button.btn.btn-outline-primary {
        background-color: transparent;
        border-color: #e52793;
        color: #e52793;
        padding: 10px 20px;
        border-radius: 0;
    }
    button.btn.btn-outline-primary:hover {
        color: #fff;
        background-color: #e52793;
        border-color: #e52793;
        padding: 10px 20px;

    }
</style>
<div class="orders-cart-index container table-responsive">

    <br><h1><?= Html::encode('Заказы суммарно') ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>
<?php
/*    if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager')
    echo '<p>'. Html::a('Добавить заказ', ['create'], ['class' => 'btn btn-success']).'</p>';
*/?>
    <style>
        #sort thead td{
            /*text-align: -webkit-center;
            text-align: center;*/
        }
        thead.beige:nth-child(even) > tr{
            background-color: beige;
        }
    </style>
    <table class="table table-striped" id="sort" >
        <thead style="background-color:#e52793a6; color:#ffffff;">
        <tr>
            <th style="text-align: center;">ID</th>
            <th  style="text-align: center;">Создано</th>
            <th style="text-align: center;">Username</th>
            <th style="text-align: center;">Кол-во</th>
            <th style="text-align: center;">Сумма</th>
            <th style="text-align: center;">Оплачено</th>
            <th style="text-align: center;">Имя</th>
            <th style="text-align: center;">E-mail</th>
            <th style="text-align: center;">Телефон</th>
            <th style="text-align: center;">Адрес</th>
            <th style="text-align: center;">Инструменты</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($model as $key):?>

        <thead class="beige" id='<?=$key['id']?>'>

        <tr>
            <td><?= $key['id']?></td>
            <td><?= Yii::$app->formatter->asDate($key['created_at'], 'long');?></td>
            <td><?php $u_name = User::findOne($key['user_id']); echo $u_name->username; ?></td>
            <td><?= $key['qty']?></td>
            <td><?= number_format($key['sum'],0,'',' ');?> ₽</td>
            <td><?php if($key['status'] == 1){ echo "Да";}else{ echo"Ждёт оплаты";} ?></td>
            <td><?= $key['name']?></td>
            <td><?= $key['email']?></td>
            <td><?= $key['phone']?></td>
            <td><?= $key['address']?></td>

            <td style="text-align: center;">&nbsp;
                <div class="btn-group">
                <?php /*if (Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager') {
                   echo '<a href="/orders/orders/update?id='.$key['id'].'" title="Редактировать" aria-label="Редактировать" data-pjax="0">
                        <span class="glyphicon glyphicon-pencil"></span>
                    </a>&nbsp
                    <a href="/orders/orders/view?id='.$key['id'].'" title="Просмотр" aria-label="Просмотр" data-pjax="0">
                        <span class="glyphicon glyphicon-eye-open"></span>
                    </a>&nbsp;&nbsp;
                    ';
                 }*/?>

                    <a href="/orders/orders/delete?id=<?=$key['id'] ?>" title="Удалить" aria-label="Удалить" data-pjax="0">
                        <?= Html::a('<span class="glyphicon glyphicon-trash"></span>', ['delete', 'id' => $key['id']], [
                            'data' => ['confirm' => 'Вы уверены, что желаете удалить блок?','method' => 'post']]) ?>
                    </a>
                </div>
            </td>
        </tr>
        <?php endforeach;?>
        </tbody>
    </table><br>

        <a href="<?= Url::to('/admin/detail', true)?>">
            <?= Html::submitButton('Детально',['class' => 'btn btn-outline-primary'])?>
        </a>


</div><br>
