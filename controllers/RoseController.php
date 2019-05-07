<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 02.06.2018
 * Time: 14:16
 */

namespace app\controllers;

use Yii;
use app\models\Categories;
use app\models\Products;
use yii\data\Pagination;
use app\models\Blog;
use app\models\Personal;
use app\models\Post;
use app\models\OrModal;
use yii\web\UploadedFile;
use app\models\Reviews;
use app\models\ContactUs;
use app\models\Testimonials;
use yii\helpers\Html;
use app\models\TestimonialsForm;
use yii\helpers\Json;


class RoseController extends AppController
{
    public $layout = 'main_shop';

    public $enableCsrfValidation = false;
    /**
     * @return string
     */
    public function actionIndex()
    {
        $this->setMeta('Салон Красоты');
        $this->layout = 'main_rose';
        $personal = Personal::find()->asArray()->all();
        $post = Post::find()->limit(2)->orderBy(['id' => SORT_DESC])->asArray()->all();
        $products = Products::find()->where(['hit' => '1'])->limit(12)->asArray()->all();
        $model = new OrModal();
        if($model->load(Yii::$app->request->post()) && $model->validate()){

            $model->order_d = $_POST['order_d'];
            $model->order_t = $_POST['order_t'];
            $model->title = $_POST['title'];

            $time = date('H_i_s', gmdate('U')); // 12_50_29
            $imageMain = $time.'_main';
            $model->image = UploadedFile::getInstance($model, 'image');
            if($model->image == null){
                $model->save();
            }else{
                $model->image->saveAs('images/orders_modal/' . $imageMain . '.' . $model->image->extension);
                $model->img = $imageMain. '.' . $model->image->extension;
            }
            $model->save();

            return $this->refresh();
        }
        $om = OrModal::find()->limit(4)->asArray()->all();



        return $this->render('index', compact('products', 'personal', 'post', 'model', 'om'));
    }

    /**
     * @return string
     */
    public function actionShop()
    {

        $this->layout = 'main_shop_search';


        $session = Yii::$app->session;
        $session->open();
        if(!empty($session['cart']) && !empty($_SESSION['order'])){
            $session->remove('order');
            $session->remove('cart');
            $session->remove('cart.qty');
            $session->remove('cart.sum');
        }



	 /*   return $this->render('index', [
		    'searchModel' => $searchModel,
		    'dataProvider' => $dataProvider,
	    ]);*/

        $this->setMeta('Магазин');
        $hits = Products::find()->where(['hit' => '1'])->orderBy(['price' => SORT_ASC])->limit(9)->asArray()->all();

        return $this->render('shop', compact('hits'));
    }

    /**
     * @return string
     */
    public function actionSingleProduct()
    {
        $this->layout = 'main_shop_search';
        $id = Yii::$app->request->get('id');
        $prod_single = Products::findOne($id);
        $prod_related = Products::find()->limit(6)->asArray()->all();
        $this->setMeta($prod_single->prod_name);
        return $this->render('single-product', compact('prod_single', 'prod_related'));
    }

    /**
     * @param $id
     * @return string
     */
    public function actionCategory()
    {
        $this->layout = 'main_shop_search';

        $id = Yii::$app->request->get('id'); // Второй вариант получения $id get запросом

		$id = (int)$id;
	   // debug($id);

        $query = Products::find()->where(['categories_id' => $id])->orderBy(['price' => SORT_ASC])->asArray();
        $pages = new Pagination(['totalCount' => $query->count(), 'pageSize' => 0, 'forcePageParam' => false, 'pageSizeParam' => false]);
        $cat_prod = $query->offset($pages->offset)->limit($pages->limit)->all();

        $max = Products::find()->where(['categories_id' => $id])->orderBy(['price' => SORT_DESC])->limit(1)->asArray()->all();
        $cat = Categories::findOne($id);
        $this->setMeta($cat->title);

        /*Filter Search*/
	    $a = Yii::$app->request->post('val'); // Ajax запрос

	    $all = Products::find()
	                   ->select(['ad_address', 'COUNT(*) AS cnt'])
	                   ->join('LEFT JOIN', 'addresses', '`ad_address` = `title`')
	                   ->where(['categories_id' => $id])
	                   ->groupBy(['ad_address'])
	                   ->orderBy(['ad_address' => SORT_ASC])
	                   ->all();

	    $all2 = Products::find()
	                    ->select(['n_id', 'a_name', 'COUNT(*) AS cnt'])
	                    ->join('LEFT JOIN', 'names', '`n_id` = `names_id`')
	                    ->where(['categories_id' => $id])
	                    ->groupBy(['a_name'])
	                    ->orderBy(['n_id' => SORT_ASC])
	                    ->all();
			//debug($all2);
	    $all3 = Products::find()
	                    ->select(['fmadein', 'COUNT(*) AS cnt'])
	                    ->join('LEFT JOIN', 'articles', '`fmadein` = `f_made_in`')
	                    ->where(['categories_id' => $id])
	                    ->groupBy(['fmadein'])
	                    ->orderBy(['fmadein' => SORT_ASC])
	                    ->all();

	    $pid = Yii::$app->request->post('pid');
	    if(Yii::$app->request->isAjax && $pid){

		    $s = Products::find()
		                 ->where( ['IN', 'ad_address', $a])// $a Yii::$app->request->isAjax
		                 ->orWhere( ['IN', 'n_id', $a])// $n
		                 ->orWhere( ['IN', 'fmadein', $a])// $pr
		                 ->andWhere( ['categories_id' => $pid])
			             ->orderBy(['price' => SORT_ASC])
		                 //->indexBy('prod_id') // При установке параметра - сортировка не осуществлется!
		                 ->all();
			//debug($a);
		    return Json::encode($s);

	    }


        return $this->render('category', compact('cat_prod', 'max', 'pages', 'addr','all', 'all2', 'all3'));
    }



