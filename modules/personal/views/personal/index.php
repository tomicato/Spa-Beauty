<?php

use yii\helpers\Html;
use yii\grid\GridView;
use app\models\Personal;
$this->title = '';

?>
<style>
    table thead th{
        text-align: center;
    }
    table tbody td{
        text-align: center;
    }
    table tbody td:nth-child(2) img{
        margin-left: 30%;
    }
</style>
<div class="personal-index container table-responsive">

    <h1><?= Html::encode('Персонал') ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Добавить сотрудника', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php try {
      echo  GridView::widget([
            'dataProvider' => $dataProvider,
            //'filterModel' => $searchModel,
            'columns' => [
                //['class' => 'yii\grid\SerialColumn'],

                'id',
                //'img',
                [
                    'label' => 'Фото',
                    'format' => 'html',
                    'value' => function ($data) {
                        $img = Personal::findOne($data->id);
                        return "<img src='/images/team/{$img['img']}' class='img-responsive img-circle' width='70' height='90'>";
                    },
                ],
                'photo_status',
                'sex',
                'phone',
                'fio:ntext',
                //'education:ntext',
                //'experience:ntext',
                //'hobby:ntext',
                //'post:ntext',
                [
                    'class' => 'yii\grid\ActionColumn',
                    'header'=>'Инструменты',
                    'headerOptions' => ['width' => '80', 'style' => ['color' => '#3c8dbc']],
                    'template' => '{view} {update} {delete}{link}',
                ],
                //['class' => 'yii\grid\ActionColumn'],
            ],
        ]);
    } catch (Exception $e) {
    } ?>
</div>
