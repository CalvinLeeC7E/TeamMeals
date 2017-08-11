<template>
  <div class="shop-cart-detail">
    <div class="detail-list">
      <div class="head">
        购物车
      </div>
      <div v-for="item in shopCartList">
        <div class="item">
          <div class="name">{{item.name}}</div>
          <div v-html="currency(goodsIns.itemTotalPrice.call(item))"></div>
          <div>
            <c-counter v-model="item[countName]"
                       @select="goodsItemChange(item)"></c-counter>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  import Vue from 'vue'
  import Goods from '../../../model/goods'

  export default {
    name: 'shop-cart-detail',
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    data () {
      let goodsIns = Goods()
      return {
        goodsIns,
        currency: Vue.filter('currency'),
        countName: goodsIns.countName
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
      goodsItemChange (goodsItem) {
        this.$store.dispatch('maintainShopCart', goodsItem)
      }
    },
    computed: {
      shopCartList () {
        return this.$store.getters.shopCartList
      },
      hideShopCart () {
        return this.$store.getters.shopCartListCount
      }
    },
    watch: {
      hideShopCart (val) {
        if (val === 0) {
          this.$emit('update:visible', false)
        }
      }
    }
  }
</script>
