<template class="dark-bg">
  <Home class="dark-bg z-1 absolute" style="z-index: 1" />
  <div class="flex">
    <div class="w-1/2 h-screen"><p></p></div>
    <div class="circle-gradient absolute z-0 right-0 top-40 w-1/2 h-full rotate-90"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./components/Home.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
  },
});
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  background-color: #12041d;
}
.circle-gradient {
  background: radial-gradient(circle, rgba(18, 4, 29, 1) 0%, rgba(70, 47, 91, 0.3) 0%, rgba(18, 4, 29, 1) 67%);
}

.dark-bg {
  background-color: #12041d !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
