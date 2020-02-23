<template>
  <div class="MainTabBar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="../../assets/img/tabbar/nav_icon_01.png" />
        <img slot="item-icon-active" src="../../assets/img/tabbar/nav_icon_05.png" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="../../assets/img/tabbar/nav_icon_02.png" />
        <img slot="item-icon-active" src="../../assets/img/tabbar/nav_icon_05.png" />
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="../../assets/img/tabbar/nav_icon_03.png" />
        <img slot="item-icon-active" src="../../assets/img/tabbar/nav_icon_05.png" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>

      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="../../assets/img/tabbar/nav_icon_04.png" />
        <img slot="item-icon-active" src="../..//assets/img/tabbar/nav_icon_05.png" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../tabbar/TabBar";
import TabBarItem from "../tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style  scoped>
</style>
