<template>
  <div>
      <nav-link></nav-link>
      <router-view></router-view>
  </div>
</template>

<script>
import navLink from '../nav/nav';
export default {
  name: 'home',
  components: {
    navLink,
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
