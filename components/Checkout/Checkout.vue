<template>
  <div class="content">
    <checkout-form>
    </checkout-form>
    <p><strong>Total: <span> {{ total | formatUsd }}</span></strong></p>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import CheckoutForm from "~/components/Checkout/CheckoutForm";

const {mapGetters} = createNamespacedHelpers('cart')

export default {
  name: 'Checkout',
  components: {
    CheckoutForm
  },
  computed: {
    ...mapGetters(['total']),
  },
  methods: {}
}
</script>
