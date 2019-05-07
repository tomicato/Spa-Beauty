<?php

namespace app\models;

use Yii;


class Articles extends \yii\db\ActiveRecord
{
	public $f_use;
	public $f_consist;
	public $f_made_in;

    public static function tableName()
    {
        return 'articles';
    }


    public function rules()
    {
        return [
            [['name', 'email', 'address'], 'required'],
            [['name', 'email', 'address', 'f_use', 'f_consist', 'f_made_in'], 'string', 'max' => 255],
        ];
    }


    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'email' => 'Email',
            'address' => 'Address',
            'f_made_in' => 'Сделано',
        ];
    }

	public function getProducts()
	{
		return $this->hasMany(Products::className(),['a_address' => 'address']);
	}
	public function Products()
	{
		return $this->hasMany(Products::className(),['fmadein' => 'f_made_in']);
	}
}
