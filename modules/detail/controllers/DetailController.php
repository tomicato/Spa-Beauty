<?php

namespace app\modules\detail\controllers;

use Yii;
use app\models\OrdersItems;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\data\Pagination;

class DetailController extends Controller
{
    public $enableCsrfValidation = false;
    //public $layout = '@app/modules/views/layouts/main';
    /**
     * {@inheritdoc}
     */
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
                        'actions' => [/*'create',  'update', 'view', 'delete', */'logout', 'index'],
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
        // Выбор $layouts в зависимости от роли
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager'){
            $this->layout = '@app/modules/views/layouts/main';
        }else{
            $this->layout = '@app/modules/views/layouts/main_admin';
        }

        // Запрос к БД в зависимости от роли
        $query = OrdersItems::find()->with('products')->asArray();
        $pages = new Pagination(['totalCount' => $query->count(), 'pageSize' => 5, 'forcePageParam' => false, 'pageSizeParam' => false]);
        $items_all = $query->offset($pages->offset)->limit($pages->limit)->all();
        $items_order = OrdersItems::find()->with('products')->where(['u_id' => Yii::$app->user->identity->id])->all();

        // Рендеринг во view в зависимости от роли
        if(!Yii::$app->user->can('admin') && !Yii::$app->user->can('moderator')) {
            return $this->render('index', compact('items_order'));
        }elseif(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager'){

            return $this->render('index', compact('items_all', 'pages'));
        }else{
            return $this->render('index');
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
        $model = new OrdersItems();

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

        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    protected function findModel($id)
    {
        if (($model = OrdersItems::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
