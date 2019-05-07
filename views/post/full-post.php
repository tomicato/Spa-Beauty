<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
?>
<style>
    i.fa.fa-sign-out {
        transform: rotate(180deg);
    }
</style>


<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 27.06.2018
 * Time: 23:49
 */
use yii\jui\DatePicker;
?>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<style>
    .blog-text p{
        text-align: left;
    }
    .single--sidaber .ui-widget.ui-widget-content{
        border: none;
        background: transparent;
        margin-bottom: 350px;
    }
    .field-reviews-image > .control-label {
        display: none;
    }

    input[type="file"] {
        display: block;
        background: transparent !important;
    }

    .file-upload {
        position: relative; /* Даем возможность делать позиционирование, внутри данного элемента */
        overflow: hidden; /* Все что выходит за пределы - скрываем */
        width: 40%; /* Задаем ширину кнопки выбора файла */
        height: 45px; /* Задаем высоту кнопки выбора файла */
        color: #e52793;
        text-align: center;
    }

    .file-upload input[type="file"] {
        display: none; /* Обязательно скрываем настоящий Input File */
    }

    .file-upload label {
        /* Растягиваем label на всю возможную площадь блока .file-upload */
        display: block;
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        font-weight: 400;
    }
</style>

<div class="blog-single--page">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <?php if(!empty($model)):?>
                    <div class="single-blog-post">
                        <div class="sBD--text">
                            <img src="/images/posts/big/<?= $model['img_big']?>" alt="<?= $model['title']?>" class="img-responsive">
                            <h2><?= $model['title']?></h2>
                            <ul class="blog-meta-data">
                                <li><a href="#"><i class="fa fa-user"></i>От <?= $model['writed_by']?></a></li>
                                <li><a href="#"><i class="fa fa-calendar"></i><?= Yii::$app->formatter->asDate($model['updated_at'], 'long')?></a></li>

                            </ul>
                            <p><?= $model['content']?></p>

<!--
======================
Отзывы
======================
-->
                            <?php foreach ($rev as $val): ?>
                                <?php if($val['request_uri'] == $_SERVER['REQUEST_URI']):?>
                                <li class="single-comments">
                                    <div class="cmnts-thumb">
                                        <img src="/images/reviews/<?= $val['avatar'] ?>" alt="<?= $val['name'] ?>"
                                             class="rounded-circle img-responsive" width="80" height="80">
                                    </div>
                                    <div class="cmnts-text">
                                        <h5><?= $val['name'] ?> <span
                                                    class="time-ago-post"><?= Yii::$app->formatter->asDate($val['created_at'], 'long'); ?></span>
                                        </h5>
                                        <p><?= $val['content'] ?></p>
                                        <a href="#!" class="cmnt-link-share">
                                            <i class="fa fa-share "></i>ответить</a>
                                    </div>

                                </li>
                                <?php endif;?>
                            <?php endforeach; ?>
<!--
======================
Отзывы
======================
-->
<!--
======================
Форма для отзывов
======================
-->
                            <div class="leave-a-replay-box">
                                <h3 class="commetns-title"> Оставить отзыв</h3>

                                <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data', 'class' => 'form-row']]) ?>
                                <div class="col-md-12">
                                    <?= $form->field($post, 'content')->textarea(['rows' => 3]) ?>
                                </div>
                                <div class="col-md-6">
                                    <?= $form->field($post, 'name')->textInput(['maxlength' => true]) ?>
                                </div>
                                <div class="col-md-6">
                                    <?= $form->field($post, 'email')->textInput() ?>
                                </div>
                                <div class="col-md-6 text-center">
                                    <button type="submit" class="btn btn-outline-primary">Отправить</button>
                                </div>
                                <div class="col-md-6 text-center">
                                    <div class="file-upload btn btn-outline-primary">
                                        <label><input type="file" name="Reviews[image]"><span>Аватар</span></label>
                                    </div>
                                </div>
                                <input type="hidden" value="<?= $_SERVER['REQUEST_URI']?>" name="request_uri">
                                <br><br>

                                <?php ActiveForm::end(); ?>

                            </div>

                        </div>
                    </div>

                <?php endif; ?>

            </div>
            <br>
<!--
======================
Форма для отзывов
======================
-->
<!--
====================
Правый сайдбар
====================
-->
            <div class="col-lg-4">
                <div class="sibeader--layout">
                    <div class="single--sidaber">
                        <h3 class="sidebar--titile">Поиск</h3>

                        <input type="text" class="form-control" placeholder="Введите запрос..">
                    </div>

                    <div class="sibeader--layout">
                        <div class="single--sidaber">
                            <h3 class="sidebar--titile">КАТЕГОРИИ</h3>

                            <ul>
                                <li><a href="/blog-single/1">МАССАЖ ЛИЦА</a></li>
                                <li><a href="/blog-single/2">МАССАЖ ТЕЛА</a></li>
                                <li><a href="/blog-single/3">МАКИЯЖ</a></li>
                                <li><a href="/blog-single/4">УХОД ЗА ВОЛОСАМИ</a></li>
                                <li><a href="/blog-single/5">МАССАЖ ШЕИ</a></li>
                                <li><a href="/blog-single/6">АНТИЦЕЛЛЮЛИТ</a></li>
                                <li><a href="/blog-single/7">ПОДТЯЖКА ЛИЦА</a></li>
                            </ul>
                        </div>
<!--
=================
Свежие новости
=================
-->
                        <div class="single--sidaber">
                            <h3 class="sidebar--titile">Свежие новости</h3>
                            <?php foreach ($posts as $post): ?>
                                <div class="mini-recent-post">
                                    <div class="mini-post-thumb">
                                        <a href="/full-post/<?= $post['id'] ?>">
                                            <img src="/images/posts/<?= $post['img'] ?>" alt="<?= $post['title'] ?>"
                                                 width="90" height="110" class="img-responsive">
                                        </a>
                                    </div>

                                    <div class="mini-recent--post--text">
                                        <h4><a href="/full-post/<?= $post['id'] ?>"><?= $post['title'] ?></a></h4>
                                        <span><a href="#!"><?= Yii::$app->formatter->asDate($post['updated_at'], 'long'); ?></a></span>
                                    </div>

                                </div>
                            <?php endforeach; ?>
                        </div>
<!--
=================
Свежие новости
=================
-->
                        <div class="single--sidaber">
                            <h3 class="sidebar--titile">Календарь</h3>
                                <?php try {
                                    echo DatePicker::widget([
                                        'name' => 'from_date',
                                        'value' => $value,
                                        'inline' => true,
                                        ]);
                                    } catch (Exception $e) {
                                    }
                                ?>
                        </div>

                        <div class="single--sidaber">
                            <h3 class="sidebar--titile">социальные сети</h3>
                            <ul class="sidebar-social_s">
                                <li><a href="#"> <i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"> <i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"> <i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"> <i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"> <i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>



            </div>

        </div>
    </div>
</div>

