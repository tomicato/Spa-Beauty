<?php

use yii\helpers\Html;
use yii\grid\GridView;
use app\models\Products;
$this->title = '';

?>
<style>

    table thead th{
        text-align: center;
        color: #3c8dbc;
    }
    table tbody td{
        text-align: center;
    }

    table tbody td:nth-child(2) img{
        margin-left: 0;
    }
    table tbody td:nth-child(4){
        text-align: left;
    }
    table tbody td:nth-child(3){
        width:300px;
    }
    table tbody td:nth-child(5), table tbody td:nth-child(1){
        width:100px;
    }
</style>
<div class="products-index container table-responsive">

    <h1><?= Html::encode('Продукция') ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Добавить товар', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php try {
       echo GridView::widget([
            'dataProvider' => $dataProvider,
            //'filterModel' => $searchModel,
            'columns' => [
                //['class' => 'yii\grid\SerialColumn'],
                'prod_id',
                [
                    'label' => 'Фото',
                    'format' => 'html',
                    'value' => function ($data) {
                        $img = Products::findOne($data->prod_id);
                        return "<img src='{$img['img']}' class='img-responsive' width='90' height='110'>";
                    },
                ],
                'prod_name',
                //'prod_caption',
                //'full_description',
                [
                  'label' => 'Категория',
                  'format' => 'html',
                  'value' => function($data){
                    return $data->categories->title;
                  }

                ],
                [
                    'attribute' => 'new',
                    'format' => 'html',
                    'value' => function($data){
                        return !$data->new ? '<span class="text-danger">Нет</span>' : '<span class="text-success">Да</span>';
                    }
                ],
                [
                  'attribute' => 'hit',
                    'format' => 'html',
                  'value' => function($data){
                        return !$data->hit ? '<span class="text-danger">Нет</span>' : '<span class="text-success">Да</span>';
                  }
                ],
                [
                    'attribute' => 'sale',
                    'format' => 'html',
                    'value' => function($data){
                        return !$data->sale ? '<span class="text-danger">Нет</span>' : '<span class="text-success">Да</span>';
                    }
                ],
                'price',
                //'in_stock',
                [
                    'class' => 'yii\grid\ActionColumn',
                    'header'=>'Инструменты',
                    'headerOptions' => ['width' => '80', 'style' => ['color' => '#3c8dbc']],
                    'template' => '{view} {update} {delete}{link}',
                ],
               // ['class' => 'yii\grid\ActionColumn'],
            ],
        ]);
    } catch (Exception $e) {
    } ?>
</div>
