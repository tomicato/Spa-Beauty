<?php

namespace app\modules\admin;

/**
 * admin module definition class
 */
class Module extends \yii\base\Module
{


    public $controllerNamespace = 'app\modules\admin\controllers';

    public $layout= '/admin';
    public function init()
    {
        parent::init();

        // custom initialization code goes here
    }
}
