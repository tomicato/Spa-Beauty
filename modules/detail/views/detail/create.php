<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\OrdersItems */

$this->title = 'Create Orders Items';
$this->params['breadcrumbs'][] = ['label' => 'Orders Items', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="orders-items-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
