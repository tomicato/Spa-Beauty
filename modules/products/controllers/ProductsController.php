<?php

namespace app\modules\products\controllers;

use Yii;
use app\models\Products;
use app\models\ProductsSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\web\UploadedFile;
use yii\web\ForbiddenHttpException;

class ProductsController extends Controller
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
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager') {
        $searchModel = new ProductsSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
        $dataProvider->pagination->pageSize=5;

        return $this->render('index', [
            'searchModel' => $searchModel,
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
        $model = new Products();

        if ($model->load(Yii::$app->request->post())) {
            $time = date('H_i_s', gmdate('U')); // 12_50_29
            $imageMain = $time.'_main';

            $model->image = UploadedFile::getInstance($model, 'image');
            $model->image_big = UploadedFile::getInstance($model, 'image_big');

            if($model->image == null && $model->image_big == null){
                $model->save();
            }else{
                $model->image->saveAs('images/product/' . $imageMain . '.' . $model->image->extension);
                $model->image_big->saveAs('images/product/big/' . $imageMain . '.' . $model->image_big->extension);
                $model->img = $imageMain. '.' . $model->image->extension;
                $model->img_big = $imageMain. '.' . $model->image_big->extension;
            }
            $model->save();


            Yii::$app->session->setFlash('success', 'Позиция обновлена.');

            return $this->redirect(['view', 'id' => $model->prod_id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
        }else{
            throw new ForbiddenHttpException('Вам запрещено заходить на эту страницу.');
        }
    }


    public function actionUpdate($id)
    {
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager') {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post())) {

            $time = date('H_i_s', gmdate('U')); // 12_50_29
            $imageMain = $time.'_main';

            $model->image = UploadedFile::getInstance($model, 'image');
            $model->image_big = UploadedFile::getInstance($model, 'image_big');

            if($model->image == null && $model->image_big == null){
                $model->save();
            }else{
                $model->image->saveAs('images/product/' . $imageMain . '.' . $model->image->extension);
                $model->image_big->saveAs('images/product/big/' . $imageMain . '.' . $model->image_big->extension);

                $model->img = $imageMain. '.' . $model->image->extension;
                $model->img_big = $imageMain. '.' . $model->image_big->extension;
            }
            $model->save();


            Yii::$app->session->setFlash('success', 'Позиция обновлена.');
            return $this->redirect(['view', 'id' => $model->prod_id]);
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
        if (($model = Products::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
