<?php

namespace app\models;

use Yii;


class Filters extends \yii\db\ActiveRecord
{

	public $f_massage;
    public static function tableName()
    {
        return 'filters';
    }


    public function rules()
    {
        return [
            [['p_prod_id', 'f_made_in', 'f_consist', 'f_use'], 'required'],
            [['p_prod_id'], 'integer'],
            [['f_made_in', 'f_consist', 'f_use', 'f_massage'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'filter_id' => 'Filter ID',
            'p_prod_id' => 'P Prod ID',
            'f_made_in' => 'F Made In',
            'f_consist' => 'F Consist',
            'f_use' => 'F Use',
            'f_massage' => 'Все д/массажа',
        ];
    }
}
