<template>
  <li class="cart-product">
    <div class="cart-product__name">
      {{ name }}
    </div>
    <div class="cart-product__price">
      {{ cost | formatUsd }}
    </div>
    <button class="cart-product__action" @click="removeItem(id)">
      remove from cart
    </button>
  </li>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'

const {mapActions} = createNamespacedHelpers('cart')

export default {
  name: 'CartListItem',
  props: {
    name: {
      type: String,
      required: true
    },
    cost: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions(['removeItem'])
  }
}

</script>
