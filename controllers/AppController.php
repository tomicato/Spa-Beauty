<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 06.06.2018
 * Time: 22:46
 */

namespace app\controllers;


use yii\web\Controller;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use yii\web\ForbiddenHttpException;

class AppController extends Controller
{
    public $layout = 'main_rose';
	//public $params;
    /**
     * @param null $title
     * @param null $keywords
     * @param null $description
     */
    protected function setMeta($title = null, $keywords = null, $description = null)
    {

        $this->view->title = $title;
        $this->view->registerMetaTag(['name' => 'keywords', 'content' => "$keywords"]);
        $this->view->registerMetaTag(['name' => 'description', 'content' => "$description"]);

    }
    protected function linkTag($link = null)
    {
        $this->view->registerLinkTag(['rel' => '', 'type' => '', 'href' => '/post']);
    }
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['index'], //only be applied to
                'rules' => [
                    [
                        'allow' => true,
                        'actions' => ['index'],
                        'roles' => ['luser'],
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index'],
                        'roles' => ['Admin', 'moderator'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST', 'GET'],
                ],
            ],
        ];
    }

}