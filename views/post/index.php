<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 27.06.2018
 * Time: 21:49
 */
use app\components\MenuWidget;
use yii\helpers\Url;
use yii\helpers\Html;
use yii\widgets\LinkPager;
use yii\jui\DatePicker;
?>
<style>
    .blog-text p{
        text-align: left;
    }
    .single--sidaber .ui-widget.ui-widget-content{
        border: none;
        background: transparent;
        margin-bottom: 350px;
    }
</style>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

<script>
    $( function() {
        $( "#datepicker" ).datepicker();
    } );
</script>
<div class="blog-grid-padding blg__list">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <?php foreach($model as $item):?>
                    <div class="single__blog blog-grid list-view animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                        <div class="blog-thumb">
                            <a href="/full-post/<?= $item['id']?>"><img src="images/posts/<?= $item['img']?>" alt="<?= $item['title']?>"></a>
                        </div>
                        <!-- end blog thumb -->
                        <div class="blog-text">
                            <h2><a href="/full-post/<?= $item['id']?>"><?= $item['title']?></a> </h2>
                            <ul class="blog-meta-data">
                                <li><a href="#!"><i class="fa fa-user"></i>От <?= $item['writed_by']?></a></li>
                                <li><a href="#!"><i class="fa fa-calendar"></i>
                                        <?= Yii::$app->formatter->asDate($item['created_at'], 'long')?>
                                    </a>
                                </li>
                              <!--  <li><a href="#!"><i class="fa fa-comment"></i><?/*= $item['section']*/?></a></li>-->
                            </ul>
                            <p><?= $item['description']?></p>
                            <a href="/full-post/<?= $item['id']?>" class="new-read--more">Подробно</a>

                        </div>
                    </div>
                <?php endforeach;?>
                <?php
                // отображаем ссылки на страницы
                try {
                    echo LinkPager::widget([
                        'pagination' => $pages,
                    ]);
                } catch (Exception $e) {
                }
                ?>
            </div>


            <div class="col-lg-4">
                <div class="sibeader--layout">
                    <div class="single--sidaber">
                        <h3 class="sidebar--titile">Поиск</h3>
                        <input type="text" class="form-control" placeholder="Введите  запрос...">
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
                            <?php foreach($posts as $post):?>
                                <div class="mini-recent-post">
                                    <div class="mini-post-thumb">
                                        <a href="/full-post/<?= $post['id']?>">
                                            <img src="/images/posts/<?= $post['img']?>" alt="<?= $post['title']?>" width="90" height="110" class="img-responsive">
                                        </a>
                                    </div>

                                    <div class="mini-recent--post--text">
                                        <h4><a href="/full-post/<?= $post['id']?>"><?= $post['title']?></a></h4>
                                        <span><a href="#!"><?= Yii::$app->formatter->asDate($post['updated_at'], 'long');?></a></span>
                                    </div>

                                </div>
                            <?php endforeach;?>
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
                                    //'language' => 'ru',
                                    //'dateFormat' => 'yyyy-MM-dd',
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

