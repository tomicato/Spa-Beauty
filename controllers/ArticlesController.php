<?php

namespace app\controllers;


use Yii;
use app\models\Products;
use yii\helpers\Json;


class ArticlesController extends AppController
{
	public $layout = 'main_shop_search';

    public function actionIndex()
    {
    	$a = Yii::$app->request->post('val'); // Ajax запрос

    	$all = Products::find()
	                   ->select(['ad_address', 'COUNT(*) AS cnt'])
	                   ->join('LEFT JOIN', 'addresses', '`ad_address` = `title`')
		    ->where(['categories_id' => '5'])
		               ->groupBy(['ad_address'])
	                   ->orderBy(['ad_address' => SORT_ASC])
	                   ->all();

	    $all2 = Products::find()
	                    ->select(['a_name', 'n_id', 'COUNT(*) AS cnt'])
	                    ->join('LEFT JOIN', 'names', '`n_id` = `names_id`')
		    ->where(['categories_id' => '5'])
	                    ->groupBy(['a_name'])
	                    ->orderBy(['n_id' => SORT_ASC])
	                    ->all();

	    $all3 = Products::find()
	           ->select(['fmadein', 'COUNT(*) AS cnt'])
	           ->join('LEFT JOIN', 'articles', '`fmadein` = `f_made_in`')
		    ->where(['categories_id' => '5'])
	           ->groupBy(['fmadein'])
	           ->orderBy(['fmadein' => SORT_ASC])
	           ->all();


	    if(Yii::$app->request->isAjax){

	    	$s = Products::find()
                 ->where( ['IN', 'ad_address', $a ] )// $a
                 ->orWhere( ['IN', 'n_id', $a ] )// $n
                 ->orWhere( [ 'IN', 'fmadein', $a ] )// $pr
                 ->andWhere( [ 'categories_id' => '5' ] )
                 ->indexBy('prod_id')
                 ->all();

	    	return Json::encode( $s );

	    }

	    return  $this->render('index',compact('addr','all', 'all2', 'all3'));
    }


}
