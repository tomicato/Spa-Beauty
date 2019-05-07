<option value="<?=$categories['id']?>" <?php if ($categories['parent_id'] == 0){echo 'style="color:#ff0000;"';}else{echo 'style="color:#000;"';} ?>"
    <?php if ($categories['id'] == $this->model->categories_id) echo 'selected';?>
    <?php if ($categories['parent_id'] == 0) echo 'disabled';?>>

    <?= $tab . $categories['title'] ?></option>
<?php if(isset($categories['childs'])):?>
    <ul><?=$this->getMenuHtml($categories['childs'], $tab . '-')?></ul>
<?php endif;?>
