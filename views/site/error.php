<?php

/* @var $this yii\web\View */
/* @var $name string */
/* @var $message string */
/* @var $exception Exception */

use yii\helpers\Html;

$this->title = $name;
?>
<style>
    .site-error div, .site-error p{
        text-align: center;
    }
</style>
<div class="container site-error" style="margin-top: 200px;margin-bottom: 200px;">
    <center><h1><?= Html::encode($this->title) ?></h1></center>
    <div class="alert alert-danger" >
        <?= nl2br(Html::encode($message)) ?>
    </div>
        <p>
            The above error occurred while the Web server was processing your request.
        </p>
        <p>
            Please contact us if you think this is a server error. Thank you.
        </p>


</div>
