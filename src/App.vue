<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subition">-</button>
      <button @click="add(5)">+5</button>
    <button @click="add(10)">+10</button>
    <router-view />
  </div>
</template>

<script>
import MainTabBar from "./components/maintabbar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar
  },
  methods:{
    addition(){
      this.$store.commit('increment')
    },
    subition(){
 this.$store.commit('decrement')
    },
    add(counter){
      this.$store.commit({
        type:'incrementCount',
        counter
      })
    }
  }
};
</script>

<style>
</style>
