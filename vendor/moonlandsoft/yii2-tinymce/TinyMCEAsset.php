<?php
namespace moonland\tinymce;

use yii\web\AssetBundle;

class TinyMCEAsset extends AssetBundle
{
	public $sourcePath = '@moonland/tinymce/assets';
	
	public $css = [];
	
	public $js = [
		'tinymce.min.js',
	];
}