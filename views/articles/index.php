<?php

use yii\helpers\Html;

?>
<style>
    label {
        display: block;
        cursor: pointer;
    }

    img {
        margin: 15px 0;
    }

    @media screen and (max-width: 768px) {
        .block_img {
            width: 100% !important;
        }
    }

    #checkbox-list label {
        line-height: 28px;
        font-size: 16px;
        color: #666;
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
    }

    .caret {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 1px;
        vertical-align: middle;
        border-top: 1px solid transparent;
        border-bottom: 5px solid #504b4b;
        margin-top: -6px;
        border-left: 5px solid transparent !important;
        border-right: 5px solid transparent;

    }

    .caret-sub {
        display: inline-block !important;
        width: 0 !important;
        height: 0 !important;
        margin-left: 1px !important;
        vertical-align: middle !important;
        border-top: 7px solid #504b4b !important;
        border-left: 1px solid transparent !important;
        border-width: 5px !important;
        border-bottom: 5px solid transparent !important;
        margin-top: 3px !important;
    }
</style>


<div class="container">
    <form id="filter">
        <br><br>
        <h2>Продукция</h2>
        <div id="checkbox-list" class="col-md-3">
            <div class="addresses">
                <a href="#addresses" class="collapsed" data-toggle="collapse"><p><em>По адресу &nbsp;&nbsp;</em><span
                                class="caret"></span></p></a>
                <div id="addresses" class="collapse show">
					<?php foreach ( $all as $key => $p ): ?>
                        <label>
							<?php //if($key != 0): ?>
                            <input type="checkbox" name="address" value="<?php echo $p->ad_address; ?>"
                                   data-id="<?= $p->ad_address ?>">
							<?= $p->ad_address ?>

                            <span class="cnt"><?= '(' . $p->cnt . ')' ?> </span>
							<?php //endif;?>
                        </label>
					<?php endforeach; ?>
                </div>
                <br>
            </div>
            <div class="named">
                <a href="#named" class="collapsed" data-toggle="collapse"><p><em>По названию &nbsp;&nbsp;</em><span
                                class="caret"></span></p></a>
                <div id="named" class="collapse show">
					<?php foreach ( $all2 as $key => $p ): ?>
                        <label>
							<?php if ( $key != 0 ): ?>
                                <input type="checkbox" name="names" value="<?= $p->n_id ?>" data-id="<?= $p->n_id ?>">
								<?= $p->a_name ?>
                                <span class="cnt"><?= '(' . $p->cnt . ')' ?> </span>
							<?php endif; ?>
                        </label>
					<?php endforeach; ?>
                </div>
                <br>
            </div>
            <div class="madin">
                <a href="#madein" class="collapsed" data-toggle="collapse"><p><em>По производителю
                            &nbsp;&nbsp;</em><span class="caret"></span></p></a>
                <div id="madein" class="collapse show">
					<?php foreach ( $all3 as $k => $p ): ?>
                        <label>
							<?php if ( $k != 0 ): ?>
                                <input type="checkbox" name="fmadein" value="<?php echo $p->fmadein; ?>"
                                       data-id="<?= $p->fmadein ?>">
								<?= $p->fmadein ?>
                                <span class="cnt"><?= '(' . $p->cnt . ')' ?> </span>
							<?php endif; ?>
                        </label>
					<?php endforeach; ?>
                </div>
                <br>
            </div>
            <?= Html::button('Поиск',['type' => 'submit', 'value' => 'Отправить', 'class' => 'btn btn-outline-success'])?>
            <?= Html::button('Сброс',['type' => 'reset', 'value' => 'Сбросить', 'class' => 'btn btn-outline-danger', 'id' => 'reset'])?>
        </div>
    </form>

    <!--Контент, полученный через Ajax -->
    <div id="content-list" class="col-md-9"></div>
</div><br>

<script>
    $(document).ready(function () {

        /*Клик по названию фильтра*/
        $('.collapsed').on('click', function () {
            var o_sub = $(this).find('.caret');
            o_sub.toggleClass('caret-sub');
        });
        /* $('#checkbox-list').on('click', 'a', function (el) {
			 el.preventDefault();
		 });*/
        // Добавить - Удалить атрибут checked
        $('#checkbox-list').on('click', 'input', function (e) {


            /*Получаем значение атрибута data-id*/
            var id_input = e.target.getAttribute('data-id');

            //console.log(id_input);

            /*Отмечаем или удаляем атрибут checked*/
            if (e.target.hasAttribute('checked')) {
                e.target.removeAttribute('checked');
            } else {
                e.target.setAttribute('checked', 'checked');
            } // Finish else attr checked

            /*Кнопка сброса*/
            $('button[type="reset"]').on('click', function (ev) {
                if (e.target.hasAttribute('checked')) {
                    e.target.removeAttribute('checked');
                }
            });


            // Клик по кнопке поиска
            $('button[type="submit"]').on('click', function (event) {
                event.preventDefault();

                /*Удаляет элементы со снятым чекбоксом - сбрасывает все данные*/
                $('#content-list').each(function () {
                    return $(this).empty();
                });

                var arr = $('#checkbox-list input[type="checkbox"]'); // Object (array of input)
                var true_arr = [];
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].hasAttribute('checked')) {
                        true_arr.push(arr[i].value);
                    }
                }


                /*Формируем Ajax запрос к БД*/
                $.ajax({
                    url: '/articles/index',
                    type: 'POST',
                    data: {val: true_arr},
                    success: function (res) {

                        /*При удачном получении ответа от сервера*/
                        var data = $.parseJSON(res);
                        //console.log(data);
                        var check = '';


                        /*Проходимся по массиву и формируем код*/
                        for (var i in data) {

                            check += '<div class="col-md-4"> <img class="block_img img-responsive" src="/images/product/' + data[i].img + '" title="' + data[i].prod_name + '">' +
                                '<center><h4>' + data[i].prod_name + '</h4></center></div>';

                        }

                        /*Вставляем содержимое на страницу*/
                        $("#content-list").append('<div class="pro">' + check + '</div>');

                        /*Удаляем дублирующие элементы*/
                        var ar = document.getElementsByClassName('pro');

                        if (ar.length > 1) {
                            for (var i = 0; i < ar.length; i++) {
                                ar[i].remove();
                            }
                        }

                    },
                    error: function () {
                        //alert('Error!');
                    }
                }); // End of Ajax
            });  // End of ButtonSearch on Click
        });  // End of CheckBoxList Click

    }); // End DocumentReady
</script>

