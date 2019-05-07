<?php

use yii\helpers\Html;
use yii\helpers\Url;


$this->title = '';
//$this->params['breadcrumbs'][] = $this->title;
?>
<style>
    table thead td{
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

    thead.beige:nth-child(even) > tr{
        background-color: beige;
    }
</style>
<div class="order-modal-index container table-responsive">

    <h1><?= Html::encode('Редактирование услуг') ?></h1>
    <p><?= Html::a('Добавить заказ', ['create'], ['class' => 'btn btn-success']) ?></p><br>
    <table class="table table-striped" id="sort" >
        <thead style="background-color:#e52793a6; color:#ffffff;">
        <tr>
            <th style="text-align: center;">ID</th>
            <th  style="text-align: center;">Наименование услуги</th>
            <th  style="text-align: center;">Фото</th>
            <th style="text-align: center;">Дата записи</th>
            <th style="text-align: center;">Время записи</th>
            <th style="text-align: center;">Расписание</th>
            <th style="text-align: center;">Имя</th>
            <th style="text-align: center;">E-mail</th>
            <th style="text-align: center;">Телефон</th>
            <th style="text-align: center;">Инструменты</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($modal as $key):?>
        <?php if(!empty($key['img'])):?>
        <thead class="beige" id='<?=$key['id']?>'>
            <tr>
                <td><?= $key['id']?></td>
                <td><?= $key['title']?></td>
                <td>
                    <img src="/images/orders_modal/<?= $key['img']?>" alt="" class="img-responsive" width="100" height="100">
                </td>
                <td><?= Yii::$app->formatter->asDate($key['order_d'], 'long');?></td>
                <td><?= substr($key['order_t'],0,-3);?></td>
                <td><?= $key['schedule']?></td>
                <td><?= $key['name']?></td>
                <td><?= $key['email']?></td>
                <td><?= $key['phone']?></td>
                <td style="text-align: center;">&nbsp;
                    <div class="btn-group">
                        <?php
                        echo '
                            <a href="/order_modal/order-modal/update?id='.$key['id'].'" title="Редактировать" aria-label="Редактировать" data-pjax="0">
                                <span class="glyphicon glyphicon-pencil"></span>
                            </a>&nbsp
                            <a href="/order_modal/order-modal/view?id='.$key['id'].'" title="Просмотр" aria-label="Просмотр" data-pjax="0">
                                <span class="glyphicon glyphicon-eye-open"></span>
                            </a>&nbsp;&nbsp;
                           ';
                        ?>
                            <a href="/order_modal/order-modal/delete?id=<?=$key['id'] ?>" title="Удалить" aria-label="Удалить" data-pjax="0">
                            <?= Html::a('<span class="glyphicon glyphicon-trash"></span>', ['delete', 'id' => $key['id']], [
                            'data' => ['confirm' => 'Вы уверены, что желаете удалить блок?','method' => 'post']]) ?>
                        </a>
                    </div>
                </td>
            </tr>
        </thead>
        <?php endif; ?>
        <?php endforeach;?>
        </tbody>
    </table><br>




</div><br>

<div class="order-modal-index container table-responsive">

    <h1><?= Html::encode('Заказанные услуги') ?></h1>
    <p><?= Html::a('Добавить заказ', ['create'], ['class' => 'btn btn-success']) ?></p><br>
            <table class="table table-striped" id="sort" >
                <thead style="background-color:#e52793a6; color:#ffffff;">
                <tr>
                    <th style="text-align: center;">ID</th>
                    <th  style="text-align: center;">Наименование услуги</th>
                    <th style="text-align: center;">Дата записи</th>
                    <th style="text-align: center;">Время записи</th>

                    <th style="text-align: center;">Имя</th>
                    <th style="text-align: center;">E-mail</th>
                    <th style="text-align: center;">Телефон</th>
                    <th style="text-align: center;">Инструменты</th>
                </tr>
                </thead>
                    <tbody>
                    <?php foreach ($modal as $key):?>
                    <?php if(empty($key['img'])):?>
                <thead class="beige" id='<?=$key['id']?>'>
                <tr>
                    <td><?= $key['id']?></td>
                    <td><?= $key['title']?></td>
                    <td><?= Yii::$app->formatter->asDate($key['order_d'], 'long');?></td>
                    <td><?= substr($key['order_t'],0,-3);?></td>
                    <td><?= $key['name']?></td>
                    <td><?= $key['email']?></td>
                    <td><?= $key['phone']?></td>
                    <td style="text-align: center;">&nbsp;
                        <div class="btn-group">
                            <?php
                            echo '
                            <a href="/order_modal/order-modal/update?id='.$key['id'].'" title="Редактировать" aria-label="Редактировать" data-pjax="0">
                                <span class="glyphicon glyphicon-pencil"></span>
                            </a>&nbsp
                            <a href="/order_modal/order-modal/view?id='.$key['id'].'" title="Просмотр" aria-label="Просмотр" data-pjax="0">
                                <span class="glyphicon glyphicon-eye-open"></span>
                            </a>&nbsp;&nbsp;
                           ';
                            ?>
                            <a href="/order_modal/order-modal/delete?id=<?=$key['id'] ?>" title="Удалить" aria-label="Удалить" data-pjax="0">
                                <?= Html::a('<span class="glyphicon glyphicon-trash"></span>', ['delete', 'id' => $key['id']], [
                                'data' => ['confirm' => 'Вы уверены, что желаете удалить блок?','method' => 'post']]) ?>
                            </a>
                        </div>
                    </td>
                </tr>
                </thead>
                        <?php endif; ?>
                        <?php endforeach;?>
                </tbody>
            </table><br>




        </div><br>

