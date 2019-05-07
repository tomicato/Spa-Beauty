<?php

use yii\helpers\Html;
use yii\grid\GridView;
use app\models\Blog;

$this->title = '';
?>
<style>
    table thead th{
        text-align: center;
    }
    table tbody td{
        text-align: center;
    }
    table tbody td:nth-child(4){
        text-align: left;
    }
</style>
<div class="blog-index container table-responsive">

    <h1><?= Html::encode('Блог') ?></h1>
    <p><?= Html::a('Создать пост', ['create'], ['class' => 'btn btn-success']) ?></p>

    <?php try {
     echo GridView::widget([
            'dataProvider' => $dataProvider,
           // 'filterModel' => $searchModel,
            'columns' => [
                //['class' => 'yii\grid\SerialColumn'],

                'id',
                's_name',
                [
                    'label' => 'Фото',
                    'format' => 'html',
                    'value' => function ($data) {
                        $img = Blog::findOne($data->id);
                        return "<img src='/images/blog/{$img['s_img_sm']}' class='img-responsive' width='70' height='90'>";
                    },
                ],
                //'s_img_sm',
                //'s_caption',
                [
                    'label' => 'Краткое описание',
                    'format' => 'html',
                    'value' => function ($data) {
                        $caption  = Blog::findOne($data->id);
                        return "<p style='width: 500px'>{$caption['s_caption']}</p>";
                    },
                ],
                //'s_description',
                [ //Yii::$app->formatter->asDate($item['created_at'], 'long');
                    'label' => 'Создано',
                                'format' => 'html',
                                'value' => function ($data) {
                        $created_at  = Blog::findOne($data->id);
                        return Yii::$app->formatter->asDate($created_at['created_at'], 'long');
                    },
                ],
                //'s_img_bg',
               // 'created_at',
                //'updated_at',
                //'write_by',
                //'section',
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

