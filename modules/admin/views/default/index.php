<?php
use yii\helpers\Html;
use yii\helpers\Url;
?>

<div class="container admin-default-index"  style="margin-top: 200px;margin-bottom: 200px;">

    <ul style="list-style-type: none">
        <h3>Здесь будет:</h3><hr>
        <li>1) Профиль пользователя</li>
        <li> 2) Историяя заказов</li>
        <li> 3) Смена пароля </li><hr>
        <h4><?= $this->context->action->uniqueId ?></h4>
    </ul>

</div>

<div class="container admin-default-index"  style="margin-top: 200px;margin-bottom: 200px;">
    <?= Html::a('Изменить пароль', Url::to(['/profile/profile/password']), ['class' => 'btn btn-outline-success']) ?>
    <?= Html::a('История Заказов', Url::to(['/admin/orders']), ['class' => 'btn btn-outline-danger']) ?>
    <?= Html::a('Личные данные', Url::to(['/profile/profile/own-data']), ['class' => 'btn btn-outline-warning']) ?>

</div>