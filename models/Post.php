<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;

class Post extends ActiveRecord
{

    public $image;
    public $image_big;
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'post';
    }

    /**
     * @return array
     */
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
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'description'], 'required'],
            [['description'], 'string', 'max' => 160],
            [['content'], 'string', 'max' => 20000],
            [['created_at', 'updated_at'], 'safe'],
            [['user_id'], 'integer'],
            [['title', 'writed_by', 'img', 'img_big'], 'string', 'max' => 255],
            [['image', 'image_big'], 'file']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Заголовок',
            'img' => 'Фото.м.',
            'img_big' => 'Фото.б.',
            'image' => 'Фото',
            'image_big' => 'Фото увел.',
            'description' => 'Описание',
            'content' => 'Содержание',
            'user_id' => 'ID Пользователя',
            'created_at' => 'Создано',
            'updated_at' => 'Изменено',
            'writed_by' => 'Автор',

        ];
    }
}
