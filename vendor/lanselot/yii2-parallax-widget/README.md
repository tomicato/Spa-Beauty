Parallax.js widget
==================
wrapper for Yii2 from parallax.js by http://pixelcog.github.io

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist lanselot/yii2-parallax-widget "*"
```

or add

```
"lanselot/yii2-parallax-widget": "*"
```

to the require section of your `composer.json` file.


Usage
-----

Once the extension is installed, simply use it in your code by  :

```php
<?= \lanselot\parallax\ParallaxWidget::widget([
    'image' => 'path/to/image.ext',
    'element' => '.class',
    'minHeight' => '400px',
]); ?>