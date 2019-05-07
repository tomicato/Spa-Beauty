<?php

namespace app\components;

use Yii;
use yii\base\Widget;
use app\models\Categories;


class MenuWidget extends Widget
{
    public $tpl;
    public $data;
    public $tree;
    public $model;
    public $menuHtml;

    public function init()
    {
        parent::init();
        if($this->tpl === null){
            $this->tpl = 'menu';
        }
        $this->tpl .= '.php';
    }

    public function run(){
        // get cache
        if($this->tpl == 'menu'){
            $menu = Yii::$app->cache->get('menu.php');
            if($menu)return $menu;
        }

        $this->data = Categories::find()->indexBy('id')->orderBy(['id' => SORT_ASC])->asArray()->all();
        $this->tree = $this->getTree();
        $this->menuHtml = $this->getMenuHtml($this->tree);
        // Set cache --- время зад-ся в сек.
        if($this->tpl == 'menu') {
            $menu = Yii::$app->cache->get('menu.php');
            Yii::$app->cache->set('menu', $this->menuHtml, 60);
        }
        //debug($this->tree);
        return $this->menuHtml;
    }

    // Построение дерева данных
    protected function getTree(){
        $tree = [];
        foreach($this->data as $id => &$node){
            if(!$node['parent_id'])
                $tree[$id] = &$node;
            //debug($tree[$id]);
            else
                $this->data[$node['parent_id']]['childs'][$node['id']] = &$node;
        }

        return $tree;
    }
    //Дерево в строку HTML.
    protected function getMenuHtml($tree, $tab = ''){
        $str ='';
        foreach($tree as $categories){
            $str .= $this->catToTemplate($categories, $tab);
        }
        return $str;
    }
    //Шаблон вывода категорий.
    protected function catToTemplate($categories, $tab){
        ob_start();
        include __DIR__ . '/menu_tpl/' .$this->tpl;
        return ob_get_clean();
    }
}