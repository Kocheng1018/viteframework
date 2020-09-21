<template lang="pug">
#HelloWorld
  h1 {{ state.msg }} 
  a-button(@click="addNum" type="primary") count is: {{ state.count }}
</template>
<script>
import { reactive } from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
    let state = reactive({
      msg: "!?!",
      count: 0
    });
    let addNum = () => {
      state.count ++;
    }

    return {
      state,
      addNum
    };
  }
}
</script>