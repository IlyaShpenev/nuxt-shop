<template>
  <div class="cart-products">
    <h3>Products:</h3>
    <transition-group name="items" tag="ul">
      <list-item v-for="{name, cost, id} in items" :key="id" :name="name" :cost="cost" :id="id"></list-item>
    </transition-group>
    <button @click="clearCart">clear basket</button>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'

const {mapActions} = createNamespacedHelpers('cart')
import CartListItem from "~/components/Cart/CartListItem";

export default {
  name: "CartList",
  components: {
    ListItem: CartListItem
  },
  props: {
    items: {
      required: false,
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    ...mapActions(['clearCart'])
  }

}
</script>

