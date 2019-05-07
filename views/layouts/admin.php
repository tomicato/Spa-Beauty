<?php

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;
use yii\helpers\Url;

use mdm\admin\components\Helper;
$this->title = 'Authorization | Admin';
AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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




<?php /*$this->beginBody() */?><!--

<div class="wrap">
    --><?php
/*    $menuItems = [
        ['label' => 'Главная', 'url' => ['/']],
    ];
    if (!Yii::$app->user->isGuest) {
        $menuItems[] = [// первый уровень
                'label' => 'Пользователи',
                'url' => Url::to(['/rbac/default/index']),
                'linkOptions' => ['data-method' => 'post'],
        ];
        $menuItems[] = [// первый уровень
            'label' => 'Статьи',
            'url' => Url::to(['/admin/post/index']),
            'linkOptions' => ['data-method' => 'post'],
        ];
        $menuItems[] = [// первый уровень
            'label' => 'Кабинет',
            'url' => Url::to(['/admin']),
            'linkOptions' => ['data-method' => 'post'],
        ];

        $menuItems[] = [

              'label' => 'Выйти (' . Yii::$app->user->identity->username . ')',
              'url' => Url::to(['/site/logout']),
              'linkOptions' => ['data-method' => 'post'],

        ];


    }else{
        $menuItems[] = [// первый уровень
           'label' => 'Регистрация',
            'url' =>  Url::to(['/site/signup']),
            'linkOptions' => ['data-method' => 'post'],
          ];
        $menuItems[] = [
            'label' => 'Вход',
            'url' => Url::to(['/rbac/user/login']),
            'linkOptions' => ['data-method' => 'post'],
          ];


    }

    NavBar::begin([
        'brandLabel' => 'My Company',
        'brandUrl' => Yii::$app->homeUrl,
        'options' => [
            'class' => 'navbar-inverse navbar-fixed-top',
        ],

    ]);
    echo Nav::widget([
        'options' => ['class' => 'navbar-nav navbar-right'],
        'items' => $menuItems,
    ]);

    NavBar::end();

    */?>

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
            ['label' => 'Главная', 'url' => ['/'], 'style' => 'margin-left:-20%'],
            ['label' => 'Статьи', 'url' => ['/admin/post/index']],
            Yii::$app->user->isGuest   ?
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
                 :  Yii::$app->user->identity->username === 'admin' ? (
                '<li>'
                . Html::beginForm(['/rbac/user'], 'post')
                . Html::submitButton('Пользователи',['class' => 'btn btn-link logout'])
                . Html::endForm()
                . '</li>'

            ): '',(
                '<li>'
                . Html::beginForm(['/admin'], 'post')
                . Html::submitButton('Профиль', ['url' => ['/admin/'], 'class' => 'btn btn-link'])
                . Html::endForm()
                . '</li>'

                . '<li>'
                . Html::beginForm(['/site/logout'], 'post')
                . Html::submitButton('Выход (' . Yii::$app->user->identity->username . ')',['class' => 'btn btn-link logout'])
                . Html::endForm()
                . '</li>'


            ),







        ],
    ]);
} catch (Exception $e) {
}
NavBar::end();
?>




<!--    --><?php
/*    $menuItems = [
        ['label' => 'Home', 'url' => ['/admin/default/index']],
        ['label' => 'Пользователи', 'url' => ['/rbac/default/index']],
		['label' => 'Статьи', 'url' => ['/admin/post/index']],
        ['label' => 'Кабинет', 'url' => ['/admin/']],
		['label' => 'Регистрация', 'url' => ['/site/signup']],
		    Yii::$app->user->isGuest ? (
        ['label' => 'Вход', 'url' => ['/rbac/user/login']]
        ) : (
            '<li>'
            . Html::beginForm(['/site/logout'], 'post')
            . Html::submitButton('Выход (' . Yii::$app->user->identity->username . ')',['class' => 'btn btn-link logout']
            )
            . Html::endForm()
            . '</li>'
        )
    ];
        NavBar::begin([
        'brandLabel' => 'My Company',
        'brandUrl' => Yii::$app->homeUrl,
        'options' => [
            'class' => 'navbar-inverse navbar-fixed-top',
        ],

    ]);
    echo Nav::widget([
        'options' => ['class' => 'navbar-nav navbar-right'],
        'items' => Helper::filter($menuItems),

    ]);
    NavBar::end();
    */?>

    <div class="container">
        <?= Breadcrumbs::widget([
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]) ?>
        <?= $content ?>
    </div>
</div>

<!--<footer class="footer">
    <div class="container">
        <p class="pull-left">&copy; My Company <?/*= date('Y') */?></p>

        <p class="pull-right"><?/*= Yii::powered() */?></p>
    </div>
</footer>-->

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
