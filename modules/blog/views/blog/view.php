<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use app\models\Blog;

$this->title = '';

?>
<div class="blog-view container table-responsive">

    <h1><?= Html::encode('Просмотр') ?></h1>

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
                's_name',
                's_caption',
                [
                    'label' => 'Описание',
                    'format' => 'html',
                    'value' => function ($data) {
                        $desc = Blog::findOne($data->id);
                        return "{$desc['s_description']}";
                    },
                ],
                //'s_description',
                [
                    'label' => 'Фото',
                    'format' => 'html',
                    'value' => function ($data) {
                        $img = Blog::findOne($data->id);
                        return "<img src='/images/blog/{$img['s_img_sm']}' class='img-responsive' width='70' height='90'>";
                    },
                ],
                //'s_img_sm',
                //'s_img_bg',
                'created_at',
                'updated_at',
                'write_by',
                'section',
            ],
        ]);
    } catch (Exception $e) {
    } ?>

</div>
