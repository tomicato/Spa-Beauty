<?php
use yii\helpers\Html;
use yii\widgets\DetailView;
$this->title = '';
?>
<div class="testimonials-view container table-responsive">

    <h1><?= Html::encode($model->name) ?></h1>

    <p>
        <?= Html::a('Изменить', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Удалить', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Уверены в удалении?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?php try {
       echo DetailView::widget([
            'model' => $model,
            'attributes' => [
                'id',
                'name',
                'last_name',
                'content:ntext',
                'active',
            ],
        ]);
    } catch (Exception $e) {
    } ?>

</div>
