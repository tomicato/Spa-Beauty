<?php
use yii\helpers\Html;
use yii\grid\GridView;
use app\models\Reviews;
$this->title = '';
?>
<style>

    table thead th{
        text-align: center;
        color: #3c8dbc;
    }
    table thead th:nth-child(8), table thead th:nth-child(6){
        width:150px;
    }
    table tbody td{
        text-align: center;
    }

    table tbody td:nth-child(2) img{
        margin-left: 0;
    }
    table tbody td:nth-child(3){
        text-align: left;
    }
    table tbody td:nth-child(3){
        width:300px;
    }
    table tbody td:nth-child(5){
        width:100px;
    }
</style>
<div class="reviews-index container table-responsive">
    <h1><?= Html::encode('Комменарии') ?></h1>
    <p><?= Html::a('Добавить комментарий', ['create'], ['class' => 'btn btn-success']) ?></p>

    <?php try {
       echo GridView::widget([
            'dataProvider' => $dataProvider,
            'columns' => [
               // ['class' => 'yii\grid\SerialColumn'],

                'id',

               // 'avatar',
                [
                    'label' => 'Аватар',
                    'format' => 'html',
                    'value' => function ($data) {
                        $img = Reviews::findOne($data->id);
                        return "<img src='/images/reviews/{$img['avatar']}' class='img-responsive img-circle' width='70' height='70'>";
                    },
                ],
                //'content',
                [
                    'label' => 'Комментарий',
                    'format' => 'html',
                    'value' => function ($data) {
                        $desc = Reviews::findOne($data->id);
                        return "{$desc['content']}";
                    },
                ],
                'name',
                'email:email',
                //'created_at',
                /*[
                    'label' => 'Создано',
                    'format' => 'html',
                    'value' => function ($data) {
                        $created_at  = Reviews::findOne($data->id);
                        return Yii::$app->formatter->asDate($created_at['created_at'], 'long');
                    },
                ],*/
                //'status',
                [
                  'label' => 'Одобрено',
                  'format' => 'html',
                  'value' => function($data){
                    if($data['status'] == 1) {return  "Да";}else{ return "Нет";}
                  }

                ],
                'request_uri',

                //['class' => 'yii\grid\ActionColumn'],
                [
                    'class' => 'yii\grid\ActionColumn',
                    'header'=>'Инструменты',
                    'headerOptions' => ['width' => '80', 'style' => ['color' => '#3c8dbc']],
                    'template' => '{view} {update} {delete}{link}',
                ],
            ],
        ]);
    } catch (Exception $e) {
    } ?>
</div>
