<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use app\models\Signup;
use app\models\LoginForm as Login;
use yii\web\ForbiddenHttpException;
use app\models\ContactForm;
use app\models\Users;
use app\models\User;
use yii\helpers\Json;
use app\models\OrdersItems;
use app\models\OrdersCart;
use app\models\Products;


class SiteController extends AppController
{


    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {

        $this->layout = 'main';
        return $this->render('index');
    }

    /**
     * Login action.
     *
     * @return string
     */
    public function actionLogin()
    {
        $this->layout = 'login_signup';
        if (!Yii::$app->getUser()->isGuest) {
            return $this->goHome();
        }

        $model = new Login();
        if ($model->load(Yii::$app->getRequest()->post()) && $model->login()) {
            return $this->goBack();
        } else {
            return $this->render('login', [
                'model' => $model,
            ]);
        }
    }

    public function actionSignup()
    {
        $this->layout = 'login_signup';
        $model = new Signup();
        if ($model->load(Yii::$app->getRequest()->post())) {
            if ($user = $model->signup()) {
                return $this->goHome();
            }
        }

        return $this->render('signup', [
            'model' => $model,
        ]);
    }

    /**
     * Logout action.
     *
     * @return string
     */
    public function actionLogout()
    {
        $this->layout = 'main_rose';
        Yii::$app->getUser()->logout();

        return $this->goHome();
    }

    /**
     * Displays contact page.
     *
     * @return string
     */
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'])) {
            Yii::$app->session->setFlash('contactFormSubmitted');

