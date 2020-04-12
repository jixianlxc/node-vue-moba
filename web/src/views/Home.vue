<template>
  <div class="home">
    <swipers />
    <div class="nav-icons bg-white mt-3 d-flex flex-wrap text-center">
      <div class="nav-items" v-for="item in 10" :key=item>
        <i class="sprite sprite-news"></i>
        <div>爆料站zzzz</div>
      </div>
    </div>

    <m-card title='新闻资讯' icon='icon-menu'>      
      <div class="card-body pt-2">
        <div class="nav d-flex pb-2 jc-between">
          <div class="nav-item active">
            <div class="nav-link">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">公告</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">活动</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">赛事</div>
          </div>
        </div>
        <swiper>
          <swiper-slide class="swiper-slide" v-for='m in 5' :key='m'>
            <div class="d-flex my-2" v-for='n in 5' :key="n">
              <span>[新闻]</span>
              <span>｜</span>
              <span>王者荣耀新版本上线</span>
              <span class="flex-1">04/11</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>
    <m-card title='aa' icon='icon-menu'>slot</m-card>
  </div>
</template>

<script>
  // @ is an alias to /src
  import swipers from '@/components/Swiper.vue'

  export default {
    name: 'home',
    components: {
      swipers
    },
    data() {
      return {
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
  .swiper-pagination-bullet {
    background: white;

    &.swiper-pagination-bullet-active {
      background: #4b67af
    }
  }

  .nav-items {
    width: 25%
  }
</style>