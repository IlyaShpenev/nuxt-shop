<template>
  <section class="hero">
    <app-header></app-header>
    <main class="hero__body">
      <nuxt></nuxt>
    </main>
  </section>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: 'default',
  components: {AppHeader}
}
</script>
<style type="text/css">
button {
  cursor: pointer;
}
</style>
