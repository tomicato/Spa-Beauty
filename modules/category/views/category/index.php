<?php
use yii\helpers\Html;
use yii\grid\GridView;
use app\models\Categories;
$this->title = '';
?>
<div class="categories-index container table-responsive">

    <h1><?= Html::encode('Категории') ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Добавить категорию', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php try {
      echo GridView::widget([
            'dataProvider' => $dataProvider,
            // 'filterModel' => $searchModel,
            'columns' => [
                 // ['class' => 'yii\grid\SerialColumn'],
                'id',
                'title',
                [
                    'label' => 'Категория',
                    'format' => 'html',
                    'value' => function($data){
                        $cat_id = Categories::findOne($data->parent_id);
                        return $cat_id == 0 ? 'Самостоятельная категория' : $cat_id->title;
                    }
                ],
                //'keywords',
                //'description',

                [
                    'class' => 'yii\grid\ActionColumn',
                    'header'=>'Инструменты',
                    'headerOptions' => ['width' => '80', 'style' => ['color' => '#3c8dbc']],
                    'template' => '{view} {update} {delete}{link}',
                ],
            ],
        ]);
    } catch (Exception $e) {
    }
    ?>
</div>
