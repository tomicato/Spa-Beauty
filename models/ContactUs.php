<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 07.07.2018
 * Time: 22:38
 */

namespace app\models;
use Yii;
use yii\base\Model;

class ContactUs extends Model
{
    public $name;
    public $email;
    public $phone;
    public $body;
    public $verifyCode;

    public function rules()
    {
        return [
            // name, email, subject and body are required
            [['name', 'phone', 'body'], 'required'],
            // email has to be a valid email address
            ['email', 'email'],
            // verifyCode needs to be entered correctly
            ['verifyCode', 'captcha'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'name' => 'Имя',
            'email' => '',
            'phone' => 'Телефон',
            'body' => 'Сообщение',
            'verifyCode' => 'Проверочный код',

        ];
    }


    public function contact($email, $var)
    {
        if ($this->validate()) {
            Yii::$app->mailer->compose()
                ->setFrom(['bej0j88@yandex.ru' => 'Beauty & SPA Tomsk']) // от кого
                ->setTo($email)  // Кому
                ->setSubject('Обращение с сайта')
                ->setHtmlBody('<b> Телефон: </b> '. $this->phone.'<br>
                                    <b> E-mail: </b> '. $var.'<br>
                                    <p><b>Сообщение:</b><br> '.$this->body.'</p>')
               // ->setTextBody($this->body)
                ->send();

            return true;
        }
        return false;
    }
}