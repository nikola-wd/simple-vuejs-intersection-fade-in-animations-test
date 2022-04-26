<template>
  <span ref="spanRef" />
  <slot></slot>
</template>

<script>
import { onMounted, ref } from 'vue';
import { IntersectionTransitions } from '../IntersectionTransitions.js';

export default {
  props: {
    mode: String,
    inOut: Boolean,
  },
  setup(props) {
    const spanRef = ref(null);
    onMounted(() => {
      const el = spanRef.value.nextElementSibling;
      console.log(el);

      el.classList.add('ivtr');
      if (props.mode) el.classList.add(`ivtr--${props.mode}`);
      if (props.inOut) el.classList.add('ivtr--in-out');

      new IntersectionTransitions(el);
    });

    return {
      spanRef,
    };
  },
};
</script>

<style scoped>
span {
  position: absolute;
  width: 0;
  height: 0;
  visibility: hidden;
  display: none;
}
</style>
