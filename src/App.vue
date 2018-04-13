<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'App',
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
