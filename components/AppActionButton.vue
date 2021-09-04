<template>
  <button class="card__button button" @click="handleClick" :aria-label="label">
    {{ label }}
  </button>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {mapActions} = createNamespacedHelpers('cart')

export default {
  name: 'AppActionButton',
  props: {
    product: {
      type: Object,
      required: true
    },
    isInBasket: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    label() {
      return this.isInBasket ? 'Remove from cart' : 'Add to cart'
    }
  },
  methods: {
    ...mapActions(['addItem', 'removeItem']),
    handleClick() {
      this.isInBasket ? this.removeItem(this.product.id) : this.addItem(this.product)
    }
  }
}
</script>
