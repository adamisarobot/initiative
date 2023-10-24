<template>
  <label :class="{ 'sr-only': sronly }" for="hp-inline">{{ label }}</label>
  <input
    class="item__inline"
    type="text"
    maxlength="3"
    data-lpignore="true"
    v-model.number="inputNumber"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps<{
  number: number;
  label?: string;
  sronly?: boolean;
}>();
const emit = defineEmits(['update:number']);
const inputNumber = computed(() => props.number);
emit('update:number', inputNumber);
</script>

<style scoped>
.item__inline {
  max-width: 2.5rem;
  margin-left: 0.25rem;
  padding: 0.5rem 0.25rem 0.5rem;
  border: 0;
  border-radius: 0.25rem;
  font-size: 1rem;
}
</style>
