<?php

namespace app\models;

use Yii;


class Personal extends \yii\db\ActiveRecord
{

    public $image;
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'personal';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['fio', 'post'], 'required'],
            [['photo_status', 'sex', 'fio', 'education', 'experience', 'hobby', 'post'], 'string'],
            [['img'], 'string', 'max' => 255],
            [['phone'], 'string', 'max' => 100],
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
            'img' => 'Фото',
            'image' => 'Фото',
            'photo_status' => 'Показывать фото',
            'sex' => 'Пол',
            'phone' => 'Телефон',
            'fio' => 'ФИО',
            'education' => 'Образование',
            'experience' => 'Опыт работы',
            'hobby' => 'Хобби',
            'post' => 'Должность',
        ];
    }
}
