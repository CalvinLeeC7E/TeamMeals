<template>
  <div class="counter">
    <template v-if="value>0">
      <i class="icon-sub" @click="counter(-1)"></i>
      <span class="count-value">{{value}}</span>
    </template>
    <i class="icon-add" @click="counter(1)"></i>
  </div>
</template>
<style lang="scss" scoped>
  @import './index.scss';
</style>
<script>
  export default {
    name: 'c-counter',
    props: {
      value: {
        type: Number,
        default: 0
      },
      minValue: {
        type: Number,
        default: 0
      },
      maxValue: {
        type: Number,
        default: Number.MAX_VALUE
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
      counter (step) {
        let nowValue = this.value + step
        if (nowValue < this.minValue || nowValue > this.maxValue) return
        this.$emit('input', nowValue)
        this.$emit('select')
      }
    },
    computed: {},
    events: {}
  }
</script>
