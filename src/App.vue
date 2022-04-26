<template>
  <div id="app">
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style>
.ivtr {
  --offset: 30px;
  --delay: 0s;
  --duration: 0.4s;
  display: inline-block;
  opacity: 0;
  transition: transform var(--duration) ease-in-out var(--delay),
    opacity var(--duration) ease-in-out var(--delay);
}

.ivtr.ivtr--btm {
  transform: translateY(var(--offset));
}

.ivtr.ivtr--top {
  transform: translateY(calc(var(--offset) * -1));
}

.ivtr.ivtr--left {
  transform: translateX(calc(var(--offset) * -1));
}

.ivtr.ivtr--right {
  transform: translateX(var(--offset));
}

.ivtr.ivtr--btm.inView,
.ivtr.ivtr--top.inView {
  transform: translateY(0) !important;
  opacity: 1 !important;
}

.ivtr.ivtr--left.inView,
.ivtr.ivtr--right.inView {
  transform: translateX(0) !important;
  opacity: 1 !important;
}

.ivtr.ivtr--custom {
  opacity: 1 !important;
  transform: none !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
