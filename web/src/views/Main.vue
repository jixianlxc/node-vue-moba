<template>
  <div>
    <div class="topbar bg-black py-2 px-4 d-flex ai-center">
      <img src="../assets/logo.png" height="30">
      <div class="px-2 flex-1">
        <div class="text-white fs-sm mt-1">王者荣耀</div>
        <div class="text-grey fs-xxs py-1">团队成就更多</div>
      </div>
      <button href="" class="btn bg-primary py-1 px-2">立即下载</button>
    </div>
    <div class="nav-reverse bg-primary pt-3 pb-2 jc-around">
      <div class="nav-item" :class="{active:active===0}">
        <router-link tag="div" to="/" @click="active=0">首页</router-link>
      </div>    
      <div class="nav-item" :class="{active:active===1}">
        <router-link tag="div" to="/null" @click="active=1">攻略中心</router-link>
      </div>    
      <div class="nav-item" :class="{active:active===2}">
        <router-link tag="div" to="/null" @click="active=2">赛事中心</router-link>
      </div>    
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  // name: 'main'
  data(){
    return{
      active:0
    }
  }
}
</script>
<style lang="scss">
  .topbar{
    position: sticky;
    top:0;
    z-index: 999;
  }
</style>