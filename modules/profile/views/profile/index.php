<?php
use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\ListView;
use yii\helpers\Url;
use app\models\Profile;

$this->title = '';
?>
<div class="profile-index container table-responsive">

    <h1><?= Html::encode('Профиль') ?></h1>
    <?= Html::a('Создать Профиль', ['create'], ['class' => 'btn btn-success']) ?>
    <?/*= Html::a('Изменить пароль', Url::to(['/profile/profile/password']), ['class' => 'btn btn-info']) */?>

    <?php try {
        echo GridView::widget([
            'dataProvider' => $dataProvider,
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],

                'user_id',
                'avatar',
                //'nik',
                [
                    'label' => 'Пользователь',
                    'format' => 'html',
                    'value' => function ($data) {
                       $user  = \app\models\User::findOne(Yii::$app->user->identity->id);
                        //debug($burt);
                        return $user->username;
                    },
                ],
                'first_name',
                'second_name',
                //'middle_name',
                //'burthday',
                [
                    'attribute' => 'burthday',
                    'format' => 'html',
                    'value' => function ($data) {
                        $burt  = Profile::findOne($data->user_id);
                        //debug($burt);
                        return Yii::$app->formatter->asDate($burt['burthday'], 'long');
                    },
                ],
                //'gender',

                ['class' => 'yii\grid\ActionColumn'],
            ],
        ]);
    } catch (Exception $e) {
    } ?>
</div>
