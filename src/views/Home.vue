<template lang="pug">
#Home
  h1 !!!!
  img(alt="Vue logo" src="../assets/logo.png")
  HelloWorld
</template>
<script>
import { onMounted } from 'vue';
import api from "../api/https";
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: `Home`,
  components: {
    HelloWorld
  },
  setup() {
    onMounted(() => {
      // fetch("https://jsonplaceholder.typicode.com/todos/1")
      //   .then(req => { console.log(req) })
      api("get", "https://jsonplaceholder.typicode.com/todos/1")
        .then(req => {
          console.log(`ans: ${req}`);
        })
    })
  }
}
</script>
<style lang="scss" scoped>

</style>