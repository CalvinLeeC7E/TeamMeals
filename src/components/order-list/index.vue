<template>
  <div class="order-list">
    <div class="item" v-for="item in dataList">
      <div class="user-info">
        <div class="user-name">{{item.userName}}</div>
        <div class="choose-btn">重新选购</div>
      </div>
      <div class="shop-list" v-for="shopItem in item.shopList">
        <div class="name">{{shopItem.name}}</div>
        <div class="count">x{{shopItem.count}}</div>
        <div class="price">{{sumPrice(shopItem)}}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    name: 'order-list',
    props: {
      dataList: {
        type: Array,
        default: []
      }
    },
    data () {
      return {}
    },
    components: {},
    created () {
    },
    mounted () {
    },
    beforeDestroy () {
    },
    methods: {
      sumPrice (shopItem) {
        return shopItem.count * shopItem.price
      }
    },
    computed: {},
    events: {}
  }
</script>
