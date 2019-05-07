<?php

namespace app\controllers;

use Yii;
use app\models\Products;
use app\models\Cart;
use app\models\OrdersCart;
use app\models\OrdersItems;


class CartController extends AppController
{
    /**
     * @return bool
     */
    public function actionAdd()
    {
        //$this->layout = 'main_shop';
        $id = Yii::$app->request->get('id');
        $qty = (int)Yii::$app->request->get('qty');
        $qty = !$qty ? 1 : $qty;
        $product = Products::findOne($id);
        if (empty($product)) return false;
        //debug($product);
        $session = Yii::$app->session;
        $session->open();
        $cart = new Cart();
        $cart->addToCart($product, $qty);
        if (!Yii::$app->request->isAjax) {
            return $this->redirect(Yii::$app->request->referrer);
        }
        $this->layout = false;
        return $this->render('cart-front', compact('session'));
    }

    /*Удаление всех заказов корзины */
    public function actionClear()
    {
        $session = Yii::$app->session;
        $session->open();

        $session->remove('cart');
        $session->remove('cart.qty');
        $session->remove('cart.sum');

        $this->layout = false;
        return $this->render('cart-front', compact('session'));
    }

    /*Удаление одного заказа из модального окна*/
    public function actionDelete()
    {
        $id = Yii::$app->request->get('id');

        $session = Yii::$app->session;
        $session->open();

        $reserve = new Cart();
        $reserve->recalc($id);

        $this->layout = false;
        return $this->render('cart-front', compact('session'));
    }

    /*Удаление одного заказа из View*/
    public function actionDeleteView()
    {
        $id = Yii::$app->request->get('id');

        $session = Yii::$app->session;
        $session->open();

        $reserve = new Cart();
        $reserve->recalc($id);

        $this->layout = false;
        return $this->render('cart-front', compact('session'));
    }

    public function actionCartView()
    {
        $this->layout = 'main_shop';
        $this->setMeta('Корзина');

        $session = Yii::$app->session;
        $session->open();

        $orders = new OrdersCart();

        if ($orders->load(Yii::$app->request->post())) {
            $orders->qty = $session['cart.qty'];
            $orders->sum = $session['cart.sum'];
            if(!Yii::$app->user->isGuest) {
                $orders->user_id = Yii::$app->user->id;
                $orders->email = Yii::$app->request->post('email');
            }

            if ($orders->save()) {
                $this->saveOrderItems($session['cart'], $orders->id,$orders->user_id );
                Yii::$app->session->setFlash('success', 'Ваш заказ принят. Наш менеджер с Вами вскоре свяжется.');
                Yii::$app->mailer->compose(['html' => 'order'],compact('session'))
                        ->setFrom(['bej0j88@yandex.ru' => 'Beauty & SPA Tomsk'])
                        ->setTo($orders->email)
                        ->setSubject('Заказанные продукты')
                        ->send();
                $_SESSION['order'] = $orders->id;
                if(!Yii::$app->user->isGuest) {
                    $_SESSION['user_id'] = $orders->user_id;
                }
                return $this->redirect('/cart/yaform');
            } else {
                Yii::$app->session->setFlash('error', 'Не удалось принять Ваш заказ, к сожалению');
            }
        }


        return $this->render('cart-view', compact('session', 'orders'));
    }

    protected function saveOrderItems($items, $orders_id, $user_id)
    {
        foreach ($items as $id => $val) {

            $order_item = new OrdersItems();

            $order_item->orders_cart_id = $orders_id;
            $order_item->products_id = $id;
            if(!Yii::$app->user->isGuest) {
                $order_item->u_id = $user_id;
            }
            $order_item->name = $val['name'];
            $order_item->price = $val['price'];
            $order_item->qty_items = $val['qty'];
            $order_item->sum_items = $val['qty'] * $val['price'];

            $order_item->save();

        }
    }

    // Платёжная система
    public function actionSuccess()
    {
        $this->layout = 'main_shop';
        $session = Yii::$app->session;
        $session->open();
        $o_id =  $_SESSION['order'];

        return $this->render('success', compact('session','o_id'));
    }

    public function actionYaform()
    {
        $this->layout = 'main_shop';
        $session = Yii::$app->session;
        $session->open();

        $o_id = $_SESSION['order'];
        $o_sum = $session['cart.sum'];

        return $this->render('yaform', compact('o_id', 'o_sum'));
    }

    public function actionMessage()
    {
        $this->enableCsrfValidation = false;
        $this->layout = false;
        $secret = 'TOg8j0i3HqpIOWNHpQlsDQ/4';
        $r = array(
            'notification_type' => $_POST['notification_type'],
            'operation_id'      => $_POST['operation_id'],
            'amount'            => $_POST['amount'],
            'currency'          => $_POST['intval'],
            'datetime'          => $_POST['datetime'],
            'sender'            => $_POST['sender'],
            'codepro'           => $_POST['codepro'],
            'label'             => $_POST['label']
        );

        debug($_POST['sha1_hash']);

        $hash = sha1($r['notification_type'].'&'.
            $r['operation_id'].'&'.
            $r['amount'].'&'.
            $r['currency'].'&'.
            $r['datetime'].'&'.
            $r['sender'].'&'.
            $r['codepro'].'&'.
            $secret.'&'.
            $r['label']);

        if ($hash != $r['sha1_hash']) {

            $id = $r['label'];
            $res = OrdersCart::findOne($id);
            $res->status = 1;
            $res->save();

            file_put_contents(dirname(__FILE__) . '/history.php', $r['datetime']. ' На сумму '. $r['amount']. ' ID Заказа '. $r['label'] . PHP_EOL , FILE_APPEND);

            // exit('Verification is not passed. SHA1_HASH does not match.');
        }

        return $this->render('message');
    }

}