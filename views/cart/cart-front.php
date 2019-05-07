
<h4>Кол-во товаров в корзине</h4>
    <?php if(!empty($session['cart'])):?>

        <ul>
            <?php foreach($session['cart'] as $key => $val):?>
                <li class="sing-cart-list">
                    <div class="cart-img"><img src="<?= $val['img']?>" alt="<?= $val['name']?>" width="80" height="120" class="img-thumbnail"></div>
                    <div class="cart-text">
                        <p>
                            <span class="d-block"><?= $val['name']?></span>
                            <span class="d-block"><strong>₽ <?= $val['price']?> x <?= $val['qty']?></strong></span>
                            <span> <i class="fa fa-star"></i></span>
                            <span> <i class="fa fa-star"></i></span>
                            <span> <i class="fa fa-star"></i></span>
                            <span> <i class="fa fa-star"></i></span>
                            <span class="cg"> <i class="fa fa-star"></i></span>
                        </p>
                    </div>
                   <div class="cart-remove" data-id="<?= $val['id']?>"><span><i class="fa fa-close"></i></span></div>
                </li>
            <?php endforeach; ?>
        </ul>
        <div class="cart-footer"><br>
            <div class="Cfooter-top"> <span>товаров</span> <span> <?= $session['cart.qty']?></span>шт.</div>
            <div class="Cfooter-top"> <span>сумма</span> <span> <?= $session['cart.sum']?></span>₽</div><br><hr>
            <div class="Cfooter-bottom">
                <a href="/cart-view" class="btn-mr xsl pill th-primary-shop">КОРЗИНА</a>
                <a href="#!" class="btn-mr xsl pill center-del"  onclick="clearCart()">ОЧИСТИТЬ</a>
            </div><br><br>
        </div>

    <?php else:?>
        <h3>Корзина пуста</h3>
    <?php endif; ?>

