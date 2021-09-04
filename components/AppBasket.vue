<template>
  <div class="cart">
    <nuxt-link class="cart__link" exact="exact" :to="{name: 'cart'}" title="Cart">
      <span class="cart__count" v-if="amount > 0">
          <span>count:</span><span> {{ amount }} </span>
      </span>
      <span class="cart__total">
        <span>total price:</span><span> {{ total | formatUsd }} </span>
      </span>
    </nuxt-link>
  </div>
</template>

<script>

import {createNamespacedHelpers} from 'vuex'

const {mapGetters} = createNamespacedHelpers('cart')

export default {
  name: "AppBasket",
  computed: {
    ...mapGetters(['amount', 'total']),
  },

}
</script>

<style type="text/css">
.cart__link {
  display: flex;
  flex-direction: column;
}
</style>

