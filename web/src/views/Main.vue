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
    <div class="nav bg-primary d-flex pt-3 pb-2 jc-around text-white">
      <div class="nav-item active">
        <router-link tag="div" to="/">首页</router-link>
      </div>    
      <div class="nav-item">
        <router-link tag="div" to="/">攻略中心</router-link>
      </div>    
      <div class="nav-item">
        <router-link tag="div" to="/">赛事中心</router-link>
      </div>    
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'main'
}
</script>
<style>

</style>