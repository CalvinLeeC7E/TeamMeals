import Vue from 'vue'

Vue.filter('currency', function (value) {
  if (value === undefined || value === null || Number.isNaN(value)) return ''
  return `&yen;${value}`
})