    public function actionContact()
    {
        $this->setMeta('Наши Контакты');

        $model = new ContactUs();

        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'], $model->email)) {

            return $this->refresh();
        }
        return $this->render('contact', ['model' => $model]);
    }

    public function actionBlog()
    {
        $this->setMeta('Блог','blog');
        $posts = Post::find()->limit(3)->asArray()->all();
        $query= Blog::find()->orderBy(['id' => SORT_DESC])->asArray();
        $pages = new Pagination(['totalCount' => $query->count(), 'pageSize' => 4, 'forcePageParam' => false, 'pageSizeParam' => false]);
        $blog = $query->offset($pages->offset)->limit($pages->limit)->all();

        return $this->render('blog', compact('blog', 'pages', 'posts'));
    }

    public function actionBlogSingle()
    {
        $id = Yii::$app->request->get('id');
        $this->setMeta('Блог');
        $posts = Post::find()->limit(3)->asArray()->all();
        $single_blog = Blog::findOne($id);
        $model = new Reviews();
        if($model->load(Yii::$app->request->post()) && $model->validate()){
            $model->request_uri = $_POST['request_uri'];

            $time = date('H_i_s', gmdate('U')); // 12_50_29
            $imageMain = $time.'_main';
            $model->image = UploadedFile::getInstance($model, 'image');
            if($model->image == null){
                $model->save();
            }else{
                $model->image->saveAs('images/reviews/' . $imageMain . '.' . $model->image->extension);
                $model->avatar = $imageMain. '.' . $model->image->extension;
            }
            //debug(Yii::$app->request->post()); die;
            $model->save();

            return $this->refresh();
        }
        $rev = Reviews::find()->where(['status' => '1'])->asArray()->all();
        //debug($rev); die;
        return $this->render('blog-single', compact('single_blog', 'posts', 'rev', 'model'));
    }
    public function actionServices()
    {
        $this->setMeta('Услуги');
        return $this->render('services');
    }
    public function actionAbout()
    {
        $this->setMeta('О компании');
        $personal = Personal::find()->asArray()->all();
        /*Testimonials*/
        $model2 = new TestimonialsForm();
        $form2 = new Testimonials();


        if($model2->load(Yii::$app->request->post()) && $model2->validate()){

            $form2->img = UploadedFile::getInstance($model2, 'image_file');

            $time = date('H_i_s', gmdate('U')); // 12_50_29
            $imageMain = $time.'_main';

            if(!empty($form2->img) && $form2->img ->size !== 0) {
                //if ($form2->img){

                $form2->img->saveAs('images/testimonials/' . $imageMain . '.' . $form2->img->extension);
                //}
            }
            $form2->name = Html::encode($model2->name_form);
            $form2->last_name = Html::encode($model2->last_name_form);
            $form2->content = Html::encode($model2->content_form);
            $form2->img = $imageMain . '.' . $form2->img->extension;

            $form2->save();
            Yii::$app->session->setFlash('success', 'Спасибо за Ваш отзыв!');
            return $this->refresh();

        }

        $item_test = Testimonials::find()->where(['active' => '1']) ->andWhere(['vis' => '1'])->orderBy(['id' => SORT_ASC])->limit(3)->all();
        $model = new ContactUs();

        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'], $model->email)) {

            return $this->refresh();
        }
        return $this->render('about', compact('model', 'personal', 'tesls', 'model2', 'item_test'));
        //return $this->render('about');
    }

    public function actionSearch()
    {
        $this->layout = 'main_shop_search';
        $this->setMeta('Поиск Товаров');
        $q = Yii::$app->request->get('q'); // Второй вариант получения $id get запросом
        //debug($q);
        $query = Products::find()->where(['like', 'prod_name', $q]);
        $pages = new Pagination(['totalCount' => $query->count(), 'pageSize' => 6, 'forcePageParam' => false, 'pageSizeParam' => false]);
        $q_prod = $query->offset($pages->offset)->limit($pages->limit)->orderBy(['price' => SORT_ASC])->asArray()->all();
        $max = Products::find()->where(['like', 'prod_name', $q])->orderBy(['price' => SORT_DESC])->limit(1)->asArray()->all();

        return $this->render('search',compact('q_prod', 'pages', 'q', 'max'));
    }

    public function actionAndlogin()
    {
    	return $this->render('andlogin');
    }
    
    public function actionGetdata(){
        
		$json_array = Products::find()->asArray()->all();
   	    return $this->renderPartial('getdata',compact('json_array'));
	}

}