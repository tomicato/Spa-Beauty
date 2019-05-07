<?php

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;
use mdm\admin\components\Helper;

$this->title = 'Authorization';
AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut" href="/web/favicon.ico" type="image/x-icon">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    <style>
        @media screen and (min-width: 768px) {
           /* .navbar-header .navbar-brand{
                margin-right: unset;
                 margin-left: 0!important;

            }*/
            .navbar-nav {
                display: flex;
                -webkit-box-orient: vertical;
                -ms-flex-direction: row!important;
                flex-direction: row!important;
                padding-left: 0;
                margin-bottom: 0;
            }
        }
        .navbar-inverse .btn-link:hover{
            text-decoration: none;

        }
        .navbar-inverse .btn-link{
            text-decoration: none;
            padding-top: 10px;
        }
    </style>
</head>
<body>
<?php $this->beginBody() ?>

<div class="wrap">
    <?php

    NavBar::begin([

        'options' => [
            'class' => 'navbar-inverse navbar-fixed-top',
        ],
    ]);
    try {
        echo Nav::widget([
            'options' => ['class' => 'navbar-nav navbar-right'],
            'items' => [
                ['label' => 'Auth', 'url' => ['/'], 'style' => 'margin-left:-20%'],
                ['label' => 'Главная', 'url' => ['/site/index']],
                ['label' => 'О нас', 'url' => ['/site/about']],
                ['label' => 'Статьи', 'url' => ['/post/index']],
                Yii::$app->user->isGuest ?
                    (
                        '<li>'
                        . Html::beginForm(['/site/signup'], 'post')
                        . Html::submitButton('Регистрация', ['class' => 'btn btn-link logout'])
                        . Html::endForm()
                        . '</li><li>'
                        . Html::beginForm(['/site/login'], 'post')
                        . Html::submitButton('Вход', ['class' => 'btn btn-link logout'])
                        . Html::endForm()
                        . '</li>'
                    )
                    : (
                        '<li>'
                        . Html::beginForm(['/admin'], 'post')
                        . Html::submitButton('Профиль', ['url' => ['/admin/'], 'class' => 'btn btn-link logout'])
                        . Html::endForm()
                        . '</li><li>'
                        . Html::beginForm(['/site/logout'], 'post')
                        . Html::submitButton('Выход (' . Yii::$app->user->identity->username . ')',['class' => 'btn btn-link logout']
                    )
                        . Html::endForm()
                        . '</li>'

                    )
            ],
        ]);
    } catch (Exception $e) {
    }
    NavBar::end();
    ?>

    <div class="container">
        <?php try {
            echo Breadcrumbs::widget([
                'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
            ]);
        } catch (Exception $e) {
        } ?>
        <?= $content ?>
    </div>
</div>

<footer class="footer">
    <div class="container">
        <p class="pull-left">&copy; My Company <?= date('Y') ?></p>

        <p class="pull-right"><?= Yii::powered() ?></p>
    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>