            return $this->refresh();
        }
        return $this->render('contact', [
            'model' => $model,
        ]);

    }

    
    public function actionAbout()
    {
        return $this->render('about');
    }
    
   public function actionALogin()
    {
        $this->enableCsrfValidation = false;
  if(Yii::$app->request->post()){
        $email = Yii::$app->request->post('email');
        $password = Yii::$app->request->post('password');

        $query = User::find()->where(['email' => $email])->all();
        $result = [];
        if($query && !empty($query)){
                if(password_verify($password, $query[0]['password_hash'])){
                    
                    array_push($result, ["code" => "1", "message" => "success", "name" => $query[0]['username'], "email" => $query[0]['email'], "id" => $query[0]['id']]);
                    return $this->renderPartial('a_login', compact('result'));
                }else {

                    array_push($result, ["code" => "0", "message" => "error"]);
                    return $this->renderPartial('a_login', compact('result'));
                }
            }
        }
        return $this->renderPartial('a_login');
    }
    
    public function actionASignup(){
       $this->enableCsrfValidation = false;
       
        $model = new User();
        
        $name = Yii::$app->request->post('name');
    	$email = Yii::$app->request->post('email');
    	$password = Yii::$app->request->post('password');
    	$password = password_hash($password, PASSWORD_DEFAULT);
    	
    	$result = [];
    	$res = User::find()->where(['email' => $email])->all();
       
        if(Yii::$app->request->post()){
            
            if(!empty($res)){
                $code = "reg_fail";
                $message = "Этот E-mail уже существует!";
                array_push($result, array("code" => $code, "message" => $message));
                return $this->renderPartial('a_signup', compact('result'));
                
            }else{
                
                $model->username = $name;
                $model->email = $email;
                $model->password_hash = $password;
                $model->status = 10;
                $model->save(); 
                
                
                $code = "code_success";
                $message = "Добро пожаловать " . $name . "!";
                array_push($result, array("code" => $code, "message" => $message));
                return $this->renderPartial('a_signup', compact('result'));
            }
	    
    	
        }else{
    	  array_push($result, array("message" => "Request is incorrect!"));
    	  return $this->renderPartial('a_signup', compact('result'));
        }
    }
    
    public function actionGetOrders()
    {
            $id = Yii::$app->request->post('id');
        
                if(Yii::$app->request->post()){
               
                $query = OrdersItems::find()->with('products')->where(['u_id' => $id])->asArray()->all();
                $query2 = OrdersCart::find()->where(['user_id' => $id])->asArray()->all();
                
                return $this->renderPartial('get_orders', compact('query', 'query2'));
            }
      
        return $this->renderPartial('get_orders');
    }
    
    public function actionAddToCart()
    {
        $prod_id = Yii::$app->request->post('prod_id');
        $u_id = Yii::$app->request->post('u_id');
        
        $qty = !$qty ? 1 : $qty;
        $product = Products::findOne(['prod_id' => $prod_id]);
        $user = User::findOne(['id' => $u_id]);
        $orders = new OrdersCart();
      
        
        $success = "Goods successfully add to cart!";
        $error = "Something was wrong... Try else, please!";
        
        $orders->user_id = $user->id;
        $orders->qty = $qty;
        $orders->sum = $qty * $product->price;
        $orders->name = $user->username;
        $orders->email = $user->email;
        if($orders->save()){
            $id = $orders->id;
            $order_item = new OrdersItems();
            $orders = new OrdersCart();

            $order_item->orders_cart_id = $id;
            $order_item->products_id = $product->prod_id;
            $order_item->u_id = 3;
            $order_item->name = $product->prod_name;
            $order_item->price = $product->price;
            $order_item->qty_items = $qty;
            $order_item->sum_items = $qty * $product->price;

            $order_item->save();
            
            return $this->renderPartial('add_to_cart', compact('success'));
        }else{
             return $this->renderPartial('add_to_cart', compact('error'));
        }
        
        return $this->renderPartial('add_to_cart');
    }
    
    
    /*===================================Action Insert=======================================*/
    
    public function actionInsert(){
        
     $this->enableCsrfValidation = false;
     $query_all = Yii::$app->request->post();
     
    
     /*================================Task 1==========================*/
   
        if($query_all){
            
            
            // Get ID User from POST Request (Latest element value)
            $user_id = array_pop($query_all);
            
            $sum_all = array_pop($query_all);
           // Get all summa
            $qty_all = array_pop($query_all);
            //  Get all quantity
             $phone = array_pop($query_all);
            //  Get phone
             $address = array_pop($query_all);
            //  Get address
              
            // Find All User Data
            $user_data = User::find()->where(['id' => $user_id])->one();
            
            $query_string = "";
             $kv = [];
            foreach ($query_all as $key => $value) { 
                $kv[] = "$key,$value";
              }
              
               $query_string = join("", $kv);  
               $query_string = substr($query_string, 0, -1);
               $query_string = explode(',', $query_string);
               
               $id = [];
               $qty = [];
                            foreach($query_string as $m => $vil){
                                if($m % 2 === 0){
                                    $id[] = $vil;
                                }else if($m % 2 != 0){
                                    $qty[] = $vil;
                                }
                             }
                             
                       
                              // Add to OrdersCart table to MySql db
                                    $o_cart = new OrdersCart();
                                    $o_cart->user_id =  $user_data->id;
                                    $o_cart->email = $user_data->email;
                                    $o_cart->name = $user_data->username;
                                    $o_cart->address = $address;
                                    $o_cart->phone = $phone;
                                    $o_cart->qty = $qty_all;
                                    $o_cart->sum = $sum_all;
                                    if($o_cart->save(false)){
                                        foreach($id as $k => $val){
                                             // Add to OrdersItems table to MySql db
                                                    $model = new OrdersItems();
                                                    $result = Products::find()->where(['prod_id' => $val])->one();
                                                    $model->products_id = $result->prod_id;
                                                    $model->name = $result->prod_name;
                                                    $model->price = $result->price;
                                                    $model->qty_items = $qty[$k];
                                                    $model->sum_items = $qty[$k] * $result->price;
                                                    $model->u_id = $user_data->id;
                                                    $model->orders_cart_id = $o_cart->id;
                                                    $model->save(false);
                                   
                                        }
                                    }
                                    
      
                          }
           
        
          /*================================End Task 1==========================*/
        
      //  return $this->renderPartial('insert', compact('pieces', 'arr', 'prod', 'query_id'));
    }
    
 
    
   
    
   
}
