$(document).on('ready', function() {

// Фото увеличивается при наведении

     /*  $('#kv-btn-2').popoverButton({
            trigger: 'hover focus',
            target: '#myPopover6',
            placement: 'left',
        });*/

// Add to cart detail view
    $('.sp_add_to_basket').on('click', '.basket', function(e) {
        e.preventDefault();


        var id = $(this).data('id'),
            qty = $('#qty').val();


        if($(this).hasClass('basket-rel')){
            $.ajax({
                url: '/cart/add',
                type: 'GET',
                data: {id: id, qty: 1},
                success: function (res) {
                    if (!res) alert('Ошибка!');
                    showCart(res);
                },
                error: function () {
                    alert('Error!');
                }
            });
        }else {

            $.ajax({
                url: '/cart/add',
                type: 'GET',
                data: {id: id, qty: qty},
                success: function (res) {
                    if (!res) alert('Ошибка!');
                    showCart(res);
                },
                error: function () {
                    alert('Error!');
                }
            });
        }
    });
     // Add to cart from shop main page 
    $('.best').on('click', '.basket', function(e) {
        e.preventDefault();


        var id = $(this).data('id'),
            qty = $('#qty').val();


        if($(this).hasClass('basket-rel')){
            $.ajax({
                url: '/cart/add',
                type: 'GET',
                data: {id: id, qty: 1},
                success: function (res) {
                    if (!res) alert('Ошибка!');
                    showCart(res);
                },
                error: function () {
                    alert('Error!');
                }
            });
        }else {

            $.ajax({
                url: '/cart/add',
                type: 'GET',
                data: {id: id, qty: qty},
                success: function (res) {
                    if (!res) alert('Ошибка!');
                    showCart(res);
                },
                error: function () {
                    alert('Error!');
                }
            });
        }
    });

// Корзина товаров from rose/index
    $('#our_product').on('click', '.basket', function(e) {
        e.preventDefault();


        var id = $(this).data('id'),
            qty = $('#qty').val();


        if($(this).hasClass('basket-rel')){
            $.ajax({
                url: '/cart/add',
                type: 'GET',
                data: {id: id, qty: 1},
                success: function (res) {
                    if (!res) alert('Ошибка!');
                    showCart(res);
                },
                error: function () {
                    alert('Error!');
                }
            });
        }else {

            $.ajax({
                url: '/cart/add',
                type: 'GET',
                data: {id: id, qty: qty},
                success: function (res) {
                    if (!res) alert('Ошибка!');
                    showCart(res);
                },
                error: function () {
                    alert('Error!');
                }
            });
        }
    });

// Корзина товаров from single-product

    $('.dubl').on('click', '.basket', function(e) {
        e.preventDefault();


        var id = $(this).data('id'),
            qty = $('#qty').val();


        if($(this).hasClass('basket-rel')){
            $.ajax({
                url: '/cart/add',
                type: 'GET',
                data: {id: id, qty: 1},
                success: function (res) {
                    if (!res) alert('Ошибка!');
                    showCart(res);
                },
                error: function () {
                    alert('Error!');
                }
            });
         }else {

             $.ajax({
                 url: '/cart/add',
                 type: 'GET',
                 data: {id: id, qty: qty},
                 success: function (res) {
                     if (!res) alert('Ошибка!');
                     showCart(res);
                 },
                 error: function () {
                     alert('Error!');
                 }
             });
         }
    });

// Показ товаров в корзине, в шапке сайта
    function showCart(cart) {
        $('#cart-content').html(cart);

    }

// Метод очистки товаров в корзине (одного товара)
    $('#cart-content').on('click', '.cart-remove', function () {
        var id = $(this).data('id');
        $.ajax({
            url: '/cart/delete',
            data: {id: id},
            type: 'GET',
            success: function (res) {
                if (!res) alert('Ошибка!');
                showCart(res);
            },
            error: function () {
                alert('Error!');
            }
        });
    });


// Метод очистки корзины (одного товара) из View
    $('.cart-remove2').on('click', function () {

        var id = $(this).data('id');
       // console.log(id);
        $.ajax({
            url: '/cart/delete',
            data: {id: id},
            type: 'GET',
            success: function (res) {
                if (!res) alert('Ошибка!');
                // alert("Ответ получен!");
                //showReserve(res);
                location.reload();
            },
            error: function () {
                alert('Error!');
            }
        });
    });
// Аккордеон

    $(".list-group").dcAccordion({
        speed: 300
    });
    $(".accord").dcAccordion({
        speed: 300
    });

// JQuery UI Фильтр цен

    $(function() {
        var max = $(".max").text();
        //  alert(max);
        $("#slider-range-min").slider({
            range: "min",
            value: max,
            min: 0,
            max: max,

// Изменение значений ползунка
            slide: function( event, ui ) {
                $("#price1" ).val(ui.value);
                var rows = $("div#products");
                //alert(rows);
                for (var i = 0; i < rows.length; i++) {
                    //alert(rows[i]);
                    var price = +rows[i].querySelector('.price').textContent;
                    // alert(price);
                    rows[i].style.display = (price > ui.value) ? 'none' : 'block';
                }
            }
        });

//Запись начальных значений min & max
        $("#price1").val($("#slider-range-min" ).slider( "value") );
    });

// Изменение при вводе с клавиатуры
    $("#price1").oninput = function () {
        var rows = $("div#products");

        for (var i = 0; i < rows.length; i++) {
            var price = +rows[i].querySelector('.price').textContent;
            rows[i].style.display = (price > this.value) ? 'none' : 'block';
        }
    }
// Calculator

    var ids = $('#us').data('id'),
        rel = $('.res');

    $('#but').on('click', function(e){
        e.preventDefault();

        $.ajax({
            url: '/calc/index',
            data: {id: ids},
            type: 'POST',
            success: function (res) {
                if (!res) alert('Ошибка!');
                $('.res').append(res);
                //showReserve(res);
                //location.reload();

            },
            error: function () {
                alert('Error!');
            }
        });
    });


});