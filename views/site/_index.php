<?php

/* @var $this yii\web\View */

$this->title = 'My Yii Application';
?>
<div class="site-index">

    <div class="jumbotron">
        <h1>Congratulations!</h1>

        <p class="lead">You have successfully created your Yii-powered application.</p>

        <p>
            <a class="btn btn-lg btn-success pop-main" href="http://www.yiiframework.com">Get started with Yii</a>

            <button type="button" id="kv-btn-2" class="btn btn-info btn-lg">Launch 2</button>


        </p>
    </div>
<!--PopOver Content-->
    <div id="myPopover6" class="popover popover-default popover-x in right" style="top: 7181.5px; left: 457px; display: none; z-index: 1050; padding-top: 0px; padding-bottom: 0px;" aria-hidden="true">
        <div class="arrow"></div>
        <div class="popover-header popover-title"><button type="button" class="close" data-dismiss="popover-x">×</button>My Header</div>
        <div class="popover-body popover-content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFo-DqinR_XnPVXZ4ZeVtJfMaNQLqGN7fJn6CWfoLQ68Ii6-L5Tg" target="_blank"  alt="test" class="img-responsive" style="float: left; padding: 0 15px">
            <p class="text-justify">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, consectetur cupiditate deleniti doloremque doloribus dolorum eos et excepturi nam obcaecati porro quae quisquam quos sit ullam velit veritatis, voluptatem voluptatum.</span>
            </p>
        </div>

    </div>
<!--/PopOver Content-->
    <div class="body-content">

        <div class="row">
            <div class="col-lg-4">
                <h2>Heading</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.</p>

                <p><a class="btn btn-default" href="http://www.yiiframework.com/doc/">Yii Documentation &raquo;</a></p>
            </div>
            <div class="col-lg-4">
                <h2>Heading</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.</p>

                <p><a class="btn btn-default" href="http://www.yiiframework.com/forum/">Yii Forum &raquo;</a></p>
            </div>
            <div class="col-lg-4">
                <h2>Heading</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.</p>

                <p><a class="btn btn-default" href="http://www.yiiframework.com/extensions/">Yii Extensions &raquo;</a></p>
            </div>
        </div>

    </div>
</div>
<div id="myPopover6" class="popover popover-x popover-default">
    <div class="arrow"></div>
    <h3 class="popover-header popover-title"><span class="close pull-right" data-dismiss="popover-x">&times;</span>Title</h3>
    <div class="popover-body popover-content">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </div>
    <div class="popover-footer">
        <button type="submit" class="btn btn-sm btn-primary">Submit</button><button type="reset" class="btn btn-sm btn-default">Reset</button>
    </div>
</div>

<script>

</script>