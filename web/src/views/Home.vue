<template>
  <div class="home">
    <swipers />
    <div class="nav-icons bg-white mt-3 d-flex flex-wrap text-center">
      <div class="nav-items" v-for="item in 10" :key=item>
        <i class="sprite sprite-news"></i>
        <div>爆料站zzzz</div>
      </div>
    </div>
    <m-list-card title='新闻列表' icon='icon-menu' :categories='newsData'>
      <template #list='{list}'>
          <div class="d-flex py-1 fs-lg" v-for='(item,index) in list' :key="index">
            <span class="text-grey">[{{item.categoryName}}]</span>
            <span class="px-1">｜</span>
            <span class="text-dark flex-1 text-ellipsis pr-1">{{item.title}}</span>
            <span class="text-grey">{{item.createdAt|date}}</span>
          </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>
  // @ is an alias to /src
  import swipers from '@/components/Swiper.vue'
  import dayjs from 'dayjs'
  export default {
    name: 'home',
    components: {
      swipers
    },
    filters:{
      date(v){
        return dayjs(v).format('MM/DD')
      }
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
        },
        newsData:[
          // {
          //   name:'热门',
          //   list:[
          //     {
          //       categoryName:'公告',
          //       title:'停服维护更新公告',
          //       date:'06/01'
          //     },
          //     {
          //       categoryName:'公告',
          //       title:'停服维护更新公告',
          //       date:'06/01'
          //     },
          //     {
          //       categoryName:'公告',
          //       title:'停服维护更新公告',
          //       date:'06/01'
          //     },
          //     {
          //       categoryName:'公告',
          //       title:'停服维护更新公告',
          //       date:'06/01'
          //     },
          //     {
          //       categoryName:'公告',
          //       title:'停服维护更新公告',
          //       date:'06/01'
          //     }
          //   ]
          // },
          // {
          //   name:'新闻',
          //   list: new Array(5).fill('').map(v=>({
          //       categoryName:'新闻',
          //       title:'停服维护更新公告'+v,
          //       date:'06/01'
          //     })
          //   )
          // },
          // {
          //   name:'新闻',
          //   list: new Array(5).fill('').map(v=>(
          //     {
          //       categoryName:'新闻',
          //       title:'停服维护更新公告'+v,
          //       date:'06/01'
          //     }
          //   ))
          // },
          // {
          //   name:'新闻',
          //   list: new Array(5).fill('').map(v=>(
          //     {
          //       categoryName:'新闻',
          //       title:'停服维护更新公告'+v,
          //       date:'06/01'
          //     }
          //   ))
          // },
          // {
          //   name:'新闻',
          //   list: new Array(5).fill().map(v=>(
          //     {
          //       categoryName:'新闻',
          //       title:'停服维护更新公告'+v,
          //       date:'06/01'
          //     }
          //   ))
          // }
        ]
      }
    },
    methods:{
      async fetchNews(){
        const res = await this.$http.get('/news/list')
        this.newsData = res.data
      }
    },
    created(){
      this.fetchNews()
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