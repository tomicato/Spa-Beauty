<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 17.07.2018
 * Time: 21:35
 */
use yii\helpers\Url;
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\helpers\ArrayHelper;
use app\models\Categories;


?>
<style>
    .form-group,
    .form-group select,
    .form-group select option, #prod_name option,
    #prod_name,
    form input.form-control{
    margin-bottom: 1rem;
    font-family: 'Poiret One', sans-serif;
    font-size: 16px;
    font-weight: 700;
    }
    .form-control{margin: 0 0 30px 0!important;}
    @media screen and (min-width:769px){
        .img_prev img{
            margin-left: 15%;
            margin-top: 15px;
            margin-bottom: 15px;

        }
    }
    @media screen and (max-width:768px){
        .img_prev img{
            margin-left: 44%;
            margin-top: 30px;
            margin-bottom: 30px;

        }
    }
    @media screen and (max-width:500px){
        .img_prev img{
            margin-left: 37%;
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }
    .form-group.field-page-cat {
        margin-top: -30px;
    }
    select.form-control:not([size]):not([multiple]) {
        height:auto!important;
    }
</style>

<div class="container" style="margin-top: 200px;margin-bottom: 200px;">
    <div class="row">
        <div class="col-lg-4 col-md-12">
<?php $form = ActiveForm::begin()?>

<?= Html::label('Категория')?>
<?= $form->field($model,'id')->dropDownList(ArrayHelper::map(Categories::find()->where(['!=', 'parent_id', 0])->all(),'id', 'title'),
['prompt'=>'Выберите категорию', 'id' => 'page-cat',
'onchange' => '$.post("'.Url::toRoute('/calc/cal').'", {id: $(this).val()}).done(function(data){$("#prod_name").html(data);});'])->label('')?>

<?= Html::label('Продукция')?>
<?php $items = ArrayHelper::map(\app\models\Products::find()->all(), 'prod_id', 'prod_name');
echo Html::dropDownList('district', '', $items,
['class' => 'form-control', 'id' => 'prod_name', 'prompt' => '']); ?>

<?= Html::label('Количество')?>
<input type="number" class="form-control" id="qty" size="3" min="1" value="1">
<?php ActiveForm::end();?>

    </div>
<div class="col-lg-2 col-md-12">
    <div class="img_prev">

    </div>
</div>
<div class="col-lg-6 col-md-12">
    <center><h3>Калькуляция</h3></center>
    <table class="table table-bordered">
        <thead>
        <tr>
            <th>Наименование</th>
            <th>Цена</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Цена за ед.</td>
            <td class="price"></td>
        </tr>
        <tr>
            <td>Кол-во</td>
            <td class="qty"></td>
        </tr>
        <tr>
            <td>Итого</td>
            <td class="sum"></td>
        </tr>
        </tbody>
    </table>
</div>
    </div>
</div>


<script>
    $(function() {

        var qty = $('input[id="qty"]'),
            sum = $('.sum'),
            sel_name = '',
            sel_price = 0;


    $('#prod_name').on('change', function(){

        var sel_price = $('#prod_name option:selected').data('price'),
            sel_name = $('#prod_name option:selected').data('prod_name'),
            sel_img = $('#prod_name option:selected').data('img');
        $('.img_prev img').remove();
        $('.img_prev').append('<img src="/images/product/'+ sel_img +'" alt="" class="img-responsive" width="100" height="120">');

        function recalc(){
            sel_price = isNumeric(sel_price) ? sel_price : 0;
            qty = isNumeric(qty) ? qty : 1;
            sum = qty * sel_price;
            changeTable();
        }
        function changeTable() {
            $('.price').text(sel_price + ' руб.');
            $('.qty').text(qty);
            $('.sum').text(sum + ' руб.');
        }
        function changeQty() {
            qty = $('#qty').val();
            if(qty < 1){
                qty = 1;
                $('#qty').val(1);
            }
            recalc();
        }
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        $('#qty').on('change', function () {
            changeQty();
        });
    });

        function changeCat(){
            $('#sum').val(0);
            $('#qty').val(1);
            $('.price').text(' ~ ');
            $('.qty').text(' ~ ');
            $('.sum').text(' ~ ');
            $('.img_prev img').remove();
        }
    $('#page-cat').on('change', function() {
            changeCat();
        });
    });
</script>