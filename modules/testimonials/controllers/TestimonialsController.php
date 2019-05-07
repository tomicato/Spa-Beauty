<?php

namespace app\modules\testimonials\controllers;

use Yii;
use app\models\Testimonials;
use app\models\TestimonialsSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\web\ForbiddenHttpException;


class TestimonialsController extends Controller
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

        $model = Testimonials::find()->orderBy(['id' => SORT_ASC])->asArray()->all();
        return $this->render('index', compact('model'));

    }


    public function actionView($id)
    {


        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);

    }


    public function actionCreate()
    {

        $model = new Testimonials();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {


            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }

    }




    public function actionActive()
    {

            if ($_POST['val']) {
                $res = Testimonials::updateAll(['vis' => $_POST['val']], ['id' => $_POST['home']]);
                return $res;
            }

    }

    public function actionUpdate($id)
    {


        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }

    }


    public function actionDelete($id)
    {

        $this->findModel($id)->delete();

        return $this->redirect(['index']);

    }


    protected function findModel($id)
    {
        if (($model = Testimonials::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
