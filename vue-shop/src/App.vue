<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/AppHeader.vue';

export default {
  components: {
    TheHeader,
  },
  mounted() {
    this.$store.dispatch('autoLogin');
    this.$store.dispatch('cart/loadCart');
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
