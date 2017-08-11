<template>
  <c-view>
    <div class="head-cover">
      <div class="shop-info">
        <img class="img-cover" :src="require('../../assets/image/main-view/head-cover.png')" alt="">
        <div class="title">快乐柠檬</div>
        <div class="desc">发起人邀请你一起订餐</div>
      </div>
      <div class="select-btn" @click="goToShop()">选购商品</div>
    </div>
    <order-list :data-list="orderList"></order-list>
    <div class="sum">
      <span class="count">{{peopleCount}}人, {{shopCount}}份商品</span>
      <span class="price">合计{{priceCount}}</span>
    </div>
  </c-view>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    data () {
      return {
        orderList: [{
          userId: 123,
          userName: '李',
          shopList: [{
            id: '',
            name: '柠檬茶',
            count: 2,
            price: 16
          }, {
            id: '',
            name: '可乐',
            count: 6,
            price: 3
          }]
        }, {
          userId: 123,
          userName: '李',
          shopList: [{
            id: '',
            name: '茶',
            count: 1,
            price: 50
          }, {
            id: '',
            name: '可乐',
            count: 6,
            price: 3
          }]
        }, {
          userId: 123,
          userName: '李',
          shopList: [{
            id: '',
            name: '茶',
            count: 2,
            price: 50
          }, {
            id: '',
            name: '可乐',
            count: 6,
            price: 3
          }]
        }]
      }
    },
    components: {},
    created () {
    },
    mounted () {
    },
    beforeDestroy () {
    },
    methods: {
      goToShop () {
        this.$router.push('/shop')
      },
      eachShopListItem () {
        let items = []
        this.orderList.forEach(item => {
          item.shopList.forEach(childItem => {
            items.push(childItem)
          })
        })
        return items
      }
    },
    computed: {
      peopleCount () {
        return this.orderList.length
      },
      shopCount () {
        let result = 0
        this.eachShopListItem().forEach(item => {
          result += item.count
        })
        return result
      },
      priceCount () {
        let result = 0
        this.eachShopListItem().forEach(item => {
          result += item.count * item.price
        })
        return result
      }
    },
    events: {}
  }
</script>
