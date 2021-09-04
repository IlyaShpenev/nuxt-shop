<template>
  <header class="header">
    <div class="header__inner">
      <app-nav></app-nav>
      <app-basket></app-basket>
    </div>
  </header>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import AppBasket from "~/components/AppBasket";
import AppNav from "~/components/AppNav";

const {mapGetters} = createNamespacedHelpers('cart')

export default {
  name: 'AppHeader',
  components: {
    AppBasket,
    AppNav
  }
}
</script>

<style>
.header__inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 300px;

}
</style>
