<?php

namespace app\modules\category\controllers;

use Yii;
use app\models\Categories;

use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\data\ActiveDataProvider;
use yii\filters\AccessControl;
use yii\web\ForbiddenHttpException;

class CategoryController extends Controller
{
    public $layout = '@app/modules/views/layouts/main';

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
                        'actions' => ['create', 'delete', 'update', 'view', 'logout', 'index'],
                        'roles' => ['luser'],
                    ],
                    [
                        'allow' => false,
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
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager') {
            $dataProvider = new ActiveDataProvider([
                'query' => Categories::find()->with('categories'),
            ]);

            return $this->render('index', [
                //'searchModel' => $searchModel,
                'dataProvider' => $dataProvider,
            ]);
        }else{
            throw new ForbiddenHttpException('Вам запрещено заходить на эту страницу.');
        }
    }


    public function actionView($id)
    {
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager') {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
        }else{
            throw new ForbiddenHttpException('Вам запрещено заходить на эту страницу.');
        }
    }


    public function actionCreate()
    {
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager') {
        $model = new Categories();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
         }else{
        throw new ForbiddenHttpException('Вам запрещено заходить на эту страницу.');
        }
    }


    public function actionUpdate($id)
    {
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager') {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {

            return $this->render('update', [
                'model' => $model,
            ]);
        }
        }else{
            throw new ForbiddenHttpException('Вам запрещено заходить на эту страницу.');
        }
    }

    public function actionDelete($id)
    {
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager') {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
        }else{
        throw new ForbiddenHttpException('Вам запрещено заходить на эту страницу.');
        }
    }


    protected function findModel($id)
    {
        if (($model = Categories::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
