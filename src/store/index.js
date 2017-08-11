import Vue from 'vue'
import Vuex from 'vuex'
import Goods from '../model/goods'

Vue.use(Vuex)
const goodsIns = Goods()
const store = new Vuex.Store({
  state: {
    shopCartList: []
  },
  getters: {
    shopCartList (state) {
      return state.shopCartList
    },
    shopCartListCount (state) {
      return goodsIns.cartCount(state.shopCartList)
    },
    shopCartTotalPrice (state) {
      return goodsIns.cartTotalPrice(state.shopCartList)
    }
  },
  actions: {
    maintainShopCart ({state}, goodsItem) {
      let index = state.shopCartList.findIndex(item => {
        return item === goodsItem
      })
      // 插入购物车
      if (index === -1) {
        state.shopCartList.push(goodsItem)
      }
      // 移除购物车
      if (goodsItem[goodsIns.countName] === 0) {
        state.shopCartList.splice(index, 1)
      }
    }
  },
  mutations: {}
})

export default store
