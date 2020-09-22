<template lang="pug">
#Home
  h1 !!!!
  img(alt="Vue logo" src="../assets/logo.png")
</template>
<script>
import { onMounted } from 'vue';
import api from "../api/https";
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: `Home`,
  setup() {
    onMounted(() => {
    api("GET", "https://jsonplaceholder.typicode.com/posts")
      .then(req => {
        console.log(req);
      })
    })
  }
}
</script>
<style lang="scss" scoped>

</style>