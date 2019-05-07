<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 25.11.2018
 * Time: 18:12
 */

namespace app\components;

use yii\helpers\Html;
use yii\base\Component;

class MessageComponent extends Component {
	public $content;

	public function init(){ // функция инициализации. Если данные не будут переданы в компонент, то он выведет текст "Текст по умолчанию"
		parent::init();
		$this->content= 'Текст по умолчанию';
	}

	public function display($content=null){ // функция отображения данных
		if($content!=null){ //проверка строки на пустоту
			$this->content= $content;
		}
		echo Html::encode($this->content); // вывод данных
	}
}