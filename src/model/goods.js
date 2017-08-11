function Goods () {
  let countName = 'countValue'

  function loadData () {
    return [{
      itemThum: require('../assets/image/goods/goods_1.png'),
      name: '珍珠奶茶',
      desc: '月售100份 好评率96%',
      price: 16
    }, {
      itemThum: require('../assets/image/goods/goods_2.png'),
      name: '金桔柠檬茶',
      desc: '月售100份 好评率96%',
      price: 20
    }, {
      itemThum: require('../assets/image/goods/goods_3.png'),
      name: '岩盐芝士柠茶',
      desc: '月售100份 好评率96%',
      price: 17
    }, {
      itemThum: require('../assets/image/goods/goods_4.png'),
      name: '柠檬菠萝乐',
      desc: '月售100份 好评率96%',
      price: 25
    }, {
      itemThum: require('../assets/image/goods/goods_4.png'),
      name: '柠檬菠萝乐',
      desc: '月售100份 好评率96%',
      price: 25
    }, {
      itemThum: require('../assets/image/goods/goods_4.png'),
      name: '柠檬菠萝乐',
      desc: '月售100份 好评率96%',
      price: 25
    }, {
      itemThum: require('../assets/image/goods/goods_4.png'),
      name: '柠檬菠萝乐',
      desc: '月售100份 好评率96%',
      price: 25
    }]
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
