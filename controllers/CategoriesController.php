<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 06.06.2018
 * Time: 22:55
 */

namespace app\controllers;

use Yii;
use app\models\Categories;
use app\models\Products;
use yii\data\Pagination;

class CategoriesController extends AppController
{

    public function actionIndex()
    {
        //$this->layout = 'main_shop';


	    $this->layout = 'main_shop_search';

	    $id = Yii::$app->request->get('id'); // Второй вариант получения $id get запросом

	    $query = Products::find()->where(['categories_id' => $id])->orderBy(['price' => SORT_ASC])->asArray();
	    $pages = new Pagination(['totalCount' => $query->count(), 'pageSize' => 2, 'forcePageParam' => false, 'pageSizeParam' => false]);
	    $cat_prod = $query->offset($pages->offset)->limit($pages->limit)->all();
	    $max = Products::find()->where(['categories_id' => $id])->orderBy(['price' => SORT_DESC])->limit(1)->asArray()->all();
	    $cat = Categories::findOne($id);
	    $this->setMeta($cat->title);
	    $this->view->params['id'] = $id;

	    return $this->render('index', compact('cat_prod', 'max', 'pages', 'searchModel', 'dataProvider', 'id'));
    }


}