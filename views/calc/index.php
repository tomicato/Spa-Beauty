<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 15.07.2018
 * Time: 0:15
 */
use yii\helpers\Html;
use yii\helpers\Url;
?>
<style>
    .text-right{
        float:right;
    }
</style>

<br><br>
<div class="container">
    <div class="row">
       <div class="col-lg-4 col-md-12">
           <div id="calc">
               <div class="form-group">
                   <label for="page-cat">Категории товаров</label>
                   <select id="page-cat" class="form-control">
                       <option selected> ~ Выбор категории</option>
                       <?php foreach($categories as $category):?>
                           <option><?= $category['title']?></option>
                       <?php endforeach;?>
                   </select>
               </div>
               <div class="form-group">
                   <label for="page-prod">Продукция категории</label>
                   <select id="page-prod" name="page-prod" class="form-control">

                   </select>
               </div>
               <div class="form-group">
                   <label for="page-cat">Ответственный</label>
                   <select id="page-cat" class="form-control">
                       <?php foreach($per as $personal):?>
                           <option><?= $personal['fio']?> - <?= $personal['phone'] ?> </option>
                       <?php endforeach;?>
                   </select>
               </div>
               <div class="form-group">
                   <label for="qty">Количество товаров</label>
                   <input type="number"  class="form-control" id="qty" size="3" min="1" value="1">
               </div>
           </div>
       </div>
        <div class="col-lg-2 col-md-12">
            <div class="img_prev">
            </div>
            <!--<img src="/images/product/mp2.jpg" alt="" class="img-responsive" width="100" height="120">-->
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

  <div class="btn btn-outline-primary">Сброс значений</div>
</div><br><br>

<style>
    .hidden{
        display:none;
    }
    #page-prod option,
    #page-prod,
    #page-cat option,
    #page-cat, #qty, #qty input {
        font-family: 'Poiret One', sans-serif;
        font-size: 16px;
        font-weight: 700;
    }
    .col{
        color: #6b9abd91;
    }
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
</style>
<script>
    $(function(){
        var pageCategory,
            selectPrice,
            pageProd = $('#page-prod'),
            qty = $('input[id="qty"]'),
            sum = $('.sum'),
            key,
            html = '<option selected> ~ Выбор продукции</option>',
            img = '',
            sel_name = '',
            sel_price = 0;



        $('#page-prod').on('change', function(){
            var sel_price = $('#page-prod option:selected').data('price'),
                sel_name = $('#page-prod option:selected').data('prod_name'),
                sel_img = $('#page-prod option:selected').data('img');

           $('.img_prev').append('<img src="/images/product/'+ sel_img +'" alt="" class="img-responsive" width="100" height="120">');
            //alert(sel_name + '---' +  sel_price);

            function recalc(){
                sel_price = isNumeric(sel_price) ? sel_price : 0;
                qty = isNumeric(qty) ? qty : 1;
                sum = qty * sel_price;
               //$('.sum').append(sum);
                //console.log(sum);
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

            $('#qty').on('change', function () {
                changeQty();
            });
            function isNumeric(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }



        });







        function changeCat(){
            $('#sum').val(0);
            $('#qty').val(1);

            $('.img_prev img').remove();
            $('#page-prod').find('option').remove()/*.attr('disabled','disabled').addClass('col')*/;
            //document.getElementById('page-prod').innerHTML = '';


        }

        $('#page-cat').on('change', function(){

            changeCat();



            var s = $('#page-cat option:selected').html();

            $.ajax({
                url: '/calc/parse',
                data: {s: s},
                type: 'POST',
                success: function (res) {
                    if (!res) alert('Ошибка!');

                    for(key in res){
                        html += '<option data-categories_id="' + res[key].categories_id + '" data-price="' + res[key].price + '" data-img="' + res[key].img + '" data-prod_name="' + res[key].prod_name + '">' + res[key].prod_name + ' - ' + res[key].price + '₽ </option>';
                        //img += '<img src="/images/product/'+ res[key].img +'" class="hidden" data-img="' + res[key].img + '" alt="' + res[key].prod_name + '" class="img-responsive" width="100" height="120">';
                    }

                    $('#page-prod').append(html);

                },
                error: function () {
                    alert('Error!');
                }
            });

        });

    });
</script>