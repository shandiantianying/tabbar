<template>
  <div id="tabbar">
    <div class="page-tabbar">
      <mt-tabbar
        v-model="message"
        fixed
      >
        <mt-tab-item id="index">
          <span class="iconfont iconxuanzhongx"></span>
          <span class="tabbar-name">首页</span>
        </mt-tab-item>
        <mt-tab-item id="stockStatistics">
          <span class="iconfont iconxuanzhongx3"></span>
          <span class="tabbar-name">库存统计</span>
        </mt-tab-item>
        <mt-tab-item id="accountStatement">
          <span class="iconfont iconxuanzhongx1"></span>
          <span class="tabbar-name">台账报表</span>
        </mt-tab-item>
        <mt-tab-item id="myhome">
          <span class="iconfont iconxuanzhongx2"></span>
          <span class="tabbar-name">我的</span>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  components: {},
  props: {
    page: String,
    selected: String,
  },
  data() {
    return {
      message: this.selected
    };
  },
  watch: {
    message: function(val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case "index":
          this.$router.push("/index");
          break;
        case "stockStatistics":
          this.$router.push("/stockStatistics");
          break;
        case "accountStatement":
          this.$router.push("/accountStatement");
          break;
        case "myhome":
          this.$router.push("/myhome");
          break;
      }
    }
  },
};
</script>
<style lang="less" type="text/less" rel="stylesheet/less" scoped>
.mint-tab-item {
  &.is-selected{
    background: #fafafa;
    .mint-tab-item-label{
      .iconfont {
        color: #259af8;
      }
      .tabbar-name{
        color: #259af8;
      }
    }
  }
}
</style>