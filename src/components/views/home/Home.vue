<template>
  <div>
   <h1>首页</h1>
       <h2>{{$store.state.counter}}</h2>
        <h2>{{$store.getters.powerCounter}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
</style>
