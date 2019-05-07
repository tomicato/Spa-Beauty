<?php

namespace app\models;

use Yii;

class OrModal extends \yii\db\ActiveRecord
{
    public $image;

    public static function tableName()
    {
        return 'or_modal';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'email', 'phone'], 'required'],
            [['order_d', 'order_t'], 'safe'],
            [['title', 'img', 'name', 'email', 'phone'], 'string', 'max' => 255],
            [['schedule'], 'string', 'max' => 1000],
            [['image'], 'file'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'img' => 'Img',
            'image' => 'Фото',
            'order_d' => 'Order D',
            'order_t' => 'Order T',
            'schedule' => 'Schedule',
            'name' => 'Name',
            'email' => 'Email',
            'phone' => 'Phone',
        ];
    }
}
