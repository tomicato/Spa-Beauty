<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;

class OrdersItems extends ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'orders_items';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['orders_cart_id', 'products_id', 'name', 'price', 'qty_items', 'sum_items'], 'required'],
            [['orders_cart_id', 'products_id', 'qty_items', 'u_id'], 'integer'],
            [['price', 'sum_items'], 'number'],
            [['name'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'u_id' => 'ID Пользователя',
            'orders_cart_id' => '№ Заказа',
            'products_id' => 'ID Прдукта',
            'name' => 'Наименование',
            'price' => 'Цена',
            'qty_items' => 'Кол-во',
            'sum_items' => 'Сумма',
        ];
    }

    public function getOrdersCart()
    {
        return $this->hasOne(OrdersCart::className(),['id' => 'orders_cart_id']);
    }

    public function getProducts()
    {
        return $this->hasOne(Products::className(),['prod_id' => 'products_id']);
    }
}
