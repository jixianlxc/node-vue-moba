<template>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide">
        <img class="w-100" src="../assets/654e2025b51f89efd0646f328fc86986.jpeg">
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img class="w-100" src="../assets/c88a971d41876919cb2514e470c9e218.jpeg">
      </swiper-slide>
      <div class="swiper-pagination " style="text-align:right;" slot="pagination"></div>   <!-- 分页 -->
    </swiper>
</template>
<script>

export default {
  name: 'swipercmp',
  data(){
    return{
      swiperOption: {
        //显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        },
        //设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev'
        },
        //自动轮播
        autoplay: {
          delay: 3000
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        mousewheel: true
      }
    }
  }
}
</script>
<style lang="scss">
  .swiper-pagination-bullet{
    background: white;
    &.swiper-pagination-bullet-active{
      background: #4b67af
    }
  }
  .nav-items{
    width: 25%
  }
</style>