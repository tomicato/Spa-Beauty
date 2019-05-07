<?php

namespace app\models;

use Yii;
use \yii\db\ActiveRecord;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;

class OrdersCart extends ActiveRecord
{
    /**
     * {@inheritdoc}
     */


    public static function tableName()
    {
        return 'orders_cart';
    }

    public function behaviors()
    {
        return [
            [
                'class' => TimestampBehavior::className(),
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at', 'updated_at'],
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['updated_at'],
                ],
                // если вместо метки времени UNIX используется datetime:
                'value' => new Expression('NOW()'),
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        if(Yii::$app->user->isGuest) {
            return [
                [['name', 'email', 'phone', 'address'], 'required'],
                [['created_at', 'updated_at'], 'safe'],
                [['qty'], 'integer'],
                [['email'], 'email'],
                [['sum', 'user_id'], 'number'],
                [['status'], 'boolean'],
                [['name', 'email', 'phone', 'address'], 'string', 'max' => 255],
            ];
        }else{
            return [
                //  [['name', 'email', 'phone', 'address'], 'required'],
                [['created_at', 'updated_at'], 'safe'],
                [['qty'], 'integer'],
                [['email'], 'email'],
                [['sum', 'user_id'], 'number'],
                [['status'], 'boolean'],
                [['name', 'email', 'phone', 'address'], 'string', 'max' => 255],
            ];
        }
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'Id Пользователя',
            'created_at' => 'Создано',
            'updated_at' => 'Изменено',
            'qty' => 'Кол-во',
            'sum' => 'Сумма',
            'status' => 'Статус',
            'name' => 'Имя',
            'email' => 'E-mail',
            'phone' => 'Телефон',
            'address' => 'Адрес',
        ];
    }

    public function getOrdersItems()
    {
        return $this->hasMany(OrdersItems::className(),['orders_cart_id' => 'id']);
    }


}
