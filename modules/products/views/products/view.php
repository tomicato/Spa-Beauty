<?php
use yii\helpers\Html;
use yii\widgets\DetailView;
use app\models\Products;
$this->title = '';
?>
<div class="products-view container table-responsive">

    <h1><?= Html::encode($model->prod_name) ?></h1>

    <p>
        <?= Html::a('Изменить', ['update', 'id' => $model->prod_id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Удалить', ['delete', 'id' => $model->prod_id], [
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
                'prod_id',
                //'img',
                [
                    'label' => 'Фото',
                    'format' => 'html',
                    'value' => function ($data) {
                        $img = Products::findOne($data->prod_id);
                        return "<img src='{$img['img']}' class='img-responsive' width='150' height='180'>";
                    },
                ],
                'prod_name',
                'prod_caption',
                'full_description',
                'categories_id',
                'new',
                'sale',
                'hit',
                //'f_id',
                'price',
                'in_stock',
            ],
        ]);
    } catch (Exception $e) {
    } ?>

</div>
