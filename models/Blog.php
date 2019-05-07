<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;

class Blog extends ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'blog';
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
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['s_name', 's_caption', 's_description'], 'required'],
            [['created_at', 'updated_at'], 'safe'],
            [['s_name', 's_caption', 's_img_sm', 's_img_bg', 'write_by', 'section'], 'string', 'max' => 255],
            [['s_description'], 'string', 'max' => 10000],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            's_name' => 'Заголовок',
            's_caption' => 'Анонс',
            's_description' => 'Описание',
            's_img_sm' => 'м.Фото',
            's_img_bg' => 'б.фото',
            'created_at' => 'Создано',
            'updated_at' => 'Изменено',
            'write_by' => 'Автор',
            'section' => 'Раздел',
        ];
    }
}
