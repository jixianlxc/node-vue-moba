<template>
    <div class="card bg-white  mt-3">
      <div class="card-header d-flex ai-center pb-3">
        <i class="iconfont" :class="icon"></i>
        <h2 class="fs-lg px-2 flex-1 m-0">{{title}}</h2>
        <i class="iconfont icon-menu1"></i>
      </div>
      <div class="card-body pt-2">
        <slot></slot>
      </div>
    </div>
</template>
<script>
export default {
  props:{
    title:{type:String,required:true},
    icon:{type:String,required:true}
  },
  data(){
    return{
      // icon:'icon-menu'
    }
  }
}
</script>
<style lang="scss">
// @import '../style.scss';
  .card{
    .card-header{
      border-bottom: solid 1px gainsboro;
      // color:gainsboro;
    }
  }
</style>