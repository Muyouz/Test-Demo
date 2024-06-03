<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <addCountDemo></addCountDemo>
    <button @click="incrementSharedValue">Increment Shared Value</button>
    <ComputedDemo1 @update-shared="handleUpdateShared" :current-value="sharedValue" />
    <ComputedDemo2 v-show="false" @update-shared="handleUpdateShared" :current-value="sharedValue" />
  </div>
</template>

<script>
import { ref } from 'vue'
import addCountDemo from './components/addCountDemo.vue'
import ComputedDemo1 from './components/computedDemo1.vue'
import ComputedDemo2 from './components/computedDemo2.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    addCountDemo,
    ComputedDemo1,
    ComputedDemo2,
  },
  data() {
    const sharedValue = ref(0);

    function incrementSharedValue() {
      sharedValue.value++;
    }

    const handleUpdateShared = (newValue) => {
      sharedValue.value = newValue;
    };
    return {
      sharedValue,
      incrementSharedValue,
      handleUpdateShared
    }
  },
}
</script>

<style>
#app {
  /* ... */
}
</style>