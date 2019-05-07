<option value="<?=$categories['id']?>"
    <?php if ($categories['id'] == $this->model->parent_id) echo 'selected'?>
    <?php if ($categories['id'] == $this->model->id) echo 'disabled'?>>
    <?= $tab . $categories['title']?></option>
<?php if(isset($categories['childs'])):?>
    <ul><?=$this->getMenuHtml($categories['childs'], $tab . '-')?></ul>
<?php endif;?>
