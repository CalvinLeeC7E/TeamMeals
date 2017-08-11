<template>
  <div class="goods-list">
    <div class="item" v-for="item in dataList">
      <div class="detail">
        <img class="img" :src="item.itemThum">
        <div class="info">
          <div class="title">{{item.name}}</div>
          <div class="desc">{{item.desc}}</div>
        </div>
      </div>
      <div class="operate">
        <div class="price" v-html="currency(item.price)"></div>
        <c-counter v-model="item[countName]"
                   @select="select(item)"></c-counter>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  import Vue from 'vue'

  export default {
    name: 'goods-list',
    props: {
      dataList: {
        type: Array,
        default: []
      },
      countName: {
        type: String,
        default: 'countValue'
      }
    },
    data () {
      return {
        currency: Vue.filter('currency')
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
      select (item) {
        this.$emit('select', item)
      }
    },
    computed: {},
    events: {}
  }
</script>
