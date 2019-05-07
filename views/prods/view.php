<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Products */

$this->title = $model->prod_id;
$this->params['breadcrumbs'][] = ['label' => 'Products', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="products-view container">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->prod_id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->prod_id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?php try {
	   echo DetailView::widget( [
		    'model'      => $model,
		    'attributes' => [
			    'prod_id',
			    'img',
			    'img_big',
			    'prod_name',
			    'prod_caption',
			    'full_description',
			    'categories_id',
			    'new',
			    'sale',
			    'hit',
			    'price',
			    'in_stock',
		    ],
	    ] );
    } catch ( Exception $e ) {
    } ?>

</div>
