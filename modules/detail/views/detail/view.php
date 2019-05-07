<?php
use yii\helpers\Html;
use yii\widgets\DetailView;
$this->title = '';
?>
<div class="orders-items-view container table-responsive">

    <br><h1><?= Html::encode($model->name) ?></h1>

    <p>
        <?php
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager')
            echo Html::a('Изменить', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']);
        ?>
        <?= Html::a('Удалить', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?php try {
       echo DetailView::widget([
            'model' => $model,
            'attributes' => [
                'id',
                'orders_cart_id',
                'products_id',
                'name',
                'price',
                'qty_items',
                'sum_items',
            ],
        ]);
    } catch (Exception $e) {
    } ?><br>

</div>
