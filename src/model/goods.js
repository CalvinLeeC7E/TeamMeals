import axios from 'axios'

function Goods () {
  let countName = 'countValue'

  function loadData () {
    return axios.get('http://calvinapi101.duapp.com').then(res => {
      return res.data
    })
  }

  function cartCount (cartList) {
    let count = 0
    for (let item of cartList) {
      count += item[countName]
    }
    return count
  }

  function cartTotalPrice (cartList) {
    let totalPrice = 0
    for (let item of cartList) {
      totalPrice += itemTotalPrice.call(item)
    }
    return totalPrice
  }

  function itemTotalPrice () {
    return (this[countName] || 0) * this.price
  }

  return {
    countName,
    loadData,
    cartCount,
    cartTotalPrice,
    itemTotalPrice
  }
}

export default Goods
