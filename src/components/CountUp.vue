<template>
  <span ref="el">{{ prefix }}{{ value }}{{ suffix }}</span>
</template>

<script setup>
import { ref } from 'vue';
import { useCountUp } from '../composables/useCountUp';

const props = defineProps({
  end: { type: Number, required: true },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' },
  duration: { type: Number, default: 2000 }
});

const el = ref(null);
const value = useCountUp(el, props.end, props.duration);
</script>
