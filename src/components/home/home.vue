<template>
  <div id="app">
    <div class="top">
      <head-link></head-link>
      <nav-link></nav-link>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
import headLink from '../header/header';
import navLink from '../nav/nav';
export default {
  name: 'home',
  components: {
    navLink,
    headLink
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.top{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
}
</style>
