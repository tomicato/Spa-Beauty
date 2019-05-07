<?php
/**
*  Распечатывает в удобочитаемом виде данные
*/
function debug($arr)
{
    echo '<pre>'. print_r($arr, true) .'</pre>';
}