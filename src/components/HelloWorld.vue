<template>
  <div class="hello">
    <div v-for="item in my" class="box">
        <span>姓名：{{item.username}}</span>
        <span>年龄：{{item.age}}</span>
        <span v-if="item.sex == 1">性别：男</span>
        <span v-else="item.sex == 0">性别：女</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      my: [
        {
          username: 'lyy',
          age: 23,
          sex: 1
        },
        {
          username: 'redsanjin',
          age: 23,
          sex: 1
        },
        {
          username: 'wcly',
          age: 22,
          sex: 1
        },
        {
          username: 'ylq',
          age: 25,
          sex: 1
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$baseColor: #999;
.box{
  color: $baseColor;
}
</style>
