<template>
  <div >
    <router-view></router-view>
    <div>
      <button @click="add()">+1</button>
      <button @click="addAsync()">+1Async</button>
      <h1>{{$store.state.count}}</h1>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    add(){
      this.$store.commit('add')
    },
    addAsync(){
      this.$store.dispatch('addAsync')
    }
  }
}
</script>
<style>
  html,body{
    margin: 0;
    padding: 0;
  }
</style>