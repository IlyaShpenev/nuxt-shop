<template>
  <section class="section">
    <div class="content" v-if="status !== 'success'">
      <div v-if="amount > 0">
        <cart-list :items="cart"></cart-list>
        <checkout></checkout>

      </div>
      <div class="empty has-text-centered" v-else>
        <h3>Your cart is empty.</h3>
        <nuxt-link exact="exact" to="/">fill my cart</nuxt-link>
      </div>
    </div>
    <div v-else>
      <h2>Success!</h2>
      <p>Your order has been processed</p>
      <button role="link" @click="reset">fill again</button>
    </div>

  </section>

</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import Checkout from '@/components/Checkout/Checkout'
import CartList from "~/components/Cart/CartList";

const {mapGetters} = createNamespacedHelpers('cart');
const {mapGetters: mapGettersCheckout, mapActions} = createNamespacedHelpers('checkout');

export default {
  name: 'Cart',
  components: {
    CartList,
    Checkout,
  },
  computed: {
    ...mapGetters(['cart', 'amount']),
    ...mapGettersCheckout(['status'])
  },
  methods: {
    ...mapActions(['clearCheckout']),
    reset() {
      this.clearCheckout();
      this.$router.replace('/');
    }
  }
}
</script>

