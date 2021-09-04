<template>
  <div class="card-detail">
    <h1 class="card-detail__name">{{ item.name }}</h1>
    <p class="card-detail__description">{{ item.descr }}</p>
    <p class="card-detail__price">{{ item.cost }}</p>
    <action-button class="card-detail__button button" :product="item" :is-in-basket="isInBasket"></action-button>
  </div>

</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import {slug} from '@/helpers'
import AppActionButton from "~/components/AppActionButton"

const {mapGetters} = createNamespacedHelpers('product')
const {mapGetters: mapGettersCart} = createNamespacedHelpers('cart')


export default {
  name: 'detail',
  components: {
    ActionButton: AppActionButton
  },
  // В данном случае, нет необходимости в fetch или asyncData, поскольку, товары получаем общим списком в nuxtServerInit
  validate({store, params}) {
    const allProducts = store.getters['product/allProducts']
    const isProductExists = params =>
      allProducts.some(({name}) => slug(name) === params.slug)
    return isProductExists(params)
  },
  head() {
    return {
      title: `${this.item.name}`
    }
  },
  computed: {
    ...mapGettersCart(['cart']),
    ...mapGetters(['productFromSlugParamRoute']),
    item() {
      return this.productFromSlugParamRoute(this.$route.params.slug)
    },
    isInBasket() {
      return this.cart.findIndex(el => el.id === this.item.id) !== -1
    },
  },
}
</script>
