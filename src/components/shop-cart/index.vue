<template>
  <div>
    <div class="shop-cart">
      <div class="cart-btn-area" @click="showCartDetail">
        <i class="icon-cart cart-btn"></i>
        <div class="count">{{cartCount}}</div>
      </div>
      <div class="price" v-html="currency(cartTotalPrice)"></div>
      <div class="choose-btn" :class="{disable:cartCount==0}"
           @click="submit">选好了
      </div>
    </div>
    <transition name="slide-bottom">
      <shop-cart-detail v-if="showDetail" :visible.sync="showDetail"></shop-cart-detail>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  import Vue from 'vue'

  export default {
    name: 'shop-cart',
    data () {
      return {
        currency: Vue.filter('currency'),
        showDetail: false
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
      submit () {
        if (!this.cartCount) return
        console.log('OK')
      },
      showCartDetail () {
        this.showDetail = !this.showDetail
      }
    },
    computed: {
      cartCount () {
        return this.$store.getters.shopCartListCount
      },
      cartTotalPrice () {
        return this.$store.getters.shopCartTotalPrice
      }
    },
    events: {}
  }
</script>
