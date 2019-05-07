<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 06.06.2018
 * Time: 19:38
 * <a href="/shop/view/<?= $categories['id'] ?>">
 * <a href="<?= \yii\helpers\Url::to(['/shop/view/','categories_id' => $categories['id']])?>">
 */

?>
<br/><li class="hov list-group-item">

    <a href="<?= \yii\helpers\Url::to(['/shop/category/' .$categories['id']])?>">
        <?=$categories['title']?>
        <?php if(isset($categories['childs'])):?>
        <span class="right-arrow"><i class="fa fa-sort-desc" aria-hidden="true">&nbsp;</i></span>
            <!--<span class="badge  badge-pill">(0)</span>-->
            <!--<span class="pull-right"><i class="fa fa-plus" aria-hidden="true">&nbsp;</i></span>-->
        <?php endif;?>
    </a>
    <?php if(isset($categories['childs'])):?>
        <ul><?= $this->getMenuHtml($categories['childs'])?></ul>
    <?php endif;?>
</li>