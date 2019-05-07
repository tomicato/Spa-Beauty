<?php

namespace app\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\db\Expression;


class Testimonials extends \yii\db\ActiveRecord
{
    // public $image_file;

    public static function tableName()
    {
        return 'testimonials';
    }

    public function behaviors()
    {
        return [
            [
                'class' => TimestampBehavior::className(),
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at'],
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['updated_at'],
                ],
                // если вместо метки времени UNIX используется datetime:
                'value' => new Expression('NOW()'),
            ],


        ];

    }
    public function rules()
    {
        return [
            [['name', 'content'], 'required'],
            [['content', 'active', 'vis', 'img'], 'string'],
            [['created_at', 'updated_at'], 'safe'],
            [['name'], 'string', 'max' => 10],
            [['last_name'], 'string', 'max' => 15],
            [['vis'], 'default', 'value' => '0'],
            // [['img'], 'string', 'max' => 255]
            //[['img'], 'file', 'extensions' => 'png, jpg']
        ];
    }




    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Имя',
            'last_name' => 'Фамилия',
            'content' => 'Отзыв',
            'img' => 'Фото',
            'vis' => 'Отображать на главной',
            'created_at' => 'Дата отзыва',
            'updated_at' => 'Обновлено',
            'active' => 'Активно',
        ];
    }
}
