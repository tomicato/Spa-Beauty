<?php

$params = require(__DIR__ . '/params.php');

$config = [
    'id' => 'basic',
    'language' => 'ru',
    'timezone' => 'Europe/Tomsk',
    'name' => 'Салон красоты «SPA»',
    'basePath' => dirname(__DIR__),
    'defaultRoute' => '/rose',
    'bootstrap' => ['log'],
    
    'components' => [
        'authManager' => [
            'class' => 'yii\rbac\DbManager',
            'defaultRoles' => ['luser'],
        ],
        
        'sphinx' => [
	        'class' => 'yii\sphinx\Connection',
	        'dsn' => 'mysql:host=127.0.0.1;port=9306;',
	        'username' => '',
	        'password' => '',
        ],
        'request' => [
            'cookieValidationKey' => 'MuWYkKZ7bPpMIYxD31fvJu6-C1FCpbMJ',
            'baseUrl' => '',
            'enableCsrfValidation' => false,
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        /*'user' => [
            'identityClass' => 'app\models\User',
            //'enableAutoLogin' => true,
            'enableSession' => true,
            'authTimeout' => 3600,
        ],*/
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            'viewPath' => '@app/mail',
            'useFileTransport' => false,
            /*'htmlLayout'=>false,
            'textLayout'=>false,*/
            'transport' => [
                'class' => 'Swift_SmtpTransport',
                'host' => 'smtp.yandex.ru',
                'username' => 'test@yandex.ru',
                'password' => '0000000',
                'port' => '465',
                'encryption' => 'ssl',
            ],
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=test',
            'username' => '1234',
            'password' => '',
            'enableSchemaCache' => true,

            // Продолжительность кеширования схемы.
            'schemaCacheDuration' => 3600,

            // Название компонента кеша, используемого для хранения информации о схеме
            'schemaCache' => 'cache',
        ],

        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
               // 'shop/search' => '',
	            //'products' => 'products/products',
	            'sign' => 'site/sign',
	            'getdata' => 'rose/getdata',
	            
	            'andlogin' => 'rose/andlogin',
                'admin' => 'profile/profile/own-data',
                'admin/profile' => 'profile/profile',
                'admin/password' => 'profile/default/password',
                'admin/testimonials' => 'testimonials/testimonials/index',
                'shop/category/<id:\d+>/search' => 'rose/search',
                'shop/search' => 'rose/search',
                'shop/single-product/<id:\d+>/search' => 'rose/search',
                'reviews' => 'reviews/reviews',
                'post' => 'post/index',
                'full-post/<id:\d+>' => 'post/full-post',
                'admin/orders' => 'orders/orders',
                'admin/detail' => 'detail/detail',
                'admin/products' => '/products/products',
                'admin/personal' => 'personal/personal',
                'admin/category' => 'category/category',
                'admin/blog' => 'blog/blog',
                //'admin/order-modal' => 'order_modal/order-modal',
                'order-modal' => 'order_modal/order-modal',
                'blog-single/<id:\d+>' => 'rose/blog-single',
                'yaform' => 'cart/yaform',
                'blog-single' => 'rose/blog-single',
                'about' => 'rose/about',
                'services' => 'rose/services',
                'blog' => 'rose/blog',
                'contact' => 'rose/contact',
                'cart-view' => 'cart/cart-view',
                'shop/categories/<id:\d+>/page/<page:\d+>' => 'categories',
                'shop/categories/<id:\d+>' => 'categories',
                'shop/category/<id:\d+>/page/<page:\d+>' => 'rose/category',
                'shop/category/<id:\d+>' => 'rose/category',

                'shop/single-product/<id:\d+>' => 'rose/single-product',
                'shop' => 'rose/shop',


            ],
        ],


    ],
    'modules' => [
        'admin' => [
            'class' => 'app\modules\admin\Module',
            //'layout' => 'main',
        ],
        'personal' => [
            'class' => 'app\modules\personal\Module',
            //'layout' => 'main',
        ],
        'blog' => [
            'class' => 'app\modules\blog\Module',
            //'layout' => 'main',
        ],
        'rbac' => [
            'class' => 'mdm\admin\Module',
            'controllerMap' => [
                'assignment' => [
                    'class' => 'mdm\admin\controllers\AssignmentController',
                    'idField' => 'id',
                    'usernameField' => 'username',
                ],
            ],
            'layout' => 'left-menu',
            'mainLayout' => '@app/views/layouts/admin.php',
        ],
        'backend' => [
            'class' => 'app\modules\backend\Module',
           // 'layout' => 'main',
        ],

        'category' => [
            'class' => 'app\modules\category\Modulle',
           // 'layout' => 'main',
        ],
        'products' => [
            'class' => 'app\modules\products\Module',

        ],
        'orders' => [
            'class' => 'app\modules\orders\Module',
        ],
        'detail' => [
            'class' => 'app\modules\detail\Module',
        ],
        'order_modal' => [
            'class' => 'app\modules\order_modal\Module',
        ],
        'reviews' => [
            'class' => 'app\modules\reviews\Module',
        ],
        'testimonials' => [
            'class' => 'app\modules\testimonials\Module',
        ],
        'profile' => [
            'class' => 'app\modules\profile\Module',
        ],
    ],
    'controllerMap' => [
        'elfinder' => [
            'class' => 'mihaildev\elfinder\PathController',
            'access' => ['@'],
            'root' => [
                'baseUrl'=>'@web',
                'basePath'=>'@webroot',
                'path' => '/',
                'name' => 'Global'
            ],
            /*'watermark' => [
                'source'         => __DIR__.'/logo.png', // Path to Water mark image
                'marginRight'    => 5,          // Margin right pixel
                'marginBottom'   => 5,          // Margin bottom pixel
                'quality'        => 95,         // JPEG image save quality
                'transparency'   => 70,         // Water mark image transparency ( other than PNG )
                'targetType'     => IMG_GIF|IMG_JPG|IMG_PNG|IMG_WBMP, // Target image formats ( bit-field )
                'targetMinPixel' => 200         // Target image minimum pixel size
            ]*/
        ],

    ],
    'as access' => [
        'class' => 'mdm\admin\components\AccessControl',
        'allowActions' => [
        	'articles/*',
            'rose/*',
	        'prods/*',
            'site/*',
            'backend/*',
            'categories/*',
            'category/*',
            'cart/*',
            'blog/*',
            'personal/*',
            'products/*',
            'orders/*',
            'detail/*',
            'elfinder/*',
            'order_modal/*',
            'reviews/*',
            'testimonials/*',
            'profile/*',
            //'rbac/*',
            'post/*',
            'calc/*',
            'register',
           // 'getdata',

        ]
    ],
    'params' => $params,
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
       'allowedIPs' => ['127.0.0.1', '::1'],
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        'allowedIPs' => ['127.0.0.1', '::1'],
    ];
}

return $config;
