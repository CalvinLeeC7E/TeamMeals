import View from './view'
import Counter from './counter'
import GoodsList from './goods-list'
import OrderList from './order-list'
import ShopCart from './shop-cart'
import ShopCartDetail from './shop-cart/detail'

const components = [View, Counter, GoodsList, OrderList, ShopCart, ShopCartDetail]

function install (Vue, options) {
  components.map((item) => {
    Vue.component(item.name, item)
  })
}

export default {
  install
}
