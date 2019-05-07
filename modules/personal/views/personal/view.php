<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use app\models\Personal;
$this->title = '';

?>
<div class="personal-view container table-responsive">
    <h1><?= Html::encode($model->fio) ?></h1>

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
                [
                    'label' => 'Фото',
                    'format' => 'html',
                    'value' => function ($data) {
                        $img = Personal::findOne($data->id);
                        return "<img src='/images/team/{$img['img']}' class='img-responsive img-circle' width='90' height='90'>";
                    },
                ],
                //'img',
                'photo_status',
                'sex',
                'phone',
                'fio:ntext',
                'education:ntext',
                'experience:ntext',
                'hobby:ntext',
                'post:ntext',
            ],
        ]);
    } catch (Exception $e) {
    } ?>

</div>
