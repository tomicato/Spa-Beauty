<?php
use yii\helpers\Html;
use yii\widgets\DetailView;
use app\models\Reviews;
$this->title = '';
?>
<div class="reviews-view container table-responsive">

    <h1><?= Html::encode($model->name) ?></h1>

    <p><?= Html::a('Изменить', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
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
                //'avatar',
                [
                    'label' => 'Аватар',
                    'format' => 'html',
                    'value' => function ($data) {
                        $img = Reviews::findOne($data->id);
                        return "<img src='/images/reviews/{$img['avatar']}' class='img-responsive img-circle' width='70' height='70'>";
                    },
                ],
                //'created_at',
                [
                    'label' => 'Создано',
                    'format' => 'html',
                    'value' => function ($data) {
                        $created_at  = Reviews::findOne($data->id);
                        return Yii::$app->formatter->asDate($created_at['created_at'], 'long');
                    },
                ],
                'status',
                'request_uri',
            ],
        ]);
    } catch (Exception $e) {
    } ?>

</div>
