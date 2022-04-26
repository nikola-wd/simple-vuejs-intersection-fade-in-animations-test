<template>
  <slot />
  <i ref="helperRef" />
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  props: {
    mode?: String,
  },
  setup(props) {
    const helperRef = ref(null);

    onMounted(() => {
      console.log(helperRef); // 0

      if (props.mode) {
        console.log(props.mode)
      }
    }),

    // expose to template and other options API hooks
    return {
      helperRef,
    };
  }
}
</script>
