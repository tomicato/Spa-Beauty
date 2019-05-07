<?php
use yii\helpers\Html;
use yii\helpers\ArrayHelper;
use yii\widgets\ActiveForm;
?>
<style>
    #prodssearch-f_id label {display: block;text-decoration: underline;padding-bottom: 7px;}
    #prodssearch-f_madein label {text-decoration: underline;padding-bottom: 7px;}
    .field-prodssearch-in_stock label {display: block;border-bottom: 1px solid darkgrey;}
    #prodssearch-f_id label, #prodssearch-f_madein label {cursor: pointer;display: block;}
    #sch{display: none;}
    .list-view {margin: 20px 0 20px 0 !important;}
    .summary {position: absolute;z-index: 3;right: 0;top: 20px;}
</style>

<div class="products-search">

	<?php $form = ActiveForm::begin( [
		'action'  => [ 'index' ],
		'method'  => 'get',
		'options' => [
			'data-pjax' => 1
		],
	] ); ?>
	<?php
    $query1 = \app\models\Filters::find()->all();
    $query2= \app\models\Categories::find()->all();
    $query3= \app\models\Products::find()->all();

	$list  = ArrayHelper::map( $query1, 'p_prod_id', 'f_use' );
	$list3 = ArrayHelper::map( $query1, 'p_prod_id', 'f_made_in' );
	$list2 = ArrayHelper::map( $query2, 'id', 'title' );
	?>
	<?= $form->field( $model, 'prod_name' )->label( 'Наименование' ) ?>

	<?= $form->field( $model, 'categories_id' )->dropDownList( $list2, [ 'prompt' => ' ~ Выбор категории ~ ' ] )->label( 'Категория' ) ?>

	<?= $form->field( $model, 'f_id' )->checkboxList( $list, [
		'item' => function ( $index, $label, $name, $checked, $value ) {
				$c = \app\models\Products::find()->where( [ 'f_id' => $value ] )->all();

				return Html::checkbox( $name, $checked, [
					'label' => $label . ' (' . count( $c ) . ') ',
					'value' => $value
				] );
			}
	] )->label( false ) ?>

	<?= $form->field( $model, 'fmadein' )->checkboxList($list3, [
		'item' => function ( $index, $label, $name, $checked, $value ) {
			$c = \app\models\Products::find()->where( [ 'fmadein' => $value ] )->all();

			return Html::checkbox( $name, $checked, [
				'label' => $label . ' (' . count( $c ) . ') ',
				'value' => $value
			] );
		}
    ] )->label( 'Производитель' ) ?>



	<? /*= $form->field($model, 'made_in')->textInput()->label('Производитель') */ ?>

	<? /*= $form->field($model, 'img') */ ?>

	<? /*= $form->field($model, 'img_big') */ ?>

	<? /*= $form->field($model, 'prod_caption') */ ?>

	<?php // echo $form->field($model, 'full_description') ?>

	<?php // echo $form->field($model, 'categories_id') ?>

	<?php // echo $form->field($model, 'new') ?>

	<?php // echo $form->field($model, 'sale') ?>

	<?php // echo $form->field($model, 'hit') ?>

	<?php // echo $form->field($model, 'price') ?>


    <div class="form-group">
        <!--Плавающая кнопка поиска-->
		<?= Html::submitButton( 'Поиск', [ 'class' => 'btn btn-outline-primary', 'id' => 'sch' ] ) ?>
        <!--Статичная кнопка поиска-->
		<?= Html::submitButton( 'Поиск', [ 'class' => 'btn btn-outline-primary', 'id' => 'sch2' ] ) ?>
        <!--Кнопка сброса статических значений-->
		<?= Html::resetButton( 'Сброс', [ 'class' => 'btn btn-default', 'id' => 'reset' ] ) ?>
    </div>
    <?php ActiveForm::end(); ?>

    <form action="/prods/index" method="post">

          <?php foreach($query1 as $mod1):?>
          <?php foreach ($query3 as $mod3): ?>
        <?php if($mod1->p_prod_id == $mod3->f_id):?>
        <input type="checkbox" name="chbx"  value="<?= $mod3->f_id?>" />
        <?php endif;?>
          <?php endforeach;?>
            <?= $mod1->f_use ?>
          <?php endforeach;?>

        <input type="submit" value="Отправить" class="btn btn-outline-primary">
    </form>
</div>

<script>
    $(document).ready(function () {

        /*Свернуть-Развернуть список*/
        var el = document.getElementById('prodssearch-f_id');
            el.classList.add('collapse');
        var el2 = document.querySelector('.field-prodssearch-f_id');
        var el3 = document.createElement('a');
            el3.classList.add('collapsed');
            el3.setAttribute('href', '#prodssearch-f_id');
            el3.setAttribute('data-toggle', 'collapse');
            el3.innerHTML = 'Назначение';
        var el4 = document.getElementById('prodssearch-f_id');
            el4.classList.add('collapse');

        if (el4.classList.contains('show')) {
            el4.classList.remove('show');
        } else {
            el4.classList.add('show');
        }
        el4.before(el3);

        /*Плавающая кнопка поиска*/
        $('.field-prodssearch-f_id').on('click', 'input', function (e) {

        var el_tgt = e.target;
        var top = el_tgt.offsetTop;
        var left = el.offsetWidth;

        var btn_sch = document.getElementById('sch');
            btn_sch.style.position = 'absolute';
            btn_sch.style.display = 'block';
            btn_sch.style.top = top + 'px';
            btn_sch.style.left = left - 85 + 'px';
            btn_sch.style.zIndex = 2;
        });

        /*Кнопка сброса динамических значений*/
        var res = document.getElementById('reset');

       res.addEventListener('click', function () {
        var sel_ckbx = document.getElementsByName('ProdsSearch[f_id][]'); //Object
        var sel_ckbx2 = document.getElementsByName('ProdsSearch[f_madein][]'); //Object
        var opt = document.getElementsByTagName('option'); // Object
        var el_text = document.getElementById('prodssearch-prod_name'); // Object

           /*Удаление флажка из группы checkbox`s `F Id `*/
           for (var i in sel_ckbx) {if (sel_ckbx[i].checked) sel_ckbx[i].removeAttribute('checked');}

           /*Удаление флажка из группы checkbox`s `Made In`*/
           for(var k in sel_ckbx2){if (sel_ckbx2[k].checked) sel_ckbx2[k].removeAttribute('checked');}

           /*Удаление selected из option*/
           for(var n in opt){opt[n].selected ? opt[n].removeAttribute('selected') : '';}

           /*Удаление текста из текстового поля*/
           if(el_text.value) el_text.removeAttribute('value');
        });

       /*Ajax новых чекбоксов*/


    });

</script>