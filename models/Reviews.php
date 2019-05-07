<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;

class Reviews extends ActiveRecord
{
    public $image;

    public static function tableName()
    {
        return 'reviews';
    }

    public function behaviors()
    {
        return [
            [
                'class' => TimestampBehavior::className(),
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at'],
                ],
                // если вместо метки времени UNIX используется datetime:
                'value' => new Expression('NOW()'),
            ],
        ];
    }

    public function rules()
    {
        return [
            [['content', 'name', 'email'], 'required'],
            [['content'], 'string', 'max' => 10000],
            [['created_at'], 'safe'],
            [['status'], 'boolean'],
            [['name', 'email', 'avatar', 'request_uri'], 'string', 'max' => 255],
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
            'avatar' => 'Avatar',
            'request_uri' => 'URL страницы',
            'image' => '',
            'content' => 'Комментарий',
            'name' => 'Имя',
            'email' => 'E-mail',
            'created_at' => 'Дата',
            'status' => 'Одобрено',

        ];
    }
}
