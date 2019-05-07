<?php
use yii\helpers\Html;
use yii\widgets\DetailView;
$this->title = '';
?>
<div class="order-modal-view container table-responsive">

    <h1><?= Html::encode($model->title) ?></h1>

    <p>
        <?= Html::a('Изменить', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
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
                'img',
                'title',
                'order_d',
                'order_t',
                'schedule',
                'name',
                'email:email',
                'phone',
            ],
        ]);
    } catch (Exception $e) {
    } ?>

</div>
