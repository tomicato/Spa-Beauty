<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use app\models\Categories;
$this->title = '';

?>
<div class="categories-view container">

    <h1><?= Html::encode($model->title) ?></h1>

    <p>
        <?= Html::a('Изменить', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Удалить', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Уверены, что желаете удалить данную категорию?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?php try {
      echo DetailView::widget([
            'model' => $model,
            'attributes' => [
                'id',
                //'parent_id',
                [
                    'label' => 'Категория',
                    'format' => 'html',
                    'value' => function($data){
                        $cat_id = Categories::findOne($data->parent_id);
                        return $cat_id == 0 ? 'Самостоятельная категория' : $cat_id->title;
                    }
                ],
                'title',
                'keywords',
                'description',
            ],
        ]);
    } catch (Exception $e) {
    } ?>

</div>
