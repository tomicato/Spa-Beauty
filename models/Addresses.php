<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "addresses".
 *
 * @property int $addresses_id
 * @property string $title
 */
class Addresses extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'addresses';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title'], 'required'],
            [['title'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'addresses_id' => 'Addresses ID',
            'title' => 'Title',
        ];
    }
	public function getProducts()
	{
		return $this->hasMany(Products::className(),['ad_address' => 'title']);
	}

}
