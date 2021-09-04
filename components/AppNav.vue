<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list-item" v-for="(item, index) in items" :key="`${item.to}-${index}`">
        <nuxt-link class="link" exact="exact" :to="item.to" v-text="item.title"></nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            to: '/',
            title: 'Index page'
          },
          {
            to: '/cart/',
            title: 'Cart page'
          },
          {
            to: '/map/',
            title: 'Map'
          }
        ]
      },
      required: false,
    }
  }

}
</script>
