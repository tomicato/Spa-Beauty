<?php
namespace app\commands;

use yii\console\Controller;
use Yii;
use app\models\User;
use yii\web\ForbiddenHttpException;
class RbacController extends Controller
{
    public function actionAssign($role, $username)
    {
        $user = User::find()->where(['username' => $username])->one();
        if (!$user) {
            throw new Exception("There is no user \"$username\".");
        }

        $auth = Yii::$app->authManager;
        $roleObject = $auth->getRole($role);
        if (!$roleObject) {
            throw new Exception("There is no role \"$role\".");
        }

        $auth->assign($roleObject, $user->id);
    }

}