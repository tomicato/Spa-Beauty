<aside class="main-sidebar">

    <section class="sidebar">

        <!-- Sidebar user panel -->
        <div class="user-panel">
            <div class="pull-left image">
                <img src="<?= $directoryAsset ?>/img/user2-160x160.jpg" class="img-circle" alt="User Image"/>
            </div>
            <div class="pull-left info">
                <p>Alexander Pierce</p>

                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>

        <!-- search form -->
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search..."/>
              <span class="input-group-btn">
                <button type='submit' name='search' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
            </div>
        </form>
        <!-- /.search form -->

        <?php try {
        echo dmstr\widgets\Menu::widget(
                [
                    'options' => ['class' => 'sidebar-menu tree', 'data-widget' => 'tree'],
                    'items' => [
                        ['label' => 'Menu Yii2', 'options' => ['class' => 'header']],
                        ['label' => 'Категории товаров', 'icon' => 'list-ol', 'url' => ['/admin/category']],
                        ['label' => 'Продукция', 'icon' => 'product-hunt', 'url' => ['/admin/products']],
                        ['label' => 'Заказы продукции', 'icon' => 'first-order', 'url' => '#',
                            'items' => [
                                ['label' => 'Суммарная инф-ция', 'icon' => 'file-code-o', 'url' => ['/admin/orders']],
                                ['label' => 'Детально', 'icon' => 'dashboard', 'url' => ['/admin/detail']],
                            ],
                        ],
                        ['label' => 'Заказы услуг', 'icon' => 'first-order', 'url' => ['/order-modal']],
                        ['label' => 'Блог', 'icon' => 'list-alt', 'url' => ['/admin/blog']],
                        ['label' => 'Персонал', 'icon' => 'female', 'url' => ['/admin/personal']],
                        ['label' => 'Статьи', 'icon' => 'book', 'url' => ['/admin/post/index']],
                        ['label' => 'Комментарии', 'icon' => 'comments-o', 'url' => ['/reviews']],
                        ['label' => 'Отзывы', 'icon' => 'comments-o', 'url' => ['/admin/testimonials']],

                        ['label' => 'Вход', 'url' => ['site/login'], 'visible' => Yii::$app->user->isGuest],
                    ],
                ]
            );
        } catch (Exception $e) {
        } ?>

    </section>

</aside>
