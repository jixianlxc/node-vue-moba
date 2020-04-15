<template>
  <div>
    <div class="d-flex ai-center title text-blue px-2">
      <i class="iconfont icon-back pr-2" @click="$router.push('/')"></i>
      <h4 class="flex-1">{{news.title}}</h4>
      <span class="text-grey fs-sm ">{{news.createdAt|date}}</span>
    </div>
    <div v-html="news.body" class="p-3 w-100 news-body"></div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  props:{
    id:{required:true}
  },
  filters:{
    date(v){
      return dayjs(v).format('YYYY/MM/DD')
    }
  },
  data(){
    return{
      news:{}
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get(`/news/${this.id}`)
      this.news = res.data
    }
  },
  created(){
    this.id && this.fetch()
  }
}
</script>
<style lang="scss">
  .news-body{
    p{
      img { -ms-interpolation-mode: bicubic; }
      img { width: 100%; }
    }
  }

  .title{
    border-bottom: solid 1px gainsboro;
  }
</style>