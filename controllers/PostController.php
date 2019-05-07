<?php

namespace app\controllers;

use Yii;
use app\models\Post;
use app\models\Reviews;
use yii\web\UploadedFile;
use yii\data\Pagination;

class PostController extends AppController
{

     public $layout = 'main_shop';

    public function actionIndex()
    {
        $this->setMeta('Статьи','post');

        $query= Post::find()->orderBy(['id' => SORT_DESC])->asArray();
        $pages = new Pagination(['totalCount' => $query->count(), 'pageSize' => 4, 'forcePageParam' => false, 'pageSizeParam' => false]);
        $model = $query->offset($pages->offset)->limit($pages->limit)->all();
        $posts = Post::find()->limit(3)->asArray()->all();
       // $model = Post::find()->asArray()->all();

        return $this->render('index', compact('model', 'pages', 'posts'));
    }

    public function actionFullPost($id)
    {
            $post = new Reviews();

        if($post->load(Yii::$app->request->post()) && $post->validate()){
            $post->request_uri = $_POST['request_uri'];
            $time = date('H_i_s', gmdate('U')); // 12_50_29
            $imageMain = $time.'_main';

            $post->image = UploadedFile::getInstance($post, 'image');
            if($post->image == null){
                $post->save();
            }else{
                $post->image->saveAs('images/reviews/' . $imageMain . '.' . $post->image->extension);
                $post->avatar = $imageMain. '.' . $post->image->extension;
            }
            //debug(Yii::$app->request->post()); die;
            $post->save();

            return $this->refresh();
        }
        $rev = Reviews::find()->where(['status' => '1'])->asArray()->all();
        $posts = Post::find()->limit(3)->asArray()->all();

            $this->setMeta('Статьи','post');
            $this->linkTag('post');
            $model = Post::findOne($id);
            return $this->render('full-post', compact('model', 'post', 'rev', 'posts'));

    }
}