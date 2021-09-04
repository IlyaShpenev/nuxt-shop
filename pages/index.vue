<template>
  <section class="section">
    <app-sidebar></app-sidebar>
    <product-list :products="products"></product-list>
  </section>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'

import AppSidebar from '@/components/AppSidebar'
import ProductList from "~/components/ProductList/ProductList";

const {mapGetters} = createNamespacedHelpers('product')

export default {
  name: 'Index',
  async fetch() {
    let categories = await this.$repositories.categories.get();
    this.$store.commit('category/SET_CATEGORIES', categories);
  },
  components: {
    ProductList,
    AppSidebar
  },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style type="text/css">
.section {
  display: flex;
  flex-direction: row;
}
</style>

