<template>
  <div class="products">
    <app-product-list-item
      v-for="product in products"
      :key="product.id"
      :item="product"
      class="products__item">
    </app-product-list-item>
  </div>
</template>

<script>
import ProductListItem from "~/components/ProductList/ProductListItem";

export default {
  name: 'ProductList',
  components: {
    AppProductListItem: ProductListItem,
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
}
</script>
<style type="text/css">
.products {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 450px;
  margin-left: 50px;
}

.products__item {
  flex-basis: 150px;
}
</style>
