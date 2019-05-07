<?php

namespace app\models;

use Yii;


class Categories extends \yii\db\ActiveRecord
{
    public $f_id;
    public $f_madein;
    public $price;

    public static function tableName()
    {
        return 'categories';
    }


    public function rules()
    {
        return [

            [['parent_id'], 'integer'],
            [['title'], 'required'],
            [['title', 'f_id', 'f_madein', 'price'], 'string', 'max' => 128],
            [['keywords', 'description'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'parent_id' => 'Род.Категория',
            'title' => 'Название',
            'keywords' => 'Кл.слова',
            'description' => 'Описание',
        ];
    }
    public function getCategories(){
        return $this->hasMany(Categories::className(), ['id' => 'parent_id']);
    }
    public function getProducts()
    {
        return $this->hasMany(Products::className(),['categories_id' => 'id'] );
    }
	public function getFilters()
	{
		return $this->hasMany(Filters::className(),['p_prod_id' => 'f_id']);
	}
}
