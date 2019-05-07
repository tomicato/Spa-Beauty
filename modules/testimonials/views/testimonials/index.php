<link href="https://cdnjs.cloudflare.com/ajax/libs/titatoggle/1.2.11/titatoggle-dist-min.css" rel="stylesheet">
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<?php
use yii\helpers\Html;

$this->title = '';

?>
<style>
    table thead th{
        text-align: center;
    }
    table thead tr td:nth-child(5) .checkbox{
        margin-left: 50%;
    }
    table thead th:nth-child(2){
        text-align: center;
    }
    table thead tr td{
        text-align: center;
    }


    table tbody td{
        text-align: center;
    }

    table tbody td:nth-child(4) img{
        margin-left: 10px;
    }

    table tbody td:nth-child(3){
        width:300px;
    }
    table tbody td:nth-child(5), table tbody td:nth-child(1){
        width:100px;
    }
</style>
<div class="testimonials-index container table-responsive">

<h1><?= Html::encode('Отзывы клиентов') ?></h1>
<p><?= Html::a('Написать отзыв', ['create'], ['class' => 'btn btn-success']) ?></p>
    <br>
    <p>
        <small><em><strong>Все отзывы изначально неактивны </strong>- это сделано для того, чтобы модерировать, т.е.
                иметь возможность проверять.
                Для того чтобы активировать, <strong>в редактировании (где нарисован карандш) поставить галочку на
                    пункте "Активно/Неактивно" </strong>- будет отобоажаться на отдельной странице отзывов. Но если в
                тоже время поставить галочу или включить зелёный переключатель - будет также отображаться и на главной,
                но не больше 3-х(можно хоть все выставить, но отобразяться только 3 на главной! Если нужен
                отзыв,<strong> ставить "Активно/Неактивно" - ВСЕГДА! </strong>Остальные опции по усмотрению. </em>
        </small>
    </p>
    <br>
    <div class="bs-example" data-example-id="table-within-panel">
        <div class="panel panel-warning">
            <!-- <div class="panel-heading"><h4><? /*= Html::encode($this->title) */ ?></h4></div>-->
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead style="background-color:#6EBEEB; color:#ffffff;">
                    <tr>
                        <th>№</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th style="text-align: center;">Фото</th>
                        <th>На главной (не > 3)</th>
                        <th>Дата отзыва</th>
                        <th>Активно</th>
                        <th>Настройки</th>
                        <!--<th  style="text-align: center;">Сортировка <span class="ui-icon ui-icon-arrowthick-2-n-s"></span></th>-->
                    </tr>
                    </thead>

                    <?php foreach ($model as $key => $val): ?>
                        <style>
                            thead.beige:nth-child(even) > tr {
                                background-color: beige;
                            }
                        </style>
                        <thead class="beige" id='<?= $val['id'] ?>'>

                        <tr>
                            <td><?= $val['id'] ?></td>
                            <td><?= $val['name'] ?></td>
                            <td><?= $val['last_name'] ?></td>
                            <td><img src="/images/testimonials/<?= $val['img'] ?>" alt="" height="50" width="50"
                                     class="img-responsive" style="border-radius: 50%"></td>
                            <td>
                                <div class="checkbox checkbox-slider--b" id="vis">
                                    <label title="Показать на главной" aria-label="Показать на главной">
                                        <input type="checkbox"<?php if ($val['vis'] == 1) {
                                            echo 'checked="checked"';
                                        } ?>
                                               value="<?= $val['vis'] ?>" id="<?= $val['id'] ?>"><span></span>
                                    </label>
                                </div>

                            </td>
                            <td style="text-align: center;"><?= Yii::$app->formatter->asDate($val['created_at'], 'long'); ?></td>
                            <td style="text-align: center;"><?php if($val['active'] == 1){ echo "Да";}else{ echo"Нет";} ?></td>
                            <td style="text-align: center;">&nbsp;
                                <div class="btn-group">
                                    <a href="/testimonials/testimonials/update?id=<?= $val['id'] ?>"
                                       title="Редактировать" aria-label="Редактировать" data-pjax="0">
                                        <span class="glyphicon glyphicon-pencil"></span>
                                    </a>&nbsp;
                                    <a href="/testimonials/testimonials/view?id=<?= $val['id'] ?>" title="Просмотр"
                                       aria-label="Просмотр" data-pjax="0">
                                        <span class="glyphicon glyphicon-eye-open"></span>
                                    </a>&nbsp;

                                    &nbsp;
                                    <a href="/testimonials/testimonials?id=<?= $val['id'] ?>" title="Удалить"
                                       aria-label="Удалить" data-pjax="0">

                                        <?= Html::a('<span class="glyphicon glyphicon-trash"></span>', ['delete', 'id' => $val['id']], [
                                            //'class' => 'btn btn-danger',

                                            'data' => [
                                                'confirm' => 'Вы уверены, что желаете удалить блок?',
                                                'method' => 'post',
                                            ],
                                        ]) ?>
                                    </a>
                                </div>
                            </td>

                        </tr>
                        </thead>

                        <tbody>

                        </tbody>
                    <?php endforeach; ?>

                </table>
            </div>

        </div>
    </div>

    <div id="res"></div>

    <script>
        $('input[type="checkbox"]').click(function () {
// В переменную кладём значение элемента, по котому произвели клик и добавляем свойство checked
            var inputCheck = $(this).prop("checked");
// тут массив айди блоков
            var ids = [];

// Функция кодирования квадратных скобок
            function fixedEncodeURI(str) {
                return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
            }

            $(this).each(function (index) {
// Получаем в виде массива значения ID элементов, отмеченных как checked
                ids[index] = $(this).attr('id');

                 console.log(fixedEncodeURI(ids));
                if (inputCheck == true) {
                    $.ajax({
                        url: '/testimonials/testimonials/active',
                        type: 'POST',
// Передаём Ajax-ом в обработчик php значение 1 переменной, по которой кликнули, и сам ID этого элемента
                        data: {val: 1, home: fixedEncodeURI(ids)},
                        success: function (data) {
                        },
                        error: function () {
                            //alert('Error');
                        },
                    });
                } else if (inputCheck == false) {
                    $.ajax({
                        url: '/testimonials/testimonials/active',
                        type: 'POST',
// Аналогично передаём Ajax-ом в обработчик php значение 2(т.е. неактино) переменной, по которой кликнули, и сам ID этого элемента
                        data: {val: 2, home: fixedEncodeURI(ids)},
                        success: function (data) {
                            //alert(data);
                        },
                        error: function () {
                            //alert('Error');
                        },
                    });
                }

            });
        });
    </script>
<!--
===================

===================
--
</div>
