<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 14.07.2018
 * Time: 14:33
 */
use yii\helpers\Html;
use yii\helpers\Url;
$this->title = 'Личный кабинет';
?>
<br><br>

<div class="container table-responsive">
    <?= Html::a('Личные данные', Url::to(['/profile/profile/own-data']), ['class' => 'btn btn-warning']) ?>
    <?= Html::a('Изменить пароль', Url::to(['/profile/profile/password']), ['class' => 'btn btn-outline-success']) ?>
    <?= Html::a('История Заказов', Url::to(['/admin/orders']), ['class' => 'btn btn-outline-primary']) ?>
    <br><br>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">E-mail</th>
                <th scope="col">Кол-во заказов</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th><?= $u_data->id?></th>
                <td><?= $u_data->username?></td>
                <td><?= $u_data->email?></td>
                <td><?= $qty_all?></td>
            </tr>
        </tbody>
    </table>
</div>
<br><br>