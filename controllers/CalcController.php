<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 15.07.2018
 * Time: 0:11
 */

namespace app\controllers;
use Yii;
use yii\web\Controller;
use app\models\Categories;
use app\models\Products;
use app\models\Personal;

class CalcController extends controller
{
    public $enableCsrfValidation = false;

    /*public function actionIndex()
    {
        $this->layout = 'main_shop';
        $categories = Categories::find()->where(['!=', 'parent_id', 0 ])->asArray()->all();
        $per = Personal::find()->asArray()->all();

        return $this->render('index',compact('categories', 'per'));
    }

    public function actionParse()
    {

        $cat = Yii::$app->request->post('s');
        $cat_all = Categories::findOne(['title' => $cat]);
        $id = $cat_all->id;

        if($cat){
            \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
            $us = Products::find()->where(['categories_id' => $id])->asArray()->all();
            return $us;
        }
    }*/

    public function actionCalculator()
    {
        $this->layout = 'main_shop';
        $model = new Categories();
        $id = Yii::$app->request->post('id');

        // $res = Products::find()->where(['categories_id' => $id])->asArray()->all();

        return $this->render('calculator',compact('model'));
    }

    public function actionCal()
    {
        $this->layout = 'main_shop';
        $id = Yii::$app->request->post('id');
        $countProducts = Products::find()
            ->where(['categories_id' => $id])
            ->count();

        $products = Products::find()
            ->where(['categories_id' => $id])
            //->orderBy(['categories_id' => SORT_DESC])
            ->all();

        if($countProducts > 0){
            echo '<option selected>Выбор продукции</option>';
            foreach($products as $prod){
                echo "</option><option data-prod_name='".$prod->prod_name."' data-price='".$prod->price."' data-img='".$prod->img."' value='".$prod->prod_id."'>".$prod->prod_name. ' ' .$prod->price. ' руб.'."</option>";
            }
        }else{
            echo "<option>-</option>";
        }



    }
}