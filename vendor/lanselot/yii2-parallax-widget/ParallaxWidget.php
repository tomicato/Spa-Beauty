<?php

namespace lanselot\parallax;

use Yii;
use yii\base\Widget;
use yii\helpers\Html;

/**
 * This is just an example.
 */
class ParallaxWidget extends Widget
{
    public $image;
    public $element;
    public $minHeight;

    public function init()
    {
        parent::init();
        $view = Yii::$app->getView();
        $this->registerAssets();
        $view->registerJs("
        $('" . $this->element . "').css('min-height', '" . $this->minHeight . "');
        $('" . $this->element . "').css('background', 'transparent');
        $('" . $this->element . "').parallax({imageSrc: '" . $this->image . "'});
        ", $view::POS_READY);
    }

    /**
     * Registers the needed assets
     */
    public function registerAssets()
    {
        $view = $this->getView();
        ParallaxAsset::register($view);
    }

    public function run()
    {
        return Html::tag('div', '', ['class'=>preg_replace('/[^a-zA-Zа-яА-Я0-9]/ui', '', $this->element), 'data-parallax'=>"scroll", 'data-image-src'=> $this->image]);
    }
}
