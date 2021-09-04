<template>
  <aside class="sidebar">

    <app-select :items="categories" :current="categorySelected" code="category" label="Category"
                @input="handleInput($event)"></app-select>

  </aside>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import AppSelect from "~/components/AppSelect";

const {mapActions, mapGetters} = createNamespacedHelpers('category')

export default {
  name: 'AppSidebar',
  components: {
    AppSelect
  },
  computed: {
    ...mapGetters(['categories', 'categorySelected'])
  },
  methods: {
    ...mapActions(['setCategory']),
    handleInput(event) {
      this.setCategory(+event)
    }
  }
}
</script>
