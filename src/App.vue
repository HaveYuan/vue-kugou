<template>
    <div id="app">
       <head-link></head-link>
       <keep-alive>
          <router-view></router-view>
       </keep-alive>

    </div>
</template>

<script>
    import headLink from './components/header/header';

    export default {
        name: 'App',
        components: {
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
