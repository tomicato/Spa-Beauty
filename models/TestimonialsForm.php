<?php


namespace app\models;


use yii\base\Model;
use yii\web\UploadedFile;

class TestimonialsForm extends Model
{
    public $name_form;
    public $last_name_form;
    public $content_form;
    public $image_file;

    public function rules(){

        return [
           [['name_form', 'content_form'], 'required'],
           [['content_form'], 'string'],
           [['name_form'], 'string', 'max' => 10],
           [['last_name_form'], 'string', 'max' => 15],
           [['image_file'], 'file', 'extensions' => 'png, jpg']
       ];

    }

    public function attributeLabels()
    {
        return [

                 'name_form' => 'Имя',
                 'last_name_form' => 'Фамилия (необязательно)',
                 'content_form' => 'Отзыв',
                 'image_file' => 'Аватар (50x50, необязательно)'

        ];
    }
}