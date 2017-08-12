<template>
  <c-view>
    <goods-list class="goods-list-area" :data-list="goodsList"
                :countName="countName"
                @select="goodsItemSelect">
    </goods-list>
    <shop-cart></shop-cart>
  </c-view>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  import Goods from '../../model/goods'

  export default {
    data () {
      let goodsIns = Goods()
      return {
        goodsIns,
        countName: goodsIns.countName,
        goodsList: [],
        shopCart: []
      }
    },
    components: {},
    created () {
      this.goodsIns.loadData().then(data => {
        this.goodsList = data
      })
    },
    mounted () {
    },
    beforeDestroy () {
    },
    methods: {
      goodsItemSelect (goodsItem) {
        this.$store.dispatch('maintainShopCart', goodsItem)
      }
    },
    computed: {},
    events: {}
  }
</script>
