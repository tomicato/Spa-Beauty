<?php

namespace app\models;

use Yii;

class Profile extends \yii\db\ActiveRecord
{
    public $image;

    public static function tableName()
    {
        return 'profile';
    }


    public function rules()
    {
        return [
           // [['nik'], 'required'],
            [['gender'], 'integer'],
            [['avatar', 'burthday'], 'string', 'max' => 255],
            [['nik', 'first_name', 'second_name', 'middle_name'], 'string', 'max' => 32],
            [['image'], 'file', 'extensions' => 'png, jpg, gif'],
        ];
    }
    public function getUser(){
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }


    public function attributeLabels()
    {
        return [
            'user_id' => 'ID',
            'avatar' => 'Аватар',
            'image' => 'Аватар',
            'nik' => 'Ник',
            'first_name' => 'Имя',
            'second_name' => 'Фамилия',
            'middle_name' => 'Отчество',
            'burthday' => 'День рождения',
            'gender' => 'Пол',
        ];
    }
    public function updateProfile()
    {
        $profile = ($profile = Profile::findOne(Yii::$app->user->id)) ? $profile : new Profile();
        $profile->id = Yii::$app->user->id;

        $profile->nik = Yii::$app->user->identity->username;
        $profile->first_name = $this->first_name;
        $profile->second_name = $this->second_name;
        $profile->middle_name = $this->middle_name;
        if($profile->save()):
            $user = $this->user ? $this->user : User::findOne(Yii::$app->user->id);
            $username = Yii::$app->request->post('User')['username'];
            $user->username = isset($username) ? $username : $user->username;
            return $user->save() ? true : false;
        endif;
        return false;
    }
}
