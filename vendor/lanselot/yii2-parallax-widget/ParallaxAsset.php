<?php

namespace lanselot\parallax;


use Yii;
use yii\web\AssetBundle;

class ParallaxAsset extends AssetBundle
{
    public $sourcePath = '@vendor/lanselot/parallax/assets';

    public $js = [
        'parallax.min.js',
    ];

    public $depends = [
        'yii\web\YiiAsset',
        'yii\web\JqueryAsset'
    ];

    public function init()
    {
        $this->sourcePath = dirname(__FILE__) . DIRECTORY_SEPARATOR . 'assets';
    }
}
