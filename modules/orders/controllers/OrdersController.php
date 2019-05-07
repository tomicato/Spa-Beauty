<?php

namespace app\modules\orders\controllers;

use app\models\User;
use Yii;
use app\models\OrdersCart;
use app\models\OrdersCartSearch;
use app\models\OrdersItems;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use app\models\Cart;

class OrdersController extends Controller
{

    public $enableCsrfValidation = false;

    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['create', 'delete', 'update', 'view', 'logout', 'index'], //only be applied to
                'rules' => [
                    [
                        'allow' => false,
                        'actions' => ['create', 'delete', 'update', 'view', 'logout', 'index'],
                        'roles' => ['?'],
                    ],
                    [
                        'allow' => true,
                        'actions' => [/*'create',  'update', 'view',*/ 'delete', 'logout', 'index'],
                        'roles' => ['luser'],
                    ],
                    [
                        'allow' => true,
                        'actions' => ['create', 'update', 'delete', 'index', 'view', 'logout'],
                        'roles' => ['Admin', 'moderator'],
                    ],
                    [
                        'allow' => true,
                        'actions' => ['rbac/*'],
                        'roles' => ['Admin'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }


    public function actionIndex()
    {
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager'){
            $this->layout = '@app/modules/views/layouts/main';
        }else{
            $this->layout = '@app/modules/views/layouts/main_admin';
        }
        $id = Yii::$app->user->id;

        if(!Yii::$app->user->can('admin') && !Yii::$app->user->can('moderator')){
            $model = OrdersCart::find()->where(['user_id' => $id])->asArray()->all();
            return $this->render('index', compact('model'));
        }else{
            $model = OrdersCart::find()->asArray()->all();
            return $this->render('index', compact('model', 'id'));
        }
    }


    public function actionView($id)
    {
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager'){
            $this->layout = '@app/modules/views/layouts/main';
        }else{
            $this->layout = '@app/modules/views/layouts/main_admin';
        }
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }


    public function actionCreate()
    {
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager'){
            $this->layout = '@app/modules/views/layouts/main';
        }else{
            $this->layout = '@app/modules/views/layouts/main_admin';
        }
        $model = new OrdersCart();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }


    public function actionUpdate($id)
    {
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager'){
            $this->layout = '@app/modules/views/layouts/main';
        }else{
            $this->layout = '@app/modules/views/layouts/main_admin';
        }
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }


    public function actionDelete($id)
    {
        $this->enableCsrfValidation = false;
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager'){
            $this->layout = '@app/modules/views/layouts/main';
        }else{
            $this->layout = '@app/modules/views/layouts/main_admin';
        }
        $session = Yii::$app->session;
        $session->open();

        $orders_items = \Yii::$app->db->createCommand()->delete('orders_items', ['orders_cart_id' => $id])->execute();
        $this->findModel($id)->delete();


        if(!empty($session['cart']) && !empty($_SESSION['order'])){
            $session->remove('order');
            $session->remove('cart');
            $session->remove('cart.qty');
            $session->remove('cart.sum');
        }

        return $this->redirect(['index']);
    }


    protected function findModel($id)
    {
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager'){
            $this->layout = '@app/modules/views/layouts/main';
        }else{
            $this->layout = '@app/modules/views/layouts/main_admin';
        }
        if (($model = OrdersCart::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
