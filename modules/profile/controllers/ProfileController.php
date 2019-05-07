<?php

namespace app\modules\profile\controllers;

use app\models\User;
use Yii;
use app\models\Profile;
use yii\data\ActiveDataProvider;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use app\models\OrdersCart;
use yii\web\ForbiddenHttpException;

class ProfileController extends Controller
{

    public $layout = '@app/modules/views/layouts/main';
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['create', 'delete', 'update', 'view', 'logout', 'index', 'password'], //only be applied to
                'rules' => [
                    [
                        'allow' => false,
                        'actions' => ['create', 'delete', 'update', 'view', 'logout', 'index'],
                        'roles' => ['?'],
                    ],
                    [
                        'allow' => true,
                        'actions' => [/*'create', 'delete',  'view','update', */'password', 'logout', 'index'],
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
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager') {
        $dataProvider = new ActiveDataProvider([
            'query' => Profile::find(),
        ]);

        return $this->render('index', [
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
        $model = new Profile();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->user_id]);
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
            return $this->redirect(['view', 'id' => $model->user_id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
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

    public function actionPassword()
    {

        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager'){
            $this->layout = '@app/modules/views/layouts/main';
        }else{
            $this->layout = '@app/modules/views/layouts/main_admin';
        }
       // if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager') {
        $user = Yii::$app->user->identity;
        if($user->load(Yii::$app->request->post())&& $user->validate()){

            $user->password_hash = Yii::$app->security->generatePasswordHash($user->new_pwd);
            $user->save();

            Yii::$app->session->setFlash('success', 'Вы успешно изменили пароль!');
            return $this->refresh();
        }
        return $this->render('password', compact('user'));
        /*}else{
            throw new ForbiddenHttpException('Вам запрещено заходить на эту страницу.');
        }*/
    }

    public function actionOwnData()
    {
        if(Yii::$app->user->identity->username === 'Admin' || Yii::$app->user->identity->username === 'manager'){
            $this->layout = '@app/modules/views/layouts/main';
        }else{
            $this->layout = '@app/modules/views/layouts/main_admin';
        }
        $qty_prod = OrdersCart::find()->where(['user_id' => Yii::$app->user->identity->id])->all();
        $qty_all = count($qty_prod); //debug($qty_all); die;
        $u_data = User::findOne(Yii::$app->user->identity->id);

        return $this->render('own-data',compact('qty_all', 'u_data'));
    }


    protected function findModel($id)
    {
        if (($model = Profile::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
