<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        /*'css/main.css',*/
        /*'css/site.css',*/
        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css',
        //'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
        'css/plugins.css',
        'css/app.css',
        'css/custom.css',
        'css/icomoon.css',
        //'css/bootstrap-popover-x.css',
        //'css/multizoom.css',
        //'css/style.css',


    ];
    public $js = [
        //'http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',
        //'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',

	    'js/plugins.js',
        'js/app.js',
	    'js/main.js',
        'js/jquery.accordion.js',
        'js/jquery.cookie.js',

        'js/TweenMax.js',
        'js/TimelineMax.min.js',
        //'js/bootstrap-popover-x.js',
       // 'js/multizoom.js',


    ];
    public $depends = [
       'yii\web\YiiAsset',
      // 'yii\bootstrap\BootstrapAsset',
    ];

    public $jsOptions = ['position' => \yii\web\View::POS_HEAD];
}
