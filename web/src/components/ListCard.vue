<template>
  <m-card :title='title' :icon='icon'>
    <div class="card-body pt-2">
      <div class="nav d-flex pb-2 jc-between">
        <div class="nav-item" 
          :class="{active:active===index}" 
          v-for='(item,index) in categories' 
          :key="index"
          @click="$refs.list.swiper.slideTo(index)">
          <div class="nav-link">{{item.name}}</div>
        </div>
      </div>
      <swiper ref='list' @slide-change="(a)=>{active = $refs.list.swiper.realIndex}" :options="{autoHeight:true}">
        <swiper-slide class="swiper-slide" v-for='(item,index) in categories' :key='index'>
          <slot name="list" :list='item.list'></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>
<script>
export default {
  props:{
    title:{type:String,required:true},
    icon:{type:String,required:true},
    categories:{type:Array,required:true},
  },
  data(){
    return{
      active:0
    }
  }
}
</script>