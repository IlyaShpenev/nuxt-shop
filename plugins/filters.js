import Vue from 'vue'

Vue.filter('formatUsd', (value) => {
  return `$${value}`
})
