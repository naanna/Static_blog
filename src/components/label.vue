<template>
<div class="label">
    <div class="__p_2091_uid_710"  v-for="list in label">
      <span class="__p_2091_uid_711">{{list}}</span>
    </div>
</div>
</template>

<script>
export default {
name: 'label',
data () {
    return {
    label:["小说","同人","技术","搬运"]
    }
}
}
</script>

<style scoped>
  .label{
    padding-top:50px;
  }
  .__p_2091_uid_711 {
    font-size: 16px;
    color: #767171;
  }

  .__p_2091_uid_710 {
    width: 600px;
    display: block;
    margin-left: auto;
    padding-left: 30px;
    border-left: 1px solid #D5D5D5;
    border-bottom: 1px dashed #D5D5D5;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: left;
    margin-right: auto;
  }
</style>
