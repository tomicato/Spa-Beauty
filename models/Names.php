<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "names".
 *
 * @property int $names_id
 * @property string $title
 */
class Names extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'names';
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
            'names_id' => 'Names ID',
            'title' => 'Title',
        ];
    }

	public function getProducts()
	{
		return $this->hasMany(Products::className(),['n_id' => 'names_id']);
	}
}
