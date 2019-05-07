<?php

namespace app\controllers;

use Yii;
use app\models\Products;
use app\models\ProdsSearch;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\helpers\Json;
use app\models\Filters;

class ProdsController extends AppController
{
	public $layout = 'main_shop';

    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Products models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new ProdsSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
	    //$prod = Products::find()->where(['f_id' => 'filters.p_prod_id'])->all();
	    $val = Yii::$app->request->post('chbx');
	    //debug($val);
        return $this->render('index', compact('searchModel', 'dataProvider','val'));
    }

    /**
     * Displays a single Products model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Products model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Products();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->prod_id]);
        }


        return $this->render('create', [
            'model' => $model,
        ]);
    }

    public function actionCalc()
    {
	    /*$id = Yii::$app->request->post('el');
	    //debug($id);
	    $prod = Products::find()->where(['f_id' => $id])->all();
		$count = count($prod);
	    return Json::encode($count);*/

	   /* $prod = Products::find()
	                    ->joinWith('filters')
	                    ->where(['f_id' => 'filters.p_prod_id'])
	                    ->all();
	    debug(count($prod));*/
    }
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->prod_id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Products model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Products model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Products the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Products::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
