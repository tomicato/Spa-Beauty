<?php

use yii\helpers\Html;
use yii\grid\GridView;


$this->title = '';
//$this->params['breadcrumbs'][] = $this->title;
?>
<style>
    table thead th{
        text-align: center;
    }
    table tbody td{
        text-align: center;
    }
    table thead td{
        text-align: center;
    }
    thead.beige:nth-child(even) > tr{
        background-color: beige;
    }
</style>
<div class="post-index container table-responsive">
    <h1><?= Html::encode('Статьи') ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Сздать новую статью', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
				<div class="panel panel-warning">
						<div class="table-responsive">
								<table class="table table-striped" id="sort" >
										<thead style="background-color:#6EBEEB; color:#ffffff;">
										<tr>
												<th style="text-align: center;">ID</th>
                                                <th  style="text-align: center;">Фото</th>
												<th  style="text-align: center;">Заголовок</th>
                                                <th style="text-align: center;">Изменено</th>
												<th style="text-align: center;">Автор</th>
												<th style="text-align: center;">Инструменты</th>
										</tr>
										</thead>
										<tbody>
										<?php foreach ($model as $key):?>

										<thead class="beige" id='<?=$key['id']?>'>

										<tr>
		                                        <td><?= $key['id']?></td>
                                                <td><img src="/images/posts/<?= $key['img']?>" alt="<?= $key['title']?>" width="70" height="90"></td>
												<td><?= $key['title']?></td>
                                                <td><?= Yii::$app->formatter->asDate($key['updated_at'], 'long');?></td>
												<td><?= $key['writed_by']?></td>

		                    <td style="text-align: center;">&nbsp;
				                    <div class="btn-group">
						                    <a href="/admin/post/update?id=<?=$key['id'] ?>" title="Редактировать" aria-label="Редактировать" data-pjax="0">
								                    <span class="glyphicon glyphicon-pencil"></span>
						                    </a>&nbsp;
						                    <a href="/admin/post/view?id=<?=$key['id'] ?>" title="Просмотр" aria-label="Просмотр" data-pjax="0">
								                    <span class="glyphicon glyphicon-eye-open"></span>
						                    </a>&nbsp;&nbsp;
						                    <a href="/admin/post/delete?id=<?=$key['id'] ?>" title="Удалить" aria-label="Удалить" data-pjax="0">
								                    <?= Html::a('<span class="glyphicon glyphicon-trash"></span>', ['delete', 'id' => $key['id']], [
		                                    'data' => ['confirm' => 'Вы уверены, что желаете удалить блок?','method' => 'post']]) ?>
						                    </a>
				                    </div>
		                    </td>
										</tr>
                    <?php endforeach;?>
										</tbody>
								</table>
						</div>
				</div>
				</div>
