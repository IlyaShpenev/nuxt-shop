<template>
  <div class="card">
    <div class="card__inner">
      <nuxt-link exact="exact" :to="{name: 'products-slug', params: { slug } }" class="card__name">
        <p>{{ item.name }}</p>
        <p>{{ item.cost | formatUsd }}</p>
      </nuxt-link>
      <div class="card__button-holder">
        <action-button :product="item" :is-in-basket="isInBasket"></action-button>
      </div>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import {slug} from '@/helpers'
import AppActionButton from "~/components/AppActionButton";

const {mapGetters} = createNamespacedHelpers('cart')

export default {
  name: 'Card',
  components: {
    ActionButton: AppActionButton
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['cart']),
    isInBasket() {
      return this.cart.findIndex(el => el.id === this.item.id) !== -1
    },
    slug() {
      return slug(this.item.name)
    }
  },
}
</script>

