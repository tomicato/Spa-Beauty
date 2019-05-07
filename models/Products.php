<?php

namespace app\models;

use Yii;

class Products extends \yii\db\ActiveRecord
{
    public $image;
    public $image_big;
    //public $a_name;
    public $fuse;
	//public $ad_address;
	public $cnt;


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'products';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['image', 'image_big', 'prod_name', 'prod_caption', 'full_description', 'categories_id', 'price', 'ad_address'], 'required'],
            [['categories_id', 'f_id', 'n_id'], 'integer'],

            [['new', 'sale', 'hit', 'in_stock', 'fmadein', 'fuse', 'ad_address', 'a_name'], 'string'],
            [['img', 'prod_caption', 'a_address'], 'string', 'max' => 255],
            [['prod_name', 'price'], 'string', 'max' => 128],
            [['full_description'], 'string', 'max' => 1000],
            [['image', 'image_big'], 'file']
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'prod_id' => 'ID Товара',
            'img' => 'Фото',
            'img_big' => 'Фото увел.',
            'image' => 'Фото',
            'image_big' => 'Фото увел.',
            'prod_name' => 'Наименование',
            'prod_caption' => 'Кр.описание',
            'full_description' => 'Пол.описание',
            'categories_id' => 'ID Категории',
	        'n_id' => 'Наименование',
            'f_id' => 'Назначение',
	        'ad_address' => 'Company',
            'fuse' => 'Назначение',
            'fmadein' => 'Призводитель',
            'new' => 'Новинка',
            'sale' => 'Распродажа',
            'hit' => 'Хит',
            'price' => 'Цена',
            'in_stock' => 'В наличии',
        ];
    }

    public function getCategories()
    {
        return $this->hasOne(Categories::className(),['id' => 'categories_id'] );
    }
    public function getOrdersItems()
    {
        return $this->hasMany(OrdersItems::className(),['products_id' => 'products_idprod_id']);
    }

    public function getFilters()
    {
    	return $this->hasMany(Filters::className(),['p_prod_id' => 'f_id']);
    }

    /*public function getArticles()
    {
    	return $this->hasOne(Articles::className(),['address' => 'a_address']);
    }*/
	public function Articles()
	{
		return $this->hasOne(Articles::className(),['f_made_id' => 'fmadein']);
	}
	public function getNames()
	{
		return $this->hasOne(Names::className(),['names_id' => 'n_id']);
	}

	public function getAddresses()
	{
		return $this->hasOne(Addresses::className(),['title' => 'ad_address']);
	}

}


